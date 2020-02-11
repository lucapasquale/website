import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { AppDrawer } from './AppDrawer'
import { RightComponents } from './RightComponents'
import { DarkThemeContext } from '../../helpers/contexts/dark-theme'

const Nav = styled.nav<{ isDarkTheme: boolean }>(({ isDarkTheme }) => ({
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

export const AppHeader: FC = () => {
  const { isDarkTheme } = DarkThemeContext.useContainer()

  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <Nav isDarkTheme={isDarkTheme}>
        <Wrapper>
          <a href="/">
            <h2>LUCA PASQUALE</h2>
          </a>

          <RightComponents onOpen={() => setMenuOpen(true)} />
        </Wrapper>
      </Nav>

      <AppDrawer isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  )
}
