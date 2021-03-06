/* eslint-disable class-methods-use-this */

import React from 'react'
import Document, { Head, Main, NextScript } from 'next/document'

export default class HTMLDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta
            key="viewport"
            name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, minimal-ui"
          />
          <link
            key="font-nunito"
            href="https://fonts.googleapis.com/css?family=Nunito&display=swap"
            rel="stylesheet"
          ></link>
          <link key="manifest" rel="manifest" href="static/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
