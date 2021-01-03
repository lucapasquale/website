import React, { FC } from 'react'
import styled from 'styled-components'

import { colors } from '@helpers/theme/colors'

const Wrapper = styled.blockquote({
  paddingLeft: '16px',
  borderLeft: `4px solid var(${colors.primary.cssVariable})`,
})

type Props = {
  value: any
}

export const Blockquote: FC<Props> = ({ children }) => <Wrapper>{children}</Wrapper>
