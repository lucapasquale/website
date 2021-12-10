import '../styles.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

import { Layout } from '@common/components/Layout'

const App: FC<AppProps> = ({ pageProps, Component }) => {
  return (
    <>
      <Head>
        <title>Luca Pasquale</title>
      </Head>

      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
