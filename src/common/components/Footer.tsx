import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'
import Link from 'next/link'

const LINKS = {
  GITHUB: 'https://www.github.com/lucapasquale',
  INSTAGRAM: 'https://www.instagram.com/luca_dipasquale/',
  LINKEDIN: 'https://www.linkedin.com/in/luca-pasquale/',
}

export function Footer() {
  return (
    <footer className="pb-24">
      <div className="container max-w-4xl mx-auto px-4">
        <hr />

        <div className="my-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h2>Built with Next.js and Tailwind</h2>

          <nav className="flex space-x-6">
            <ExternalLink href={LINKS.GITHUB}>
              <FaGithub aria-hidden /> Github
            </ExternalLink>

            <ExternalLink href={LINKS.LINKEDIN}>
              <FaLinkedin aria-hidden /> Linkedin
            </ExternalLink>

            <ExternalLink href={LINKS.INSTAGRAM}>
              <FaInstagram aria-hidden /> Instagram
            </ExternalLink>
          </nav>
        </div>
      </div>

      <Link href="/secrets" className="fixed right-0 bottom-0">
        Secrets
      </Link>
    </footer>
  )
}

function ExternalLink({ href, children }: React.PropsWithChildren<{ href: string }>) {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-1 text-gray-300"
      href={href}
    >
      {children}
    </a>
  )
}
