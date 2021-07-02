import React, { FC, useState, useEffect } from 'react'
import Head from 'next/head'

import config from '@src/config'
import { AppHeader } from './AppHeader'

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

      <header className="mb-20">
        <AppHeader />
      </header>

      <main>{children}</main>
    </>
  )
}
