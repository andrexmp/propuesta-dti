import { CheckCircle2, Cable, BookOpenCheck, Layers3 } from 'lucide-react'

const items = [
  {
    title: 'Renovación Web',
    icon: CheckCircle2,
    tags: ['Velocidad', 'Accesibilidad', 'SEO', 'Design System']
  },
  {
    title: 'Canal Único (SPOC)',
    icon: Cable,
    tags: ['Trazabilidad', 'SLA', 'Prioridades']
  },
  {
    title: 'Paquete Forestal Inteligente',
    icon: Layers3,
    tags: ['IoT', 'Drones', 'GIS', 'KPIs']
  },
  {
    title: 'Autoservicio y Onboarding',
    icon: BookOpenCheck,
    tags: ['Tour', 'Ayudas', 'Plantillas']
  }
]

export function Objectives() {
  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-3xl md:text-4xl font-bold">Ejes y objetivos</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Cuatro frentes coordinados que articulan la transformación.</p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it) => {
            const Icon = it.icon
            return (
              <div key={it.title} className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-sm">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl p-2 bg-emerald-600/15 text-emerald-700 dark:text-emerald-300">
                    <Icon className="size-6" />
                  </div>
                  <div>
                    <div className="font-semibold">{it.title}</div>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {it.tags.map(tag => (
                        <span key={tag} className="text-xs rounded-full px-2 py-1 border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 