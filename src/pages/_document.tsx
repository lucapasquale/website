import React from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render(): JSX.Element {
    return (
      <Html lang="en">
        <Head>
          {/* Fav Icon */}
          <link
            rel="icon"
            href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
          />

          {/* Fonts */}
          <link
            href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap"
            rel="stylesheet"
          />

          {/* Analytics */}
          <script
            async
            src="https://ackee.lucapasquale.dev/tracker.js"
            data-ackee-server="https://ackee.lucapasquale.dev"
            data-ackee-domain-id="c2301b2b-a15c-4681-a8b1-b4a9b0c79814"
          ></script>
        </Head>

        <body className="text-gray-300 bg-gray-900">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
