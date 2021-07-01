import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { DarkThemeContext } from '@helpers/theme/context'
import { colors } from '@helpers/theme/colors'

import { ThemeIcon } from './ThemeIcon'

const Nav = styled.nav<{ isDarkTheme: boolean }>(({ isDarkTheme }) => ({
  zIndex: 10,
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100%',
  backgroundColor: `var(${colors.background.cssVariable})`,

  borderBottomWidth: '1px',
  borderBottomStyle: 'solid',
  borderBottomColor: isDarkTheme ? 'rgba(255, 255, 255, 0.125)' : 'rgba(0, 0, 0, 0.125)',
}))

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  margin: 'auto',
  padding: '0px 8px',
  maxWidth: '700px',
})

const EmptySpace = styled.div({
  height: '60px',
})

const HomeLink = styled.h2({
  padding: '12px 0px',

  ':hover': {
    color: `var(${colors.link.cssVariable})`,
  },
})

const RightComponents = styled.div({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
})

const DesktopLink = styled.h4({
  cursor: 'pointer',
  marginLeft: '16px',
  padding: '22px 0px',

  ':hover': {
    color: `var(${colors.link.cssVariable})`,
  },
})

export const AppHeader: FC = () => {
  const { isDarkTheme } = DarkThemeContext.useContainer()

  return (
    <header>
      <Nav isDarkTheme={isDarkTheme}>
        <Wrapper>
          <Link href="/">
            <a>
              <HomeLink>LUCA PASQUALE</HomeLink>
            </a>
          </Link>

          <RightComponents>
            <ThemeIcon />

            <Link href="/projects">
              <a>
                <DesktopLink>PROJECTS</DesktopLink>
              </a>
            </Link>
          </RightComponents>
        </Wrapper>
      </Nav>

      <EmptySpace />
    </header>
  )
}
