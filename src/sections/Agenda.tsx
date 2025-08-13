import { meeting } from '../config'
import { CalendarDays, MapPin } from 'lucide-react'

export function Agenda() {
  return (
    <section className="section flex items-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <h2 className="text-3xl md:text-4xl font-bold">Agenda y compromisos</h2>
        <div className="mt-6 rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur p-4">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300"><CalendarDays className="size-5"/> {meeting.when}</div>
              <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300 mt-1"><MapPin className="size-5"/> {meeting.location}</div>
            </div>
            <a href={meeting.icsPath} download className="px-4 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 text-sm">Agregar a mi calendario (.ics)</a>
          </div>
          <div className="mt-4">
            <div className="text-sm text-neutral-600 dark:text-neutral-400">Objetivos por integrante (completar en próxima reunión):</div>
            <ul className="mt-2 grid sm:grid-cols-2 gap-2 text-sm">
              <li>• Integrante A — Objetivo …</li>
              <li>• Integrante B — Objetivo …</li>
              <li>• Integrante C — Objetivo …</li>
              <li>• Integrante D — Objetivo …</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 