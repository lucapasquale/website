import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { AppHeader } from './AppHeader'

const SecretLink = styled.a({
  position: 'fixed',
  right: '0px',
  bottom: '0px',
  cursor: 'pointer',
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
