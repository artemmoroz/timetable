import { useEffect, useState } from 'react'
import { kids } from './data/timetable'
import { useMultiTap } from './hooks/useMultiTap'
import { NavBar } from './components/NavBar'
import { KidPickerScreen } from './components/KidPickerScreen'
import { KidSchedule } from './components/KidSchedule'
import { TabBar } from './components/TabBar'

const STORAGE_KEY = 'timetable:selectedKidId'

function App() {
  const [selectedKidId, setSelectedKidId] = useState<string | null>(() =>
    localStorage.getItem(STORAGE_KEY),
  )
  const [parentMode, setParentMode] = useState(false)
  const [activeParentKidId, setActiveParentKidId] = useState<string>(selectedKidId ?? kids[0].id)

  useEffect(() => {
    if (selectedKidId) localStorage.setItem(STORAGE_KEY, selectedKidId)
  }, [selectedKidId])

  const enterParentMode = useMultiTap(3, () => setParentMode(true))
  const exitParentMode = () => setParentMode(false)

  if (parentMode) {
    const activeKid = kids.find((k) => k.id === activeParentKidId) ?? kids[0]
    return (
      <div className="flex min-h-dvh flex-col bg-[var(--color-ios-bg)]">
        <NavBar
          title="Tryb rodzica"
          subtitle={activeKid.name}
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
        <TabBar kids={kids} activeKidId={activeKid.id} onSelect={setActiveParentKidId} />
      </div>
    )
  }

  if (!selectedKidId) {
    return <KidPickerScreen kids={kids} onSelect={setSelectedKidId} onTitleTap={enterParentMode} />
  }

  const kid = kids.find((k) => k.id === selectedKidId) ?? kids[0]

  return (
    <div className="min-h-dvh bg-[var(--color-ios-bg)]">
      <NavBar title={kid.name} subtitle={kid.grade} onTitleTap={enterParentMode} />
      <KidSchedule key={kid.id} kid={kid} />
    </div>
  )
}

export default App
