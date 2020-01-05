import { useState, useEffect, useCallback } from 'react'

export type ColorSchemePreference = 'no-preference' | 'light' | 'dark'

export const darkSchemeQuery = (() => {
  try {
    return window?.matchMedia?.('(prefers-color-scheme: dark)')
  } catch {
    return undefined
  }
})()

export const lightSchemeQuery = (() => {
  try {
    return window?.matchMedia?.('(prefers-color-scheme: light)')
  } catch {
    return undefined
  }
})()

export const getPreferredColorScheme = (): ColorSchemePreference => {
  if (darkSchemeQuery?.matches) return 'dark'

  if (lightSchemeQuery?.matches) return 'light'

  return 'no-preference'
}

export const usePreferredColorScheme = () => {
  const [scheme, setScheme] = useState(getPreferredColorScheme())

  const handleDarkSchemeQueryChange = useCallback(
    (event: MediaQueryListEvent) => {
      if (event.matches) setScheme('dark')
    },
    [],
  )

  const handleLightSchemeQueryChange = useCallback(
    (event: MediaQueryListEvent) => {
      if (event.matches) setScheme('light')
    },
    [],
  )

  useEffect(() => {
    darkSchemeQuery?.addEventListener('change', handleDarkSchemeQueryChange)
    lightSchemeQuery?.addEventListener('change', handleLightSchemeQueryChange)

    return () => {
      darkSchemeQuery?.removeEventListener(
        'change',
        handleDarkSchemeQueryChange,
      )
      lightSchemeQuery?.removeEventListener(
        'change',
        handleLightSchemeQueryChange,
      )
    }
  }, [handleDarkSchemeQueryChange, handleLightSchemeQueryChange])

  return scheme
}
