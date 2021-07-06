import React, { FC } from 'react'
import styled from 'styled-components'

import * as icons from './icons'

type IconProps = {
  name: keyof typeof icons
  size?: number | string
  fill?: string
}

const Wrapper = styled.i<{ color?: string; fontSize: any }>(({ color, fontSize }) => ({
  display: 'inline-block',
  fontStyle: 'normal',
  lineHeight: 0,
  ...(color && { color }),
  ...(fontSize && { fontSize }),
  textAlign: 'center',
  textTransform: 'none',
  verticalAlign: '-0.125em',
  textRendering: 'optimizeLegibility',
  WebkitFontSmoothing: 'antialiased',
}))

export const Icon: FC<IconProps> = ({ name, fill, size = '1em' }) => {
  const ChoosenIcon = (icons as any)[name]
  if (!ChoosenIcon) {
    return null
  }

  return (
    <Wrapper color={fill} fontSize={size}>
      <ChoosenIcon />
    </Wrapper>
  )
}
