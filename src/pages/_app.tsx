import React from 'react'
import Head from 'next/head'
import { AppType } from 'next/dist/next-server/lib/utils'
import { Global, css } from '@emotion/core'
import { ThemeProvider } from 'emotion-theming'

import { usePreferredColorScheme } from '~/lib/color-scheme'
import { Theme, getThemeForColorScheme, extractThemeColor } from '~/style/theme'

const globalStyles = (theme: Theme) => css`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html,
  body {
    width: 100%;
    min-height: 100%;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    font: 14px/1.3 system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI',
      'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    background-color: ${theme.screen.colors.pageBackground};
  }

  body {
    color: ${theme.screen.colors.bodyText};
  }

  @page {
    size: A4 portrait;
  }

  @media print {
    html {
      font-size: 10px;
      line-height: 1.2;
      background-color: ${theme.print.colors.pageBackground};
    }

    body {
      color: ${theme.print.colors.bodyText};
    }
  }
`

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
        <Global styles={globalStyles} />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}

export default App
