import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.h3({
  marginTop: '32px',
  marginBottom: '16px',
})

type Props = {
  level: number
}

export const Heading: FC<Props> = ({ children, level }) => {
  return <Wrapper as={getHTMLAttribute(level)}>{children}</Wrapper>
}

function getHTMLAttribute(level: number): any {
  if (level <= 0 || level >= 6) {
    return 'h3'
  }

  return 'h' + level.toString()
}
