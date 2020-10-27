import React, { FC } from 'react'
import Image from 'next/image'
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

const ImageWrapper = styled.div({
  zIndex: -1,
  marginRight: '32px',
  border: 'solid rgba(0, 0, 0, 0.15) 1px',

  '@media (max-width: 700px)': {
    marginRight: 0,
    marginBottom: '16px',
  },
})

export type Props = {
  url?: string
  title: string
  description: string
  image: { src: string; width: number; height: number }
  technologies: Array<{ title: string; list: string[] }>
}

export const Project: FC<Props> = ({
  url,
  image,
  title,
  description,
  technologies,
}) => (
  <ProjectWrapper>
    <ImageWrapper>
      <Image
        src={image.src}
        alt={`${title} project image`}
        width={image.width}
        height={image.height}
      />
    </ImageWrapper>

    <div>
      <Header title={title} url={url} />

      <p>{description}</p>

      <Technologies technologies={technologies} />
    </div>
  </ProjectWrapper>
)
