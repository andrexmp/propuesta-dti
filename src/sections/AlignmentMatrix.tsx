import { alignment } from '../config'

export function AlignmentMatrix() {
  const { initiatives, pillars, matrix } = alignment
  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Matriz de alineación</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Cómo cada iniciativa aporta a los pilares.</p>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full text-sm border-separate border-spacing-0">
            <thead>
              <tr>
                <th className="text-left p-3 sticky left-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800">Iniciativa</th>
                {pillars.map(p => (
                  <th key={p} className="p-3 text-left whitespace-nowrap border-b border-neutral-200 dark:border-neutral-800">{p}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {initiatives.map((i, r) => (
                <tr key={i} className="even:bg-neutral-50/40 dark:even:bg-neutral-900/40">
                  <td className="p-3 sticky left-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur border-b border-neutral-200 dark:border-neutral-800 font-medium">{i}</td>
                  {pillars.map((_, c) => (
                    <td key={c} className="p-3 border-b border-neutral-200 dark:border-neutral-800">
                      {matrix[r][c] && <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
} 