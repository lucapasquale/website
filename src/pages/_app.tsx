import '../styles.css'
import React, { FC } from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'

const App: FC<AppProps> = ({ pageProps, Component }) => (
  <>
    <Head>
      <title>Luca Pasquale</title>
    </Head>

    <Component {...pageProps} />
  </>
)

export default App
