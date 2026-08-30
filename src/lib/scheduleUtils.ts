import type { DayOfWeek, Lesson } from '../data/types'

export const DAY_NAMES: Record<DayOfWeek, string> = {
  1: 'Poniedziałek',
  2: 'Wtorek',
  3: 'Środa',
  4: 'Czwartek',
  5: 'Piątek',
  6: 'Sobota',
  7: 'Niedziela',
}

export const DAY_NAMES_SHORT: Record<DayOfWeek, string> = {
  1: 'Pon',
  2: 'Wt',
  3: 'Śr',
  4: 'Czw',
  5: 'Pt',
  6: 'Sob',
  7: 'Niedz',
}

export function jsDayToIso(jsDay: number): DayOfWeek {
  // JS: 0=Sunday..6=Saturday -> ISO: 1=Monday..7=Sunday
  return (jsDay === 0 ? 7 : jsDay) as DayOfWeek
}

function timeToMinutes(time: string): number {
  const [h, m] = time.split(':').map(Number)
  return h * 60 + m
}

export function lessonsForDay(lessons: Lesson[], day: DayOfWeek): Lesson[] {
  return lessons
    .filter((lesson) => lesson.day === day)
    .sort((a, b) => timeToMinutes(a.startTime) - timeToMinutes(b.startTime))
}

export interface LessonStatusInfo {
  current: Lesson | null
  next: Lesson | null
  nextDay: DayOfWeek | null
  minutesUntilNext: number | null
}

/**
 * Znajduje trwającą lekcję (jeśli jest teraz) oraz najbliższą kolejną,
 * przeszukując dni tygodnia zaczynając od dziś (zawija się na kolejny tydzień).
 */
export function getLessonStatus(lessons: Lesson[], now: Date): LessonStatusInfo {
  const todayIso = jsDayToIso(now.getDay())
  const nowMinutes = now.getHours() * 60 + now.getMinutes()

  const todayLessons = lessonsForDay(lessons, todayIso)

  const current =
    todayLessons.find(
      (lesson) => timeToMinutes(lesson.startTime) <= nowMinutes && nowMinutes < timeToMinutes(lesson.endTime),
    ) ?? null

  const nextToday = todayLessons.find((lesson) => timeToMinutes(lesson.startTime) > nowMinutes) ?? null

  if (nextToday) {
    return {
      current,
      next: nextToday,
      nextDay: todayIso,
      minutesUntilNext: timeToMinutes(nextToday.startTime) - nowMinutes,
    }
  }

  // Brak kolejnej lekcji dziś — szukaj w kolejnych dniach tygodnia.
  for (let offset = 1; offset <= 7; offset++) {
    const day = (((todayIso - 1 + offset) % 7) + 1) as DayOfWeek
    const dayLessons = lessonsForDay(lessons, day)
    if (dayLessons.length > 0) {
      const minutesUntilNext = offset * 24 * 60 + timeToMinutes(dayLessons[0].startTime) - nowMinutes
      return {
        current,
        next: dayLessons[0],
        nextDay: day,
        minutesUntilNext,
      }
    }
  }

  return { current, next: null, nextDay: null, minutesUntilNext: null }
}

export function formatMinutesUntil(minutes: number): string {
  if (minutes < 60) return `za ${minutes} min`
  const hours = Math.floor(minutes / 60)
  const rest = minutes % 60
  if (hours < 24) {
    return rest === 0 ? `za ${hours} godz.` : `za ${hours} godz. ${rest} min`
  }
  const days = Math.floor(hours / 24)
  return days === 1 ? 'jutro' : `za ${days} dni`
}
