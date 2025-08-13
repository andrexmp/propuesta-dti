import { useEffect } from 'react'
import clsx from 'clsx'

interface ModalProps {
  open: boolean
  title?: string
  onClose: () => void
  children: React.ReactNode
  className?: string
}

export function Modal({ open, title, onClose, children, className }: ModalProps) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} aria-hidden />
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className={clsx('w-full max-w-2xl rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 shadow-xl', className)} role="dialog" aria-modal="true">
          <div className="p-4 border-b border-neutral-200 dark:border-neutral-800 flex items-center justify-between">
            <h3 className="font-semibold">{title}</h3>
            <button onClick={onClose} aria-label="Cerrar" className="rounded-md px-2 py-1 text-sm border border-neutral-200 dark:border-neutral-800">Esc</button>
          </div>
          <div className="p-4 text-sm text-neutral-700 dark:text-neutral-300">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
} 