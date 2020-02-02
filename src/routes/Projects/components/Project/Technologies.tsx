import React, { FC } from 'react'
import styled from 'styled-components'

import { Props as ProjectProps } from '.'

const Wrapper = styled.div({
  display: 'flex',
  justifyContent: 'space-around'
})

const List = styled.div({
  marginRight: '64px'
})

type Props = Pick<ProjectProps, 'technologies'>

export const Technologies: FC<Props> = ({ technologies }) => (
  <Wrapper>
    {technologies.map((tech, idx) => (
      <List key={`${tech.title}-${idx}`}>
        <h3>{tech.title}</h3>

        <ul>
          {tech.list.map((t) => (<li key={t}>{t}</li>))}
        </ul>
      </List>
    ))}
  </Wrapper>
)
