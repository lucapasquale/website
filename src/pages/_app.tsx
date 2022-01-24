import '../styles.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { Layout } from '@common/components/Layout'

const App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>Luca Pasquale</title>
      </Head>

      {/* Analytics */}
      <Script
        async
        src="https://ackee.lucapasquale.dev/tracker.js"
        data-ackee-server="https://ackee.lucapasquale.dev"
        data-ackee-domain-id="c2301b2b-a15c-4681-a8b1-b4a9b0c79814"
      />

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
