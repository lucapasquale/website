import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { Icon } from '../../Icon'
import { ThemeIcon } from './ThemeIcon'

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
})

const DesktopLink = styled.h4({
  '@media (max-width: 700px)': {
    display: 'none',
  },
})

const MobileMenu = styled.div({
  display: 'none',

  '@media (max-width: 700px)': {
    display: 'flex',
    cursor: 'pointer',
  },
})

type Props = {
  onOpen: () => void
}

export const RightComponents: FC<Props> = ({ onOpen }) => (
  <Wrapper>
    <ThemeIcon />

    <Link href="/projects">
      <a>
        <DesktopLink>PROJECTS</DesktopLink>
      </a>
    </Link>

    <MobileMenu onClick={onOpen}>
      <Icon name="Menu" size={24} />
    </MobileMenu>
  </Wrapper>
)
