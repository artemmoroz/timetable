// ISO-8601 day numbering: 1 = poniedziałek ... 7 = niedziela
export type DayOfWeek = 1 | 2 | 3 | 4 | 5 | 6 | 7

export interface Lesson {
  id: string
  subject: string
  day: DayOfWeek
  startTime: string // "HH:MM", 24h
  endTime: string // "HH:MM", 24h
  room: string
  teacher: string
}

export interface Kid {
  id: string
  name: string
  homeroom: string
  color: string
  lessons: Lesson[]
}
