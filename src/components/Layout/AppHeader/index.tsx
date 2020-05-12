import React, { FC, useState } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { AppDrawer } from './AppDrawer'
import { RightComponents } from './RightComponents'
import { DarkThemeContext } from '../../../helpers/contexts/dark-theme'

const Nav = styled.nav<{ isDarkTheme: boolean }>(({ isDarkTheme }) => ({
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: 'var(--color-background)',

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: isDarkTheme
    ? 'rgba(255, 255, 255, 0.125)'
    : 'rgba(0, 0, 0, 0.125)',
}))

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '24px',
  padding: '16px',
  margin: 'auto',
  maxWidth: '700px',
})

const EmptySpace = styled.div({
  height: '57px',
})

export const AppHeader: FC = () => {
  const { theme } = DarkThemeContext.useContainer()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav isDarkTheme={theme === 'dark'}>
        <Wrapper>
          <Link href="/">
            <a>
              <h2>LUCA PASQUALE</h2>
            </a>
          </Link>

          <RightComponents onOpen={() => setMenuOpen(true)} />
        </Wrapper>
      </Nav>

      <EmptySpace />

      <AppDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
