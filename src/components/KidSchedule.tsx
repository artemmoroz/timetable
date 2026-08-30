import { useMemo, useState } from 'react'
import type { DayOfWeek, Kid } from '../data/types'
import { useNow } from '../hooks/useNow'
import { DAY_NAMES_SHORT, getLessonStatus, jsDayToIso, lessonsForDay } from '../lib/scheduleUtils'
import { LessonHeroCard } from './LessonHeroCard'
import { DayLessonList } from './DayLessonList'
import { SegmentedControl } from './SegmentedControl'

interface KidScheduleProps {
  kid: Kid
}

export function KidSchedule({ kid }: KidScheduleProps) {
  const now = useNow()
  const todayIso = jsDayToIso(now.getDay())

  const availableDays = useMemo<DayOfWeek[]>(() => {
    const base: DayOfWeek[] = [1, 2, 3, 4, 5]
    const usedDays = Array.from(new Set(kid.lessons.map((l) => l.day)))
    const extra = usedDays.filter((day) => !base.includes(day))
    return [...base, ...extra].sort((a, b) => a - b)
  }, [kid.lessons])

  const [selectedDay, setSelectedDay] = useState<DayOfWeek>(
    availableDays.includes(todayIso) ? todayIso : availableDays[0],
  )

  const status = useMemo(() => getLessonStatus(kid.lessons, now), [kid.lessons, now])
  const dayLessons = useMemo(() => lessonsForDay(kid.lessons, selectedDay), [kid.lessons, selectedDay])

  return (
    <div className="pb-8">
      <LessonHeroCard status={status} accentColor={kid.color} />

      <div className="mx-4 mt-6">
        <SegmentedControl
          options={availableDays.map((day) => ({ value: day, label: DAY_NAMES_SHORT[day] }))}
          value={selectedDay}
          onChange={setSelectedDay}
        />
      </div>

      <DayLessonList lessons={dayLessons} currentLessonId={selectedDay === todayIso ? status.current?.id : undefined} />
    </div>
  )
}
