import type { ReactNode } from 'react'

interface NavBarProps {
  title: string
  subtitle?: string
  onTitleTap?: () => void
  trailing?: ReactNode
}

export function NavBar({ title, subtitle, onTitleTap, trailing }: NavBarProps) {
  return (
    <header className="safe-top sticky top-0 z-20 bg-[var(--color-ios-bg)]/85 backdrop-blur-xl">
      <div className="flex items-start justify-between px-4 pt-3 pb-2">
        <button
          type="button"
          onClick={onTitleTap}
          className="text-left tap-scale"
          style={{ WebkitTapHighlightColor: 'transparent' }}
        >
          <h1 className="text-[34px] font-bold leading-tight tracking-tight text-[var(--color-ios-label)]">
            {title}
          </h1>
          {subtitle && (
            <p className="text-[15px] font-medium text-[var(--color-ios-label-secondary)]">{subtitle}</p>
          )}
        </button>
        {trailing && <div className="pt-2">{trailing}</div>}
      </div>
    </header>
  )
}
