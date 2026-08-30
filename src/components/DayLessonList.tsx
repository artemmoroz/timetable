import type { Lesson } from '../data/types'

interface DayLessonListProps {
  lessons: Lesson[]
  currentLessonId?: string
}

export function DayLessonList({ lessons, currentLessonId }: DayLessonListProps) {
  if (lessons.length === 0) {
    return (
      <div className="mx-4 mt-6 rounded-2xl bg-[var(--color-ios-card)] p-6 text-center shadow-sm">
        <p className="text-[15px] text-[var(--color-ios-label-secondary)]">Brak lekcji tego dnia</p>
      </div>
    )
  }

  return (
    <div className="mx-4 mt-6 overflow-hidden rounded-2xl bg-[var(--color-ios-card)] shadow-sm">
      {lessons.map((lesson, index) => {
        const isActive = lesson.id === currentLessonId
        return (
          <div key={lesson.id}>
            <div className={`flex items-center gap-3 px-4 py-3 ${isActive ? 'bg-[var(--color-ios-blue)]/8' : ''}`}>
              <div className="w-[62px] shrink-0 text-[13px] leading-tight text-[var(--color-ios-label-secondary)]">
                <div className="font-semibold text-[var(--color-ios-label)]">{lesson.startTime}</div>
                <div>{lesson.endTime}</div>
              </div>
              <div className="min-w-0 flex-1">
                <p className="truncate text-[17px] font-medium text-[var(--color-ios-label)]">{lesson.subject}</p>
                <p className="truncate text-[13px] text-[var(--color-ios-label-secondary)]">
                  {lesson.room} · {lesson.teacher}
                </p>
              </div>
              {isActive && <span className="h-2 w-2 shrink-0 rounded-full bg-[var(--color-ios-blue)]" />}
            </div>
            {index < lessons.length - 1 && (
              <div className="ml-4 h-px bg-[var(--color-ios-separator)]" style={{ marginLeft: '78px' }} />
            )}
          </div>
        )
      })}
    </div>
  )
}
