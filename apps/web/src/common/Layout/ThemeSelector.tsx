'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { DesktopIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Select, SelectOption } from '@website/ui'

const THEME_LABELS = {
  system: (
    <>
      <DesktopIcon /> System
    </>
  ),
  dark: (
    <>
      <MoonIcon /> Dark
    </>
  ),
  light: (
    <>
      <SunIcon /> Light
    </>
  ),
}

export function ThemeSelector() {
  const [mounted, setMounted] = React.useState(false)
  const { theme, setTheme } = useTheme()

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <Select
      value={theme}
      onChange={setTheme}
      renderValue={(value) => <div className="flex items-center gap-2">{THEME_LABELS[value]}</div>}
    >
      <SelectOption value="system">System</SelectOption>
      <SelectOption value="dark">Dark</SelectOption>
      <SelectOption value="light">Light</SelectOption>
    </Select>
  )
}
