import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'

import config from '@src/config'
import { Header } from './Header'

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

      <main>{children}</main>

      <footer className="h-20"></footer>
    </>
  )
}
