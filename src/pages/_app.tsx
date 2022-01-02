import Head from 'next/head'

import about from '~/content/about'
import { ThemeProvider } from '~/style/theme-context'
import '~/style/global-style.css'

import type { VoidFunctionComponent } from 'react'
import type { AppProps } from 'next/app'

const App: VoidFunctionComponent<AppProps> = ({ Component, pageProps }) => (
  <>
    <Head>
      <title key="title">CV - {about.name}</title>
      <meta key="description" name="description" content={about.profile} />
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1, maximum-scale=5, minimal-ui"
      />
    </Head>
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  </>
)

export default App
