import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Icon } from '@components/Icon'

import { ThemeIcon } from './ThemeIcon'

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
})

const DesktopLink = styled.a({
  cursor: 'pointer',
  marginLeft: '16px',

  '@media (max-width: 700px)': {
    display: 'none',
  },
})

const MobileMenu = styled.div({
  display: 'none',

  '@media (max-width: 700px)': {
    display: 'flex',
    cursor: 'pointer',
    marginLeft: '16px',
  },
})

type Props = {
  onOpen: () => void
}

export const RightComponents: FC<Props> = ({ onOpen }) => (
  <Wrapper>
    <ThemeIcon />

    <Link href="/blog">
      <DesktopLink>
        <h4>BLOG</h4>
      </DesktopLink>
    </Link>

    <Link href="/projects">
      <DesktopLink>
        <h4>PROJECTS</h4>
      </DesktopLink>
    </Link>

    <MobileMenu onClick={onOpen}>
      <Icon name="Menu" size={24} />
    </MobileMenu>
  </Wrapper>
)
