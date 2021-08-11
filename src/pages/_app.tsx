import '../styles.css'
import React, { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import PlausibleProvider from 'next-plausible'

import { Layout } from '@common/components/Layout'
import { config } from '@src/config'

const App: FC<AppProps> = ({ pageProps, Component }) => {
  const { pathname } = useRouter()

  return (
    <>
      <Head>
        <title>Luca Pasquale</title>
        <link rel="canonical" href={config.URL + pathname} />
      </Head>

      <PlausibleProvider selfHosted domain="lucapasquale.dev">
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PlausibleProvider>
    </>
  )
}

export default App
