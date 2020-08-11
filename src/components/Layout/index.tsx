import React, { FC, useState, useEffect } from 'react'
import Link from 'next/link'
import Head from 'next/head'
import styled from 'styled-components'

import { AppHeader } from './AppHeader'
import config from '../../config'

const SecretLink = styled.a({
  position: 'fixed',
  right: '0px',
  bottom: '0px',
  cursor: 'pointer',
  color: 'var(--color-primary)',
})

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

      <AppHeader />

      <main>{children}</main>

      <footer>
        <Link href="/secrets">
          <SecretLink>Secrets</SecretLink>
        </Link>
      </footer>
    </>
  )
}
