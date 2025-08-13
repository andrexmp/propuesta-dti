import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ChevronUp, LayoutDashboard, Ticket, Trees, GraduationCap } from 'lucide-react'
import type { ComponentType } from 'react'

interface Item {
  title: string
  summary: string
  details: string
  krs?: string[]
  icon: ComponentType<{ className?: string }>
  color: string
}

const items: Item[] = [
  {
    title: 'Renovación Web',
    summary:
      'Rediseño integral para elevar conversión, velocidad y accesibilidad. Navegación simple, contenido enfocado en valor y SEO.',
    details:
      `Una renovación completa mejora experiencia e imagen. No es solo estética: optimiza usabilidad, rendimiento y contenido. Lo que funcionaba hace unos años hoy puede estar obsoleto; un rediseño moderniza la UI y mantiene a los usuarios comprometidos.

Claves:
- Arquitectura de información clara y CTAs visibles (cotizar, agendar demo, descargar brochure)
- Rendimiento (Core Web Vitals), imágenes optimizadas y carga percibida rápida
- Accesibilidad AA y diseño totalmente responsive
- SEO por servicios/casos de uso (p. ej. “cartografía con drones Chile”)
- Consistencia mediante Design System (tipografías, colores, iconos, componentes)

Equipo recomendado: UX/UI para la parte visual e interacción; front-end para implementación optimizada (HTML5/CSS3, accesibilidad, SEO); y contenido/SEO para reescritura y estructura. Trabajar en sprints: empezar por Home + Servicios, luego iterar con test de usuarios.

Resultado: sitio moderno, minimalista y claro, con tiempos de carga rápidos y accesible en todos los dispositivos. Mayor satisfacción, mejor percepción de marca y más tráfico orgánico.`,
    krs: ['Leads +50% (6 meses)', 'Top-5 en 5 keywords', 'NPS ≥ +40'],
    icon: LayoutDashboard,
    color: 'emerald'
  },
  {
    title: 'Canal Único de Requerimientos (SPOC)',
    summary:
      'Centraliza solicitudes en ticketing con estados/SLA y base de conocimiento; evita duplicidades y mejora MTTR.',
    details:
      `Un solo canal ordena y hace eficiente la comunicación. Evita duplicidades, inconsistencias y pérdidas de información entre correos, llamadas o chats.

Beneficios:
- Transparencia y claridad: todos ven la misma información actualizada con trazabilidad
- Ahorro de tiempo y rapidez de respuesta: el usuario no repite su caso; menor MTTR
- Mejor relación con el usuario: atención consistente y confianza en el seguimiento
- Facilidad de gestión interna: priorización, categorías y visibilidad para tomar decisiones

Implementación: helpdesk/ticketing con estados y SLA visibles, formularios guiados y automatizaciones (acuso de recibo, cambios de estado). Comunicar que todas las solicitudes ingresan por esta vía. La nueva web será la puerta de entrada con un CTA “Enviar solicitud”.`,
    krs: ['Adopción ≥ 90%', 'MTTR −30%', 'SLA ≥ 90%'],
    icon: Ticket,
    color: 'teal'
  },
  {
    title: 'Paquete Forestal Inteligente',
    summary:
      'IoT + drones + GIS + analítica con alertas y KPIs para monitoreo 24/7 y decisiones basadas en datos.',
    details:
      `Conjunto integrado para silvicultura 4.0 que combina hardware, software y servicios.

Componentes:
- Sensores ambientales IoT (humedad, temperatura, humo) para alertas tempranas 24/7
- Drones con cámaras multiespectrales para inspección ágil e índices vegetativos
- Integración satelital y datos de inventario
- Plataforma web central con mapas GIS, capas temáticas y dashboards con KPIs
- Modelos predictivos/optimización para cosecha, conservación y logística

Beneficios:
- Uso optimizado de recursos y respuesta rápida a incendios/plagas
- Protección de biodiversidad y contribución a metas climáticas
- Decisiones basadas en datos en tiempo real

Estrategia: iniciar con piloto acotado, ajustar y escalar. Explorar alianzas con fabricantes/instituciones para acelerar despliegue.`,
    krs: ['MVP en 6 meses', '3 pilotos con dashboard', 'CSAT ≥ 85%'],
    icon: Trees,
    color: 'green'
  },
  {
    title: 'Autoservicio y Onboarding',
    summary:
      'Tour breve, ayudas contextuales, estados vacíos con plantillas y validación al vuelo para “time‑to‑value” en minutos.',
    details:
      `Objetivo: que el usuario diga “qué fácil y agradable” desde el primer uso.

Elementos:
- Modo guía inicial (tour corto omitable) + tooltips contextuales
- Estados vacíos útiles con plantillas y ejemplos (“Crear mi primer X”)
- Formularios minimalistas con validación inmediata y feedback claro
- Consistencia visual mediante Design System
- Ayuda en 1 clic (FAQ contextual + micro‑learning en video 60s)
- Microinteracciones y microcopys amables; confirmaciones claras
- Preferencia de tema: modo claro/oscuro accesible

Impacto: menor fricción, menos tickets repetidos, activación más rápida y mayor retención.`,
    krs: ['Activación más rápida', 'Menos tickets repetidos', 'CSAT onboarding ↑'],
    icon: GraduationCap,
    color: 'lime'
  }
]

function colorClasses(base: string) {
  return `bg-${base}-600/15 text-${base}-700 dark:text-${base}-300`
}

export function InitiativesDeep() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Iniciativas en profundidad</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Explora los detalles cuando lo necesites. Por defecto, mostramos la síntesis.</p>
        <div className="mt-6 rounded-2xl overflow-hidden border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur shadow-sm">
          {items.map((it, idx) => {
            const isOpen = open === idx
            const Icon = it.icon
            return (
              <div key={it.title}>
                <button
                  className="w-full text-left px-4 py-3 flex items-center justify-between gap-3 hover:bg-neutral-50/60 dark:hover:bg-neutral-900"
                  onClick={() => setOpen(isOpen ? null : idx)}
                  aria-expanded={isOpen}
                  aria-controls={`details-${idx}`}
                >
                  <div className="flex items-center gap-3">
                    <span className={`rounded-xl p-2 ${colorClasses(it.color)}`}><Icon className="size-5"/></span>
                    <span className="font-medium">{it.title}</span>
                  </div>
                  {isOpen ? <ChevronUp className="size-4"/> : <ChevronDown className="size-4"/>}
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`details-${idx}`}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.22 }}
                      className="overflow-hidden border-t border-neutral-200 dark:border-neutral-800"
                    >
                      <div className="px-4 py-4 text-neutral-700 dark:text-neutral-300">
                        <p className="text-sm">{it.summary}</p>
                        <p className="text-sm mt-2 whitespace-pre-line">{it.details}</p>
                        {it.krs && (
                          <ul className="mt-3 text-sm list-disc pl-5">
                            {it.krs.map((k) => (<li key={k}>{k}</li>))}
                          </ul>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                {idx < items.length - 1 && <div className="h-px bg-neutral-200 dark:bg-neutral-800" />}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
} 