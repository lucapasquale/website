import React, { FC } from 'react'
import Link from 'next/link'
import styled from 'styled-components'

import { colors } from '@helpers/theme/colors'

import { ThemeIcon } from './ThemeIcon'

const Wrapper = styled.div({
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

type Props = {}

export const RightComponents: FC<Props> = () => (
  <Wrapper>
    <ThemeIcon />

    <Link href="/projects">
      <a>
        <DesktopLink>PROJECTS</DesktopLink>
      </a>
    </Link>
  </Wrapper>
)
