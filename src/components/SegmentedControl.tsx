interface SegmentedControlProps<T extends string | number> {
  options: { value: T; label: string }[]
  value: T
  onChange: (value: T) => void
}

export function SegmentedControl<T extends string | number>({
  options,
  value,
  onChange,
}: SegmentedControlProps<T>) {
  return (
    <div className="flex gap-0.5 rounded-[10px] bg-[var(--color-ios-card-secondary)] p-0.5">
      {options.map((option) => {
        const active = option.value === value
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(option.value)}
            className={`flex-1 rounded-[8px] py-1.5 text-[13px] font-semibold transition-all duration-150 ${
              active ? 'bg-white text-[var(--color-ios-label)] shadow-sm' : 'text-[var(--color-ios-label-secondary)]'
            }`}
          >
            {option.label}
          </button>
        )
      })}
    </div>
  )
}
