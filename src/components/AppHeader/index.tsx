import React, { FC } from 'react'
import styled from 'styled-components'

import { ThemeIcon } from './ThemeIcon'

const Wrapper = styled.nav({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',

  height: '24px',
  padding: '16px',
  borderBottom: '1px solid rgba(0, 0, 0, 0.125)',
})

const RightWrapper = styled.div({
  display: 'flex',
  alignItems: 'center'
})

export const AppHeader: FC = () => (
  <Wrapper>
    <a href="/">
      <h2>LUCA PASQUALE</h2>
    </a>

    <RightWrapper>
      <ThemeIcon />

      <a href="/projects">
        <h4>PROJECTS</h4>
      </a>
    </RightWrapper>
  </Wrapper>
)
