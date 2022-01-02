import { createContext, useEffect, useState } from 'react'

import { defaultTheme, themes } from './theme'

import type { FC } from 'react'

export const ThemeContext = createContext<ThemeContextValue>({
  theme: defaultTheme,
  setTheme: () => undefined,
})

export const ThemeProvider: FC = ({ children }) => {
  const [theme, setTheme] = useState(
    prefersDarkQuery
      ? getPreferredTheme(prefersDarkQuery.matches)
      : defaultTheme,
  )

  useEffect(() => {
    const handlePrefersDark = ({ matches }: MediaQueryListEvent) => {
      setTheme((current) =>
        autoSwitchableThemes.includes(current)
          ? getPreferredTheme(matches)
          : current,
      )
    }

    prefersDarkQuery?.addEventListener('change', handlePrefersDark)

    return () => {
      prefersDarkQuery?.removeEventListener('change', handlePrefersDark)
    }
  }, [])

  useEffect(() => {
    if (typeof window === 'undefined') return

    Object.values(themes).forEach((t) => {
      document.body.classList.toggle(t, t === theme)
    })
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

const autoSwitchableThemes = [themes.dark, themes.light]

const getPreferredTheme = (isDark: boolean) =>
  isDark ? themes.dark : themes.light

const prefersDarkQuery =
  typeof window !== 'undefined'
    ? window.matchMedia('(prefers-color-scheme: dark)')
    : null

interface ThemeContextValue {
  theme: string
  setTheme: (theme: string) => void
}
