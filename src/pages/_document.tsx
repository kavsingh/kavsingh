/* eslint-disable class-methods-use-this */

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

import { extractThemeColor, getInitialTheme } from '~/style/theme'

export default class HTMLDocument extends Document {
  render() {
    const themeColor = extractThemeColor(getInitialTheme())

    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, minimal-ui"
          />
          <meta name="theme-color" content={themeColor} />
          <link rel="icon" href="static/icon.png" type="image/png" />
          <link rel="manifest" href="static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
