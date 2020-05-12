import { useState, useEffect } from 'react'
import { createContainer } from 'unstated-next'

import * as colors from '../theme/colors'

type Themes = keyof typeof colors

const useDarkTheme = () => {
  const [theme, _setTheme] = useState<Themes | undefined>(undefined)

  const setTheme = (newTheme: Themes) => {
    const root = window.document.documentElement
    _setTheme(newTheme)

    localStorage.setItem('color-mode', newTheme)

    root.style.setProperty(
      '--color-primary',
      newTheme === 'light' ? colors.light.primary : colors.dark.primary,
    )

    root.style.setProperty(
      '--color-secondary',
      newTheme === 'light' ? colors.light.secondary : colors.dark.secondary,
    )

    root.style.setProperty(
      '--color-link',
      newTheme === 'light' ? colors.light.link : colors.dark.link,
    )

    root.style.setProperty(
      '--color-background',
      newTheme === 'light' ? colors.light.background : colors.dark.background,
    )

    root.style.setProperty(
      '--color-secondary-background',
      newTheme === 'light'
        ? colors.light.secondaryBackground
        : colors.dark.secondaryBackground,
    )
  }

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = root.style.getPropertyValue(
      '--initial-color-mode',
    )

    setTheme(initialColorValue as Themes)
  }, [])

  return {
    theme,
    setTheme,
    colors: theme === 'dark' ? colors.dark : colors.light,
  }
}

export const DarkThemeContext = createContainer(useDarkTheme)
