import React from 'react'

export type HeaderProps = {
  title: React.ReactNode
  actions?: React.ReactNode
}

export function Header({ title, actions }: React.PropsWithChildren<HeaderProps>) {
  return (
    <header className="items-center sticky top-0 z-10 py-6 bg-white border-b border-gray-500 dark:border-gray-700  dark:bg-gray-900">
      <div className="container max-w-4xl mx-auto px-4">
        <nav className="flex justify-between items-center">
          {title}

          {actions && <div className="flex items-center space-x-4">{actions}</div>}
        </nav>
      </div>
    </header>
  )
}
