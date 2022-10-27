import '../styles.css'
import React, { FC } from 'react'
import { AppProps, NextWebVitalsMetric } from 'next/app'
import Head from 'next/head'
import Script from 'next/script'

import { Layout } from '~common/components/Layout'

export function reportWebVitals(metric: NextWebVitalsMetric) {
  const url = process.env.NEXT_PUBLIC_AXIOM_INGEST_ENDPOINT
  if (!url) {
    return
  }

  const body = JSON.stringify({ route: window.__NEXT_DATA__.page, ...metric })

  if (navigator.sendBeacon) {
    navigator.sendBeacon(url, body)
  } else {
    fetch(url, { body, method: 'POST', keepalive: true })
  }
}

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
