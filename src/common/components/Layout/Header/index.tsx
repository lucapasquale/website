import React, { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <header className="h-[60px]">
      <div className="fixed z-30 h-[60px] w-full bg-gray-900 border-b border-gray-700 flex justify-between px-2 py-5 sm:px-0">
        <nav className="mx-auto w-full max-w-screen-md flex justify-between items-center">
          <Link passHref href="/">
            <a>
              <h2 className="text-gray-400 hover:text-gray-200">LUCA PASQUALE</h2>
            </a>
          </Link>

          <Link passHref href="/projects">
            <a>
              <h4 className="text-gray-400 hover:text-gray-200">PROJECTS</h4>
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}
