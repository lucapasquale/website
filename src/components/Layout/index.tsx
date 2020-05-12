import React, { FC } from 'react'
import styled from 'styled-components'

import { AppHeader } from './AppHeader'
import Link from 'next/link'

const SecretLink = styled.div({
  position: 'fixed',
  right: '0px',
  bottom: '0px',

  opacity: 0.25,
  color: 'var(--color-primary)',
})

export const Layout: FC = ({ children }) => (
  <>
    <AppHeader />

    {children}

    <Link href="/secrets">
      <a>
        <SecretLink aria-hidden>Secrets</SecretLink>
      </a>
    </Link>
  </>
)
