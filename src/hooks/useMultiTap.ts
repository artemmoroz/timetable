import { useRef } from 'react'

/**
 * Wywołuje onTrigger po `count` szybkich dotknięciach z rzędu (np. potrójne stuknięcie
 * w tytuł odblokowuje tryb rodzica). Licznik resetuje się, jeśli przerwa między
 * dotknięciami przekroczy windowMs.
 */
export function useMultiTap(count: number, onTrigger: () => void, windowMs = 600) {
  const tapCount = useRef(0)
  const lastTap = useRef(0)

  return () => {
    const now = performance.now()
    if (now - lastTap.current > windowMs) {
      tapCount.current = 0
    }
    tapCount.current += 1
    lastTap.current = now

    if (tapCount.current >= count) {
      tapCount.current = 0
      onTrigger()
    }
  }
}
