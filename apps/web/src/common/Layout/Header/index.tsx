import React from 'react'

import { Link } from '~common/components/Link'

import { ThemeSelector } from './ThemeSelector'

export type HeaderProps = {
  title: React.ReactNode
  actions?: React.ReactNode
}

export function Header() {
  return (
    <header className="items-center sticky top-0 z-10 py-6 supports-backdrop-blur:bg-background/60 w-full border-b bg-background/95 shadow-sm backdrop-blur">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          <Link passHref href="/" className="text-gray-900 dark:text-gray-300">
            <h1 className="tracking-wider">LUCA PASQUALE</h1>
          </Link>

          <div className="flex items-center space-x-4">
            <ThemeSelector />

            <Link passHref href="/projects" className="text-gray-900 dark:text-gray-300">
              <h2>PROJECTS</h2>
            </Link>
          </div>
        </nav>
      </div>
    </header>
  )
}
