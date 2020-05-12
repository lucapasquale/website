import React, { FC } from 'react'
import styled from 'styled-components'

import { DarkThemeContext } from '@helpers/contexts/dark-theme'
import { Icon } from '@components/Icon'

const Wrapper = styled.div({
  marginRight: '16px',
  cursor: 'pointer',
})

export const ThemeIcon: FC = () => {
  const { theme, setTheme, colors } = DarkThemeContext.useContainer()

  if (!theme) {
    return null
  }

  const onIconClick = () => {
    const nextTheme = theme === 'dark' ? 'light' : 'dark'
    setTheme(nextTheme)
  }

  const iconName = theme === 'dark' ? 'Sun' : 'Moon'

  return (
    <Wrapper onClick={onIconClick}>
      <Icon name={iconName} size="24px" fill={colors.primary} />
    </Wrapper>
  )
}
