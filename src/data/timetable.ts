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

// Szkoła Podstawowa im. Marii Skłodowskiej-Curie w Wilczycach, Wrocław, ul. Wrocławska 15

const klasa1bRows: LessonRow[] = [
  // Poniedziałek
  [1, '12:30', '13:15', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [1, '13:35', '14:20', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [1, '14:25', '15:10', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [1, '15:15', '16:00', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [1, '16:05', '16:50', 'Etyka', 'A205', 'Balicka Kamila'],
  // Wtorek
  [2, '12:30', '13:15', 'Język angielski', 'A205', 'Stawarz-Czerniec Monika'],
  [2, '13:35', '14:20', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [2, '14:25', '15:10', 'Wychowanie fizyczne', 'HS', 'Śnieżawska Gabiela'],
  [2, '15:15', '16:00', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [2, '16:05', '16:50', 'Zajęcia rozwijające artystyczne', 'A205', 'Balicka Kamila'],
  // Środa
  [3, '12:30', '13:15', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [3, '13:35', '14:20', 'Wychowanie fizyczne', 'HS', 'Śnieżawska Gabiela'],
  [3, '14:25', '15:10', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [3, '15:15', '16:00', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  // Czwartek
  [4, '07:55', '08:40', 'Język angielski', 'A205', 'Stawarz-Czerniec Monika'],
  [4, '08:50', '09:35', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [4, '09:45', '10:30', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [4, '10:35', '11:20', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [4, '11:25', '12:10', 'Religia', 'A205', 'Kruczek Agata'],
  // Piątek
  [5, '07:55', '08:40', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [5, '08:50', '09:35', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [5, '09:45', '10:30', 'Wychowanie fizyczne', 'HS', 'Śnieżawska Gabiela'],
  [5, '10:35', '11:20', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
  [5, '11:25', '12:10', 'Edukacja wczesnoszkolna', 'A205', 'Balicka Kamila'],
]

const klasa4cRows: LessonRow[] = [
  // Poniedziałek
  [1, '09:45', '10:30', 'Matematyka', 'A002', 'Kubot Joanna'],
  [1, '10:35', '11:20', 'Wychowanie fizyczne', 'HS', 'Nowosielska Agnieszka'],
  [1, '11:25', '12:10', 'Język angielski', 'A204', 'Felkner Agnieszka'],
  [1, '12:30', '13:15', 'Informatyka', 'A101', 'Loranty Justyna'],
  [1, '13:35', '14:20', 'Język polski', 'A202', 'Rauchut Katarzyna'],
  [1, '14:25', '15:10', 'Przyroda', 'A201', 'Dudkiewicz-Krysiak Anna'],
  [1, '15:15', '16:00', 'Przyroda', 'A201', 'Dudkiewicz-Krysiak Anna'],
  [1, '16:05', '16:50', 'Plastyka', 'A103', 'Lisicka Anna'],
  // Wtorek
  [2, '10:35', '11:20', 'Matematyka', 'A002', 'Kubot Joanna'],
  [2, '11:25', '12:10', 'Język polski', 'A206', 'Rauchut Katarzyna'],
  [2, '12:30', '13:15', 'Język polski', 'A206', 'Rauchut Katarzyna'],
  [2, '13:35', '14:20', 'Wychowanie fizyczne', 'HS', 'Nowosielska Agnieszka'],
  [2, '14:25', '15:10', 'Religia', 'A205', 'Kruczek Agata'],
  // Środa
  [3, '08:50', '09:35', 'Język angielski', 'A204', 'Felkner Agnieszka'],
  [3, '09:45', '10:30', 'Wychowanie fizyczne', 'HS', 'Nowosielska Agnieszka'],
  [3, '10:35', '11:20', 'Matematyka', 'A202', 'Kubot Joanna'],
  [3, '11:25', '12:10', 'Zajęcia praktyczno-techniczne', 'A003', 'Jaworska Joanna'],
  [3, '12:30', '13:15', 'Zajęcia praktyczno-techniczne', 'A003', 'Jaworska Joanna'],
  [3, '13:35', '14:20', 'Edukacja zdrowotna', 'A002', 'Nowosielska Agnieszka'],
  [3, '14:25', '15:10', 'Przyroda', 'A106', 'Dudkiewicz-Krysiak Anna'],
  // Czwartek
  [4, '08:50', '09:35', 'Godzina wychowawcza', 'A203', 'Nowosielska Agnieszka'],
  [4, '09:45', '10:30', 'Wychowanie fizyczne', 'HS', 'Nowosielska Agnieszka'],
  [4, '10:35', '11:20', 'Matematyka', 'A202', 'Kubot Joanna'],
  [4, '11:25', '12:10', 'Język polski', 'A002', 'Rauchut Katarzyna'],
  // Piątek
  [5, '07:55', '08:40', 'Język angielski', 'A101', 'Felkner Agnieszka'],
  [5, '08:50', '09:35', 'Historia', 'A105', 'Idzikowski Juliusz'],
  [5, '09:45', '10:30', 'Język polski', 'A203', 'Rauchut Katarzyna'],
  [5, '10:35', '11:20', 'Muzyka', 'A204', 'Piecha Marianna'],
]

export const kids: Kid[] = [
  {
    id: '1b',
    name: '1b',
    homeroom: 'Wychowawca: Paulina Harapiuk',
    color: '#007AFF',
    lessons: buildLessons('1b', klasa1bRows),
  },
  {
    id: '4c',
    name: '4c',
    homeroom: 'Wychowawca: Nowosielska Agnieszka',
    color: '#AF52DE',
    lessons: buildLessons('4c', klasa4cRows),
  },
]
