import React from 'react'
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
  DocumentInitialProps,
} from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import { InjectVariables } from '@helpers/theme/inject-variables'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext,
  ): Promise<DocumentInitialProps> {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }

  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Fonts */}
          <link
            as="font"
            rel="preload"
            href="/fonts/roboto-v20-latin-700.woff2"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/roboto-v20-latin-900.woff2"
            crossOrigin=""
          />
          <link
            as="font"
            rel="preload"
            href="/fonts/roboto-v20-latin-regular.woff2"
            crossOrigin=""
          />
        </Head>

        <body>
          <InjectVariables />

          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
