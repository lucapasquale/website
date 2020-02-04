import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components'

import { DarkThemeContext } from './dark-theme'
import { baseTheme } from '../theme'
import { GlobalStyle } from '../theme/global'

export const StyledContext: FC = ({ children }) => {
  const { colors } = DarkThemeContext.useContainer()
  const theme = { colors, ...baseTheme }

  return (
    <>
      <GlobalStyle theme={theme} />

      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </>
  )
}
