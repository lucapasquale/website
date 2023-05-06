'use client'

import React from 'react'
import { useTheme } from 'next-themes'
import { Select, SelectOption } from '@website/ui'

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
    <Select value={theme} onChange={setTheme}>
      <SelectOption value="system">System</SelectOption>
      <SelectOption value="dark">Dark</SelectOption>
      <SelectOption value="light">Light</SelectOption>
    </Select>
  )
}
