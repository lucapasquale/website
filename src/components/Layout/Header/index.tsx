import React, { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => {
  return (
    <header className="h-[60px]">
      <div className="fixed z-30 w-full bg-gray-900 border-b border-gray-700 flex justify-between py-5">
        <nav className="mx-auto w-full max-w-screen-md flex justify-between items-center">
          <Link passHref href="/">
            <a>
              <h2 className="hover:text-gray-200">LUCA PASQUALE</h2>
            </a>
          </Link>

          <Link passHref href="/projects">
            <a>
              <h4 className="hover:text-gray-200">PROJECTS</h4>
            </a>
          </Link>
        </nav>
      </div>

      <div />
    </header>
  )
}
