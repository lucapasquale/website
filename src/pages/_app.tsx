import '../styles.css'
import React, { FC } from 'react'
import Head from 'next/head'
import { AppProps } from 'next/app'
import { useRouter } from 'next/router'

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

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
