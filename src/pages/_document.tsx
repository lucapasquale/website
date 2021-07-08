import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Fonts */}
          <link as="font" rel="preload" href="/fonts/roboto-v20-latin-700.woff2" crossOrigin="" />
          <link as="font" rel="preload" href="/fonts/roboto-v20-latin-900.woff2" crossOrigin="" />
          <link
            as="font"
            rel="preload"
            href="/fonts/roboto-v20-latin-regular.woff2"
            crossOrigin=""
          />
        </Head>

        <body className="text-gray-400 bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
