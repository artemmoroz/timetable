import type { Kid } from '../data/types'

interface TabBarProps {
  kids: Kid[]
  activeKidId: string
  onSelect: (kidId: string) => void
}

export function TabBar({ kids, activeKidId, onSelect }: TabBarProps) {
  return (
    <nav className="safe-bottom sticky bottom-0 z-20 border-t border-[var(--color-ios-separator)] bg-[var(--color-ios-bg)]/90 backdrop-blur-xl">
      <div className="flex">
        {kids.map((kid) => {
          const active = kid.id === activeKidId
          return (
            <button
              key={kid.id}
              type="button"
              onClick={() => onSelect(kid.id)}
              className="tap-scale flex flex-1 flex-col items-center gap-1 py-2"
            >
              <span
                className="flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-bold text-white"
                style={{ background: active ? kid.color : 'var(--color-ios-label-tertiary)' }}
              >
                {kid.name.charAt(0)}
              </span>
              <span
                className="text-[11px] font-medium"
                style={{ color: active ? 'var(--color-ios-blue)' : 'var(--color-ios-label-secondary)' }}
              >
                {kid.name}
              </span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
