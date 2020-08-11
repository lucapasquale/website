import React, { FC } from 'react'
import styled from 'styled-components'

const Code = styled.code({
  padding: '2px 2px 1px',
  borderRadius: '2px',
  backgroundColor: 'var(--color-secondary-background)',
})

type Props = {
  value: any
}

export const InlineCode: FC<Props> = ({ value }) => <Code>{value}</Code>
