import type { DayOfWeek, Kid, Lesson } from './types'

// Każdy wiersz: [dzień, godzina rozpoczęcia, godzina zakończenia, przedmiot, sala, nauczyciel]
// dzień: 1 = poniedziałek, 2 = wtorek, 3 = środa, 4 = czwartek, 5 = piątek, 6 = sobota, 7 = niedziela
type LessonRow = [DayOfWeek, string, string, string, string, string]

function buildLessons(kidId: string, rows: LessonRow[]): Lesson[] {
  return rows.map(([day, startTime, endTime, subject, room, teacher], index) => ({
    id: `${kidId}-${index}`,
    day,
    startTime,
    endTime,
    subject,
    room,
    teacher,
  }))
}

// TODO: podmień poniższe dane na prawdziwy plan lekcji.

const dziecko1Rows: LessonRow[] = [
  // Poniedziałek
  [1, '08:00', '08:45', 'Matematyka', 'Sala 12', 'p. Kowalska'],
  [1, '08:55', '09:40', 'Język polski', 'Sala 12', 'p. Nowak'],
  [1, '09:50', '10:35', 'Przyroda', 'Sala 5', 'p. Zielińska'],
  [1, '10:55', '11:40', 'Wychowanie fizyczne', 'Sala gimnastyczna', 'p. Wójcik'],
  [1, '11:50', '12:35', 'Język angielski', 'Sala 8', 'p. Lewandowska'],
  // Wtorek
  [2, '08:00', '08:45', 'Historia', 'Sala 3', 'p. Kamiński'],
  [2, '08:55', '09:40', 'Matematyka', 'Sala 12', 'p. Kowalska'],
  [2, '09:50', '10:35', 'Plastyka', 'Sala plastyczna', 'p. Dąbrowska'],
  [2, '10:55', '11:40', 'Język polski', 'Sala 12', 'p. Nowak'],
  [2, '11:50', '12:35', 'Informatyka', 'Pracownia komputerowa', 'p. Wiśniewski'],
  // Środa
  [3, '08:00', '08:45', 'Język angielski', 'Sala 8', 'p. Lewandowska'],
  [3, '08:55', '09:40', 'Muzyka', 'Sala muzyczna', 'p. Kaczmarek'],
  [3, '09:50', '10:35', 'Matematyka', 'Sala 12', 'p. Kowalska'],
  [3, '10:55', '11:40', 'Religia', 'Sala 6', 'p. Piotrowski'],
  [3, '11:50', '12:35', 'Wychowanie fizyczne', 'Sala gimnastyczna', 'p. Wójcik'],
  // Czwartek
  [4, '08:00', '08:45', 'Przyroda', 'Sala 5', 'p. Zielińska'],
  [4, '08:55', '09:40', 'Język polski', 'Sala 12', 'p. Nowak'],
  [4, '09:50', '10:35', 'Matematyka', 'Sala 12', 'p. Kowalska'],
  [4, '10:55', '11:40', 'Historia', 'Sala 3', 'p. Kamiński'],
  [4, '11:50', '12:35', 'Godzina wychowawcza', 'Sala 12', 'p. Kowalska'],
  // Piątek
  [5, '08:00', '08:45', 'Język angielski', 'Sala 8', 'p. Lewandowska'],
  [5, '08:55', '09:40', 'Matematyka', 'Sala 12', 'p. Kowalska'],
  [5, '09:50', '10:35', 'Język polski', 'Sala 12', 'p. Nowak'],
  [5, '10:55', '11:40', 'Wychowanie fizyczne', 'Sala gimnastyczna', 'p. Wójcik'],
]

const dziecko2Rows: LessonRow[] = [
  // Poniedziałek
  [1, '08:00', '08:45', 'Język polski', 'Sala 4', 'p. Szymańska'],
  [1, '08:55', '09:40', 'Matematyka', 'Sala 7', 'p. Woźniak'],
  [1, '09:50', '10:35', 'Wychowanie fizyczne', 'Sala gimnastyczna', 'p. Wójcik'],
  [1, '10:55', '11:40', 'Muzyka', 'Sala muzyczna', 'p. Kaczmarek'],
  // Wtorek
  [2, '08:00', '08:45', 'Matematyka', 'Sala 7', 'p. Woźniak'],
  [2, '08:55', '09:40', 'Przyroda', 'Sala 5', 'p. Zielińska'],
  [2, '09:50', '10:35', 'Język angielski', 'Sala 9', 'p. Mazur'],
  [2, '10:55', '11:40', 'Plastyka', 'Sala plastyczna', 'p. Dąbrowska'],
  // Środa
  [3, '08:00', '08:45', 'Język polski', 'Sala 4', 'p. Szymańska'],
  [3, '08:55', '09:40', 'Historia', 'Sala 3', 'p. Kamiński'],
  [3, '09:50', '10:35', 'Matematyka', 'Sala 7', 'p. Woźniak'],
  [3, '10:55', '11:40', 'Wychowanie fizyczne', 'Sala gimnastyczna', 'p. Wójcik'],
  [3, '11:50', '12:35', 'Religia', 'Sala 6', 'p. Piotrowski'],
  // Czwartek
  [4, '08:00', '08:45', 'Język angielski', 'Sala 9', 'p. Mazur'],
  [4, '08:55', '09:40', 'Matematyka', 'Sala 7', 'p. Woźniak'],
  [4, '09:50', '10:35', 'Język polski', 'Sala 4', 'p. Szymańska'],
  [4, '10:55', '11:40', 'Informatyka', 'Pracownia komputerowa', 'p. Wiśniewski'],
  // Piątek
  [5, '08:00', '08:45', 'Przyroda', 'Sala 5', 'p. Zielińska'],
  [5, '08:55', '09:40', 'Język polski', 'Sala 4', 'p. Szymańska'],
  [5, '09:50', '10:35', 'Matematyka', 'Sala 7', 'p. Woźniak'],
  [5, '10:55', '11:40', 'Godzina wychowawcza', 'Sala 4', 'p. Szymańska'],
]

export const kids: Kid[] = [
  {
    id: 'dziecko-1',
    name: 'Dziecko 1',
    grade: 'klasa 5b',
    color: '#007AFF',
    lessons: buildLessons('dziecko-1', dziecko1Rows),
  },
  {
    id: 'dziecko-2',
    name: 'Dziecko 2',
    grade: 'klasa 2a',
    color: '#AF52DE',
    lessons: buildLessons('dziecko-2', dziecko2Rows),
  },
]
