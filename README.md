# Plan lekcji

PWA (Progressive Web App) z planem lekcji dla dzieci, działająca offline i instalowalna
na ekranie głównym iPhone'a jak natywna aplikacja.

## Edycja planu lekcji

Cały plan lekcji jest zapisany w kodzie w pliku [`src/data/timetable.ts`](src/data/timetable.ts).
Każdy wiersz to jedna lekcja w formacie:

```ts
[dzień, godzina_rozpoczęcia, godzina_zakończenia, przedmiot, sala, nauczyciel]
```

gdzie `dzień`: `1` = poniedziałek, `2` = wtorek, ..., `7` = niedziela.

Aby zmienić imiona dzieci, edytuj pola `name` i `grade` w obiektach `kids` na końcu tego pliku.

## Tryb rodzica

Trzykrotne szybkie stuknięcie w tytuł na górze ekranu otwiera tryb rodzica z zakładkami
obu dzieci. Przycisk „Zamknij” w prawym górnym rogu wraca do trybu dziecka.

## Rozwój lokalny

```bash
npm install
npm run dev
```

## Build produkcyjny

```bash
npm run build
npm run preview
```

## Wdrożenie na GitHub Pages

Repozytorium zawiera workflow (`.github/workflows/deploy.yml`), który automatycznie
buduje i publikuje aplikację na GitHub Pages po każdym push do gałęzi `main`.

Jednorazowo w ustawieniach repozytorium: **Settings → Pages → Source → GitHub Actions**.
