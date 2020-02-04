import { useState } from 'react'
import { createContainer } from 'unstated-next'

import { darkColors, lightColors } from '../theme/colors'

const useDarkTheme = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(
    window.localStorage.getItem('is_dark_theme') === 'true',
  )

  const changeTheme = () => {
    const newValue = !isDarkTheme

    setIsDarkTheme(newValue)
    window.localStorage.setItem('is_dark_theme', newValue ? 'true' : 'false')

    return newValue
  }

  return {
    isDarkTheme,
    changeTheme,
    colors: isDarkTheme ? darkColors : lightColors,
  }
}

export const DarkThemeContext = createContainer(useDarkTheme)
