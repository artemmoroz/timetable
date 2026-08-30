import { useEffect, useState } from 'react'

/** Zwraca aktualny czas, odświeżany co interval ms (domyślnie co 15 s). */
export function useNow(intervalMs = 15_000): Date {
  const [now, setNow] = useState(() => new Date())

  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), intervalMs)
    return () => clearInterval(id)
  }, [intervalMs])

  return now
}
