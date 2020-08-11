import React, { FC } from 'react'
import styled from 'styled-components'

import { Props as ProjectProps } from '.'

const ProjectHeader = styled.div({
  marginBottom: '32px',
})

const Title = styled.h2({
  ':hover': {
    color: 'var(--color-link)',
  },
})

const URL = styled.h4({
  color: 'var(--color-link)',
})

type Props = Pick<ProjectProps, 'title' | 'url'>

export const Header: FC<Props> = ({ title, url }) => (
  <ProjectHeader>
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <Title>{title}</Title>
      {url && <URL>{url}</URL>}
    </a>
  </ProjectHeader>
)
