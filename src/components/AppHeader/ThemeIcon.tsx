import React, { FC, useState } from 'react'
import styled from 'styled-components'

import { Icon, IconName } from '../Icon'
import { DarkThemeContext } from '../../helpers/contexts/dark-theme'

const Wrapper = styled.div({
  marginRight: '16px',
  cursor: 'pointer',
})

export const ThemeIcon: FC = () => {
  const { colors, isDarkTheme, changeTheme } = DarkThemeContext.useContainer()

  const [icon, setIcon] = useState<IconName>(
    isDarkTheme ? 'Sun' : 'Moon'
  )

  const onIconClick = () => {
    const isDark = changeTheme()
    setIcon(isDark ? 'Sun' : 'Moon')
  }

  return (
    <Wrapper onClick={onIconClick}>
      <Icon name={icon} size="24px" fill={colors.primary} />
    </Wrapper>
  )
}
