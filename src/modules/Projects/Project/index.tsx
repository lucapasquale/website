import React, { FC } from 'react'
import styled from 'styled-components'

import { Technologies } from './Technologies'
import { Header } from './Header'

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

const Image = styled.img({
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
  title: string
  url: string
  imageSrc: string
  description: string
  technologies: Array<{ title: string; list: string[] }>
}

export const Project: FC<Props> = ({ url, imageSrc, title, description, technologies }) => (
  <ProjectWrapper>
    <Image alt={`${title} project image`} src={imageSrc} />

    <div>
      <Header title={title} url={url} />

      <p>{description}</p>

      <Technologies technologies={technologies} />
    </div>
  </ProjectWrapper>
)
