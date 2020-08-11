import React, { FC } from 'react'
import styled from 'styled-components'

const Code = styled.code({
  backgroundColor: 'var(--color-secondary-background)',
})

type Props = {
  value: any
}

export const InlineCode: FC<Props> = ({ value }) => <Code>{value}</Code>
