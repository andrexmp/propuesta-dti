import { useRef, useState } from 'react'

interface BeforeAfterProps {
  before: string
  after: string
  alt?: string
}

export function BeforeAfter({ before, after, alt = '' }: BeforeAfterProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [pct, setPct] = useState(50)

  return (
    <div
      ref={containerRef}
      className="relative w-full overflow-hidden rounded-2xl border border-neutral-200 dark:border-neutral-800 shadow-sm"
      style={{ aspectRatio: '16/9' }}
    >
      <img src={before} alt={alt} className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0" style={{ width: `${pct}%`, overflow: 'hidden' }}>
        <img src={after} alt={alt} className="h-full w-full object-cover" />
      </div>
      <input
        type="range"
        min={0}
        max={100}
        value={pct}
        onChange={(e) => setPct(Number(e.target.value))}
        className="absolute bottom-3 left-1/2 -translate-x-1/2 w-1/2"
        aria-label="Comparar antes/después"
      />
    </div>
  )
} 