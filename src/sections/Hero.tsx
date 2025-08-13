import { motion } from 'framer-motion'
import { MagneticButton } from '../components/MagneticButton'
import { heroVideoUrl } from '../config'

export function Hero() {
  return (
    <section className="section relative flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animated-gradient" aria-hidden />
      {heroVideoUrl && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
          src={heroVideoUrl}
          autoPlay
          loop
          muted
          playsInline
          aria-hidden
        />
      )}

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-b from-emerald-400 to-emerald-700 text-transparent bg-clip-text"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Transformación Estratégica DTI 2025–2026
        </motion.h1>
        <motion.p
          className="mt-4 text-lg md:text-xl text-neutral-600 dark:text-neutral-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          Renovación digital, centralización de requerimientos y soluciones inteligentes para el sector forestal
        </motion.p>
        <div className="mt-10 flex items-center justify-center gap-4 flex-wrap">
          <MagneticButton>Explorar</MagneticButton>
          <a href="#contexto" className="px-5 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            Ver contexto
          </a>
          <a href="#canal-unico" className="px-5 py-3 rounded-2xl border border-emerald-600 text-emerald-700 dark:text-emerald-300 bg-emerald-50 dark:bg-emerald-950/30">
            Enviar solicitud
          </a>
          <a href="/brochure.pdf" download className="px-5 py-3 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
            Descargar brochure
          </a>
        </div>
      </div>

      {/* Kinetic typography demo */}
      <motion.div
        className="absolute -bottom-12 left-0 right-0 text-[10rem] font-black tracking-tighter text-neutral-900/5 dark:text-white/5 select-none"
        animate={{ x: [0, -200, 0] }}
        transition={{ repeat: Infinity, duration: 20, ease: 'linear' }}
        aria-hidden
      >
        VERIFICAR • ESTANDARIZAR • SIMPLIFICAR • INNOVAR • EDUCAR • SORPRENDER
      </motion.div>
    </section>
  )
} 