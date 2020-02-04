import React, { FC } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { AppHeader } from './AppHeader'

const SecretLink = styled.a(({ theme }) => ({
  position: 'fixed',
  right: '0px',
  bottom: '0px',

  opacity: 0.25,
  color: theme.colors.primary,
}))

export const Layout: FC = ({ children }) => (
  <>
    <Helmet>
      <html lang="en" />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>

    <AppHeader />

    {children}

    <SecretLink href="/secrets">Secrets</SecretLink>
  </>
)
