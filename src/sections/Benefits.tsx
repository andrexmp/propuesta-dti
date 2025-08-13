import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

const beneficios = [
  'Mayor captación de clientes y licitaciones',
  'Eficiencia operativa y reducción de tiempos muertos (MTTR)',
  'Experiencia de usuario sobresaliente que genera fidelización',
  'Posicionamiento como referente tecnológico en el sector forestal'
]

const pasos = [
  'Aprobar objetivos y KRs',
  'Asignar responsables por iniciativa',
  'Planificar hitos a 6, 9 y 12 meses',
  'Monitorear avances y métricas bimensuales'
]

export function Benefits() {
  return (
    <section className="section flex items-center" id="canal-unico">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Beneficios y Próximos Pasos</h2>
        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="font-semibold flex items-center gap-2"><Sparkles className="size-5"/>Beneficios</h3>
            <ul className="mt-4 space-y-2">
              {beneficios.map((b, i) => (
                <motion.li key={b} initial={{ x: -10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  • {b}
                </motion.li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-semibold flex items-center gap-2"><ArrowRight className="size-5"/>Próximos pasos</h3>
            <ol className="mt-4 space-y-2 list-decimal list-inside">
              {pasos.map((p, i) => (
                <motion.li key={p} initial={{ x: 10, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} transition={{ delay: i * 0.05 }}>
                  {p}
                </motion.li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  )
} 