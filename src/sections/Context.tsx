import glossary from '../data/glossary.json'
import { Tooltip } from '../components/Tooltip'

export function Context() {
  const bullets = [
    'El mercado forestal exige innovación, rapidez y transparencia.',
    'Oportunidad de reforzar servicios: Drones, Geomática, Cartografía, Inventarios Forestales.',
    'Procesos internos dispersos limitan trazabilidad y eficiencia.',
    'Necesidad de sorprender desde el primer contacto con usuarios internos/externos.'
  ]

  return (
    <section id="contexto" className="section flex items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Contexto</h2>
        <p className="mt-4 text-neutral-700 dark:text-neutral-300 max-w-3xl">
          Transición hacia digitalización integral: trazabilidad, eficiencia, sostenibilidad y foco en usuarios.
        </p>
        <ul className="mt-6 grid gap-3 text-neutral-700 dark:text-neutral-300 list-disc pl-5 sm:grid-cols-2">
          {bullets.map(b => (<li key={b}>{b}</li>))}
        </ul>

        <h3 className="mt-10 text-xl font-semibold">Glosario</h3>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {glossary.map(item => (
            <div key={item.term} className="rounded-xl border border-neutral-200 dark:border-neutral-800 p-4 bg-white/60 dark:bg-neutral-900/60 backdrop-blur">
              <div className="font-semibold">{item.term}</div>
              <div className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                <Tooltip label={item.definition}>
                  <span>Ver definición</span>
                </Tooltip>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 