import React, { FC } from 'react'
import styled from 'styled-components'

import { Props as ProjectProps } from '.'

const Wrapper = styled.div<{ singular: boolean }>(({ singular }) => ({
  display: 'flex',
  justifyContent: singular ? 'start' : 'space-evenly',
}))

type Props = Pick<ProjectProps, 'technologies'>

export const Technologies: FC<Props> = ({ technologies }) => (
  <Wrapper singular={technologies.length === 1}>
    {technologies.map((tech, idx) => (
      <div key={`${tech.title}-${idx}`}>
        <h3>{tech.title}</h3>

        <ul>
          {tech.list.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
      </div>
    ))}
  </Wrapper>
)
