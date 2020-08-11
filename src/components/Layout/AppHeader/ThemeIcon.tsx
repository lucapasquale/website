import React, { FC } from 'react'
import styled from 'styled-components'

import { DarkThemeContext } from '@helpers/theme/context'
import { Icon } from '@components/Icon'

const Wrapper = styled.div({
  cursor: 'pointer',
})

export const ThemeIcon: FC = () => {
  const {
    theme,
    setTheme,
    colors,
    isDarkTheme,
  } = DarkThemeContext.useContainer()

  if (!theme) {
    return null
  }

  const onIconClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const iconName = isDarkTheme ? 'Sun' : 'Moon'

  return (
    <Wrapper onClick={onIconClick}>
      <Icon name={iconName} size="24px" fill={colors.primary} />
    </Wrapper>
  )
}
