import { BeforeAfter } from '../components/BeforeAfter'

export function BeforeAfterSection() {
  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-6xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Antes y después (demo visual)</h2>
        <p className="mt-2 text-neutral-600 dark:text-neutral-400">Comparación de UI conceptual para ilustrar la renovación.</p>
        <div className="mt-6">
          <BeforeAfter
            before="https://images.unsplash.com/photo-1551292831-023188e78222?q=80&w=1600&auto=format&fit=crop"
            after="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1600&auto=format&fit=crop"
            alt="Comparación UI"
          />
        </div>
      </div>
    </section>
  )
} 