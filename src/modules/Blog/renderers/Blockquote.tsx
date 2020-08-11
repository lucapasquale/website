import React, { FC } from 'react'
import styled from 'styled-components'

const Wrapper = styled.blockquote({
  paddingLeft: '16px',
  borderLeft: '4px solid var(--color-primary)',
})

type Props = {
  value: any
}

export const Blockquote: FC<Props> = ({ children }) => (
  <Wrapper>{children}</Wrapper>
)
