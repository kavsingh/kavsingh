import { useState, useEffect, useCallback } from 'react'

import {
  getPreferredColorScheme,
  darkSchemeQuery,
  lightSchemeQuery,
} from './color-scheme'

const usePreferredColorScheme = () => {
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

export default usePreferredColorScheme
