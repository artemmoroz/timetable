import type { Kid } from '../data/types'
import { NavBar } from './NavBar'

interface KidPickerScreenProps {
  kids: Kid[]
  onSelect: (kidId: string) => void
  onTitleTap: () => void
}

export function KidPickerScreen({ kids, onSelect, onTitleTap }: KidPickerScreenProps) {
  return (
    <div className="min-h-dvh bg-[var(--color-ios-bg)]">
      <NavBar title="Plan lekcji" onTitleTap={onTitleTap} />
      <div className="px-4 pt-4">
        <p className="mb-4 text-[15px] text-[var(--color-ios-label-secondary)]">
          Do kogo należy to urządzenie?
        </p>
        <div className="flex flex-col gap-3">
          {kids.map((kid) => (
            <button
              key={kid.id}
              type="button"
              onClick={() => onSelect(kid.id)}
              className="tap-scale flex items-center gap-4 rounded-2xl bg-[var(--color-ios-card)] p-4 text-left shadow-sm"
            >
              <span
                className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-[20px] font-bold text-white"
                style={{ background: kid.color }}
              >
                {kid.name.charAt(0)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[17px] font-semibold text-[var(--color-ios-label)]">
                  {kid.name}
                </span>
                <span className="block truncate text-[13px] text-[var(--color-ios-label-secondary)]">
                  {kid.grade}
                </span>
              </span>
              <span className="text-[20px] text-[var(--color-ios-label-tertiary)]">›</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
