import React, { FC } from 'react'
import styled from 'styled-components'

import { AppHeader } from './AppHeader'
import Link from 'next/link'

const SecretLink = styled.a({
  position: 'fixed',
  right: '0px',
  bottom: '0px',
  color: 'var(--color-primary)',
})

export const Layout: FC = ({ children }) => (
  <>
    <AppHeader />

    {children}

    <Link href="/secrets">
      <SecretLink>Secrets</SecretLink>
    </Link>
  </>
)
