import React, { FC } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/theme/colors'

const Code = styled.code({
  padding: '2px 4px 1px',
  borderRadius: '4px',
  backgroundColor: `var(${colors.backgroundSecondary.cssVariable})`,
})

type Props = {
  value: any
}

export const InlineCode: FC<Props> = ({ value }) => <Code>{value}</Code>
