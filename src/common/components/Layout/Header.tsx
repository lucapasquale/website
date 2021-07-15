import React, { FC } from 'react'
import Link from 'next/link'

export const Header: FC = () => (
  <header className="sticky top-0 z-10 py-6 bg-gray-900 border-b border-gray-700">
    <div className="container max-w-4xl mx-auto px-4">
      <nav className="flex justify-between items-center">
        <Link passHref href="/">
          <a className="text-gray-300">
            <h1 className="tracking-wider">LUCA PASQUALE</h1>
          </a>
        </Link>

        <Link passHref href="/projects">
          <a className="text-gray-300">
            <h2>PROJECTS</h2>
          </a>
        </Link>
      </nav>
    </div>
  </header>
)
