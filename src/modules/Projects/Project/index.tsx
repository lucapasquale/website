import React, { FC } from 'react'
import styled from 'styled-components'

import { Technologies } from './Technologies'
import { Header } from './Header'
import { Project as ProjectType } from '../data'

const ProjectWrapper = styled.section({
  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'space-between',

  maxWidth: '700px',

  '@media (max-width: 700px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const ImageWrapper = styled.div({
  minWidth: '275px',
  maxWidth: '275px',
  marginRight: '32px',
  border: 'solid rgba(0, 0, 0, 0.15) 1px',

  '@media (max-width: 700px)': {
    marginRight: 0,
    marginBottom: '16px',
  },
})

export type Props = {
  project: ProjectType
}

export const Project: FC<Props> = ({ project }) => {
  return (
    <ProjectWrapper>
      <ImageWrapper>{project.image}</ImageWrapper>

      <div>
        <Header title={project.title} url={project.url} />

        <p>{project.description}</p>

        <Technologies technologies={project.technologies} />
      </div>
    </ProjectWrapper>
  )
}
