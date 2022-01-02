/* eslint-disable class-methods-use-this */

import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class HTMLDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
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
      </Html>
    )
  }
}
