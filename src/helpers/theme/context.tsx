import { useState, useEffect } from 'react'
import { createContainer } from 'unstated-next'

import { Theme, colors } from './colors'

const useDarkTheme = () => {
  const [theme, _setTheme] = useState<Theme | undefined>(undefined)

  const setTheme = (newTheme: Theme) => {
    _setTheme(newTheme)
    setCssVariables(newTheme)

    localStorage.setItem('color-mode', newTheme)
  }

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    )

    setTheme(initialColorValue as Theme)
  }, [])

  return {
    theme,
    setTheme,
    isDarkTheme: theme === 'dark',
  }
}

export const DarkThemeContext = createContainer(useDarkTheme)

function setCssVariables(theme: Theme) {
  const root = window.document.documentElement

  Object.values(colors).forEach((color) => {
    root.style.setProperty(color.cssVariable, color[theme])
  })
}
