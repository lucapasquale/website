import React, { FC } from 'react'
import styled from 'styled-components'

import { Icon } from '../Icon'
import { ThemeIcon } from './ThemeIcon'

const Wrapper = styled.div({
  display: 'flex',
  alignItems: 'center',
  userSelect: 'none',
})

const DesktopLink = styled.a({
  '@media (max-width: 700px)': {
    display: 'none',
  },
})

const MenuWrapper = styled.div({
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

    <DesktopLink href="/projects">
      <h4>PROJECTS</h4>
    </DesktopLink>

    <MenuWrapper onClick={onOpen}>
      <Icon name="Menu" size={24} />
    </MenuWrapper>
  </Wrapper>
)
