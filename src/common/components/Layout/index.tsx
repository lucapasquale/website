import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'

import config from '@src/config'
import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => {
  const [pathname, setPathname] = useState<string | undefined>()

  useEffect(() => {
    setPathname(location.pathname)
  }, [])

  return (
    <>
      {pathname && (
        <Head>
          <link rel="canonical" href={config.URL + pathname} />
        </Head>
      )}

      <Header />

      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

      <Footer />
    </>
  )
}
