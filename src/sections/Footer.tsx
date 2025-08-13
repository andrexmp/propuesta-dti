export function Footer() {
  return (
    <footer className="section flex items-center">
      <div className="mx-auto max-w-5xl px-6 w-full">
        <div className="flex items-center justify-between">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">© {new Date().getFullYear()} DTI. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
} 