import { motion } from 'framer-motion'
import { LayoutDashboard, Ticket, Trees, GraduationCap } from 'lucide-react'
import { useState } from 'react'
import { Modal } from '../components/Modal'

const tiles = [
  {
    title: 'Renovación Web',
    desc: 'Sitio moderno, rápido y accesible con SEO orientado a servicios (drones, GIS).',
    icon: LayoutDashboard,
    color: 'from-emerald-500/15 to-emerald-500/0',
    how: (
      <div>
        <p className="mb-2">P1: contacto con empresa, renovación de logo+web, manual y portal de marca con descargas.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auditoría y propuesta visual</li>
          <li>Manual de marca y componentes UI</li>
          <li>Portal de marca (logos, tipografías, plantillas)</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Canal Único (SPOC)',
    desc: 'Unificación de requerimientos con estados, SLA y trazabilidad para mayor eficiencia.',
    icon: Ticket,
    color: 'from-teal-500/15 to-teal-500/0',
    how: (
      <div>
        <p className="mb-2">P2: SPOC DTI que reemplaza formulario/Excel/correo.</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Solicitud → asignación → chat en portal → notificaciones por correo</li>
          <li>Seguimiento y SLA visibles</li>
          <li>Base de conocimiento integrada</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Paquete Forestal Inteligente',
    desc: 'IoT + drones + GIS + analítica para monitoreo 24/7 y decisiones basadas en datos.',
    icon: Trees,
    color: 'from-green-600/15 to-green-600/0',
    how: (
      <div>
        <p className="mb-2">P3: paquete vendible (inventario+vuelos+cartografía+sensores).</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Planes tipo streaming con upgrades</li>
          <li>Campañas en Meta/ads alineadas a la web</li>
          <li>Roadmap de productos (MVP → +features)</li>
        </ul>
      </div>
    )
  },
  {
    title: 'Autoservicio y Onboarding',
    desc: 'Tour corto, ayudas contextuales y plantillas para lograr valor en minutos.',
    icon: GraduationCap,
    color: 'from-lime-500/15 to-lime-500/0',
    how: (
      <div>
        <p className="mb-2">P4: portal de ayudas con tutoriales (firma, impresión, pantallazos, Office 365, ChatGPT).</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Recursos de básico a intermedio</li>
          <li>Vídeos cortos y guías paso a paso</li>
          <li>Buscador y categorías por tarea</li>
        </ul>
      </div>
    )
  },
]

export function Initiatives() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section className="section flex items-center bg-gradient-to-b from-transparent to-emerald-500/5">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Detalle de Iniciativas</h2>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tiles.map((t, i) => {
            const Icon = t.icon
            return (
              <motion.div
                key={t.title}
                initial={{ y: 12, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: i * 0.05 }}
                className="rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4 shadow-sm hover:shadow-md relative overflow-hidden"
              >
                <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${t.color}`} />
                <div className="relative flex items-start gap-3">
                  <div className="rounded-xl p-2 bg-white/70 dark:bg-neutral-900/70 border border-neutral-200 dark:border-neutral-800">
                    <Icon className="size-5 text-emerald-700 dark:text-emerald-300" />
                  </div>
                  <div>
                    <div className="font-semibold">{t.title}</div>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">{t.desc}</p>
                    <button onClick={() => setOpen(i)} className="mt-3 text-sm underline underline-offset-4">¿Cómo lo haremos?</button>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
      <Modal open={open !== null} onClose={() => setOpen(null)} title={open !== null ? tiles[open].title : ''}>
        {open !== null && tiles[open].how}
      </Modal>
    </section>
  )
} 