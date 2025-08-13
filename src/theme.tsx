import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import type { ReactNode } from 'react'

type ThemeMode = 'light' | 'dark'

interface ThemeContextProps {
  mode: ThemeMode
  setMode: (mode: ThemeMode) => void
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined)

function applyTheme(mode: ThemeMode) {
  const root = document.documentElement
  const isDark = mode === 'dark'
  root.classList.toggle('dark', isDark)
  root.style.colorScheme = isDark ? 'dark' : 'light'
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mode, setModeState] = useState<ThemeMode>(() => {
    const saved = localStorage.getItem('theme-mode') as ThemeMode | null
    if (saved) return saved
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  })

  useEffect(() => {
    applyTheme(mode)
    localStorage.setItem('theme-mode', mode)
  }, [mode])

  // Ya no hay modo 'system', pero si el usuario cambia el sistema y no guardó preferencia,
  // podría implementarse aquí una escucha. Mantenemos simple por el requerimiento.

  const value = useMemo(() => ({ mode, setMode: (m: ThemeMode) => setModeState(m) }), [mode])
  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
}

export function useTheme() {
  const ctx = useContext(ThemeContext)
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider')
  return ctx
} 