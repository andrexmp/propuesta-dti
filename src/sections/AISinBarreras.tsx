import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

export function AISinBarreras() {
  const [open, setOpen] = useState(false)

  return (
    <section className="section relative flex items-center justify-center">
      <div className="absolute inset-0 -z-10">
        <motion.div
          className="absolute inset-0"
          style={{
            background:
              'conic-gradient(from 0deg at 50% 50%, rgba(64,145,108,0.2), transparent 25%, rgba(27,67,50,0.2), transparent 50%, rgba(64,145,108,0.2), transparent 75%, rgba(27,67,50,0.2))'
          }}
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 30, ease: 'linear', repeat: Infinity }}
        />
      </div>
      <div className="relative z-10 px-6 max-w-5xl w-full">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl font-extrabold">IA sin barreras</h2>
          <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
            Democratizamos capacidades cognitivas cuidando seguridad, privacidad y gobierno. Objetivo: habilitar a todos los equipos con asistentes y automatizaciones responsables.
          </p>
        </div>

        <div className="mt-8 grid md:grid-cols-3 gap-4">
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <h3 className="font-semibold">Opciones de despliegue</h3>
            <ul className="mt-2 text-sm list-disc pl-5">
              <li>APIs de proveedores (rápido, capacidades amplias)</li>
              <li>Modelos open‑source auto-hospedados (control y costo)</li>
              <li>Enfoque híbrido con ruteo inteligente por caso de uso</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <h3 className="font-semibold">Gobierno y seguridad</h3>
            <ul className="mt-2 text-sm list-disc pl-5">
              <li>SSO/RBAC, auditoría y políticas de retención</li>
              <li>Manejo de PII, DPA con proveedores y cifrado</li>
              <li>CSP estricta y aislamiento de contextos</li>
            </ul>
          </div>
          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <h3 className="font-semibold">Métricas y riesgos</h3>
            <ul className="mt-2 text-sm list-disc pl-5">
              <li>CSAT, ahorro de tiempo, exactitud y cobertura</li>
              <li>Riesgos: fuga de datos, alucinaciones, sesgos</li>
              <li>Mitigación: revisión humana, red team, guardrails</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 text-center">
          <button
            onClick={() => setOpen((o) => !o)}
            className="inline-flex items-center gap-2 rounded-lg border border-neutral-200 dark:border-neutral-800 px-4 py-2 text-sm bg-white/70 dark:bg-neutral-900/70"
            aria-expanded={open}
          >
            {open ? (<><span>Ver menos</span><ChevronUp className="size-4"/></>) : (<><span>Ver más (arquitectura y detalles)</span><ChevronDown className="size-4"/></>)}
          </button>
        </div>

        {open && (
          <div className="mt-4 rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 text-sm text-neutral-700 dark:text-neutral-300 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            <p>
              Arquitectura referencial: front con ruteo hacia un orquestador que elige entre API externa o modelo local según sensibilidad del dato y costo; almacenamiento de prompts y logs con auditoría; filtros de contenido y anonimización de PII previos a envío; caché de resultados no sensibles.
            </p>
            <p className="mt-3">
              Despliegue en fases: piloto con casos acotados (FAQ y redacción), expansión a clasificación de tickets y resumen de reportes, y finalmente integraciones con GIS/IoT para análisis operativos.
            </p>
          </div>
        )}
      </div>
    </section>
  )
} 