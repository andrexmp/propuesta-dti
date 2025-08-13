import { useId, useState } from 'react'
import type { ReactNode } from 'react'
import clsx from 'clsx'

interface TooltipProps {
  label: ReactNode
  children: ReactNode
  className?: string
}

export function Tooltip({ label, children, className }: TooltipProps) {
  const [open, setOpen] = useState(false)
  const id = useId()

  return (
    <span className={clsx('relative inline-block', className)}>
      <span
        aria-describedby={id}
        onMouseEnter={() => setOpen(true)}
        onFocus={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        onBlur={() => setOpen(false)}
        tabIndex={0}
        className="underline decoration-dotted underline-offset-4 cursor-help"
      >
        {children}
      </span>
      {open && (
        <div
          id={id}
          role="tooltip"
          className="absolute z-40 mt-2 w-64 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-3 shadow-lg text-sm"
        >
          {label}
        </div>
      )}
    </span>
  )
} 