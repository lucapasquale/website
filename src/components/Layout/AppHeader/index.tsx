import React, { FC } from 'react'
import Link from 'next/link'

export const AppHeader: FC = () => {
  return (
    <nav className="fixed top-0 z-30 w-full max-w-2xl bg-gray-900 border-b border-gray-700 flex justify-between items-center px-4 py-5">
      <Link href="/">
        <a>
          <h2 className="">LUCA PASQUALE</h2>
        </a>
      </Link>

      <div className="flex items-center">
        <Link href="/projects">
          <a>
            <h4 className="">PROJECTS</h4>
          </a>
        </Link>
      </div>
    </nav>
  )
}
