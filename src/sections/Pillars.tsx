import { pillars } from '../config'

export function Pillars() {
  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Conceptos clave</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Principios que guían la experiencia y el diseño.</p>
        <div className="mt-6 flex flex-wrap gap-3">
          {pillars.map(p => (
            <span
              key={p}
              className="px-3 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur text-sm hover:shadow transition"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
} 