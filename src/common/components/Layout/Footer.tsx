import React, { FC } from 'react'
import Link from 'next/link'

export const Footer: FC = () => (
  <footer className="pb-36">
    <div className="container max-w-4xl mx-auto px-4">
      <hr className="" />

      <div className="my-8 flex flex-col sm:flex-row justify-between items-center space-y-4">
        <h4>Built with Next.js and Tailwind</h4>

        <nav className="space-x-6">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/delbaoliveira"
            className="transition-colors text-gray-300"
          >
            Github
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/delbaoliveira/"
            className="transition-colors text-gray-300"
          >
            Linkedin
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://www.instagram.com/delba.oliveira/"
            className="transition-colors text-gray-300"
          >
            Instagram
          </a>
        </nav>
      </div>
    </div>

    <Link href="/secrets">
      <a className="fixed right-0 bottom-0">Secrets</a>
    </Link>
  </footer>
)
