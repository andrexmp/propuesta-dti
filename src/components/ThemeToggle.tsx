import { Moon, Sun } from 'lucide-react'
import { useTheme } from '../theme'
import clsx from 'clsx'

export function ThemeToggle({ className }: { className?: string }) {
  const { mode, setMode } = useTheme()

  const Button = ({ m, label, icon: Icon }: { m: 'light' | 'dark'; label: string; icon: React.ComponentType<{ className?: string }> }) => (
    <button
      aria-label={`Cambiar a tema ${label}`}
      onClick={() => setMode(m)}
      className={clsx(
        'rounded-full border px-3 py-2 text-sm backdrop-blur transition-colors flex items-center gap-2',
        'border-neutral-200 bg-white/70 hover:shadow dark:border-neutral-800 dark:bg-neutral-900/70',
        mode === m && 'ring-2 ring-emerald-500'
      )}
    >
      <Icon className="size-4" /> {label}
    </button>
  )

  return (
    <div className={clsx('inline-flex items-center gap-2', className)}>
      <Button m="light" label="Claro" icon={Sun} />
      <Button m="dark" label="Oscuro" icon={Moon} />
    </div>
  )
} 