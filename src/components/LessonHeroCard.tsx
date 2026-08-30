import type { Lesson } from '../data/types'
import type { LessonStatusInfo } from '../lib/scheduleUtils'
import { DAY_NAMES, formatMinutesUntil } from '../lib/scheduleUtils'

interface LessonHeroCardProps {
  status: LessonStatusInfo
  accentColor: string
}

function LessonDetails({ lesson }: { lesson: Lesson }) {
  return (
    <div className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-[15px] text-white/90">
      <span>
        {lesson.startTime}–{lesson.endTime}
      </span>
      <span>{lesson.room}</span>
      <span>{lesson.teacher}</span>
    </div>
  )
}

export function LessonHeroCard({ status, accentColor }: LessonHeroCardProps) {
  const { current, next, nextDay, minutesUntilNext } = status

  if (!current && !next) {
    return (
      <div className="mx-4 rounded-2xl bg-[var(--color-ios-card)] p-5 text-center shadow-sm">
        <p className="text-[17px] font-semibold text-[var(--color-ios-label-secondary)]">
          Brak zaplanowanych lekcji
        </p>
      </div>
    )
  }

  const primary = current ?? next!
  const isOngoing = Boolean(current)

  return (
    <div
      className="mx-4 rounded-2xl p-5 shadow-sm"
      style={{ background: `linear-gradient(135deg, ${accentColor}, ${accentColor}CC)` }}
    >
      <div className="flex items-center gap-1.5">
        {isOngoing && <span className="h-2 w-2 rounded-full bg-white animate-pulse-dot" />}
        <span className="text-[13px] font-bold uppercase tracking-wide text-white/85">
          {isOngoing ? 'Trwa teraz' : 'Następna lekcja'}
        </span>
      </div>
      <p className="mt-1 text-[26px] font-bold text-white">{primary.subject}</p>
      <LessonDetails lesson={primary} />

      {isOngoing && next && (
        <div className="mt-4 border-t border-white/25 pt-3">
          <p className="text-[13px] font-semibold uppercase tracking-wide text-white/70">Kolejna</p>
          <p className="text-[17px] font-semibold text-white">
            {next.subject} · {next.startTime}
          </p>
        </div>
      )}

      {!isOngoing && minutesUntilNext !== null && (
        <div className="mt-3">
          <span className="rounded-full bg-white/20 px-3 py-1 text-[13px] font-semibold text-white">
            {nextDay !== null && minutesUntilNext > 24 * 60
              ? DAY_NAMES[nextDay]
              : formatMinutesUntil(minutesUntilNext)}
          </span>
        </div>
      )}
    </div>
  )
}
