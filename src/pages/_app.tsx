import React from 'react'
import Head from 'next/head'
import { AppType } from 'next/dist/next-server/lib/utils'
import { ThemeProvider } from 'emotion-theming'

import { usePreferredColorScheme } from '~/lib/color-scheme'
import GlobalStyles from '~/style/global-styles'
import { getThemeForColorScheme, extractThemeColor } from '~/style/theme'

const App: AppType = ({ Component, pageProps }) => {
  const preferredColorScheme = usePreferredColorScheme()
  const theme = getThemeForColorScheme(preferredColorScheme)
  const themeColor = extractThemeColor(theme)

  return (
    <>
      <Head>
        <meta key="theme-color" name="theme-color" content={themeColor} />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
