import { useEffect, useState } from 'react'
import { kids } from './data/timetable'
import { useMultiTap } from './hooks/useMultiTap'
import { NavBar } from './components/NavBar'
import { KidPickerScreen } from './components/KidPickerScreen'
import { KidSchedule } from './components/KidSchedule'
import { TabBar } from './components/TabBar'

const STORAGE_KEY = 'timetable:selectedKidId'
const PARENT_MODE_STORAGE_KEY = 'timetable:parentMode'

function App() {
  const [selectedKidId, setSelectedKidId] = useState<string | null>(() =>
    localStorage.getItem(STORAGE_KEY),
  )
  const [parentMode, setParentMode] = useState<boolean>(
    () => localStorage.getItem(PARENT_MODE_STORAGE_KEY) === '1',
  )

  useEffect(() => {
    if (selectedKidId) localStorage.setItem(STORAGE_KEY, selectedKidId)
  }, [selectedKidId])

  useEffect(() => {
    localStorage.setItem(PARENT_MODE_STORAGE_KEY, parentMode ? '1' : '0')
  }, [parentMode])

  const enterParentMode = useMultiTap(3, () => setParentMode(true))
  const exitParentMode = () => setParentMode(false)

  if (parentMode) {
    const activeKid = kids.find((k) => k.id === selectedKidId) ?? kids[0]
    return (
      <div className="flex min-h-dvh flex-col bg-[var(--color-ios-bg)]">
        <NavBar
          title="Tryb rodzica"
          subtitle={`Klasa ${activeKid.name}`}
          trailing={
            <button
              type="button"
              onClick={exitParentMode}
              className="tap-scale rounded-full bg-[var(--color-ios-card-secondary)] px-3 py-1.5 text-[15px] font-semibold text-[var(--color-ios-blue)]"
            >
              Zamknij
            </button>
          }
        />
        <div className="flex-1 overflow-y-auto">
          <KidSchedule key={activeKid.id} kid={activeKid} />
        </div>
        <TabBar kids={kids} activeKidId={activeKid.id} onSelect={setSelectedKidId} />
      </div>
    )
  }

  if (!selectedKidId) {
    return <KidPickerScreen kids={kids} onSelect={setSelectedKidId} onTitleTap={enterParentMode} />
  }

  const kid = kids.find((k) => k.id === selectedKidId) ?? kids[0]

  return (
    <div className="min-h-dvh bg-[var(--color-ios-bg)]">
      <NavBar title={`Klasa ${kid.name}`} subtitle={kid.homeroom} onTitleTap={enterParentMode} />
      <KidSchedule key={kid.id} kid={kid} />
    </div>
  )
}

export default App
