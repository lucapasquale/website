import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

import { config } from '~src/config'

export function Footer() {
  return (
    <footer className="pb-24">
      <div className="container max-w-4xl mx-auto px-4">
        <hr />

        <div className="my-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h2>Built with Next.js and Tailwind</h2>

          <nav className="flex space-x-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.LINKS.GITHUB}
              className="flex items-center gap-1 text-gray-300"
            >
              <FaGithub /> Github
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.LINKS.LINKEDIN}
              className="flex items-center gap-1 text-gray-300"
            >
              <FaLinkedin /> Linkedin
            </a>

            <a
              target="_blank"
              rel="noopener noreferrer"
              href={config.LINKS.INSTAGRAM}
              className="flex items-center gap-1 text-gray-300"
            >
              <FaInstagram /> Instagram
            </a>
          </nav>
        </div>
      </div>

      <Link href="/secrets" className="fixed right-0 bottom-0">
        Secrets
      </Link>
    </footer>
  )
}
