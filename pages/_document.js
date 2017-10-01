/* eslint-disable class-methods-use-this */

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'
import { screenTheme } from '../style/color'

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, minimal-ui"
          />
          <meta name="theme-color" content={`${screenTheme.pageBackground}`} />
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
