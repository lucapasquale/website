import React, { FC } from 'react'
import styled from 'styled-components'

import { Props as ProjectProps } from '.'

const ProjectHeader = styled.div({
  marginBottom: '32px',
})

const URL = styled.h4({
  color: 'var(--color-link)',
})

type Props = Pick<ProjectProps, 'title' | 'url'>

export const Header: FC<Props> = ({ title, url }) => (
  <ProjectHeader>
    <a target="_blank" rel="noopener noreferrer" href={url}>
      <h2>{title}</h2>
      <URL>{url}</URL>
    </a>
  </ProjectHeader>
)
