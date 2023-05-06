import React from 'react'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Footer, Header } from '@website/ui'

import { Link } from '~common/components/Link'

import { ThemeSelector } from './ThemeSelector'

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header
        title={
          <Link passHref href="/" className="text-gray-900 dark:text-gray-300">
            <h1 className="tracking-wider">LUCA PASQUALE</h1>
          </Link>
        }
        actions={
          <>
            <ThemeSelector />

            <Link passHref href="/projects" className="text-gray-900 dark:text-gray-300">
              <h2>PROJECTS</h2>
            </Link>
          </>
        }
      />

      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

      <Footer
        title="Built with Next.js and Tailwind"
        links={
          <>
            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300"
              href="https://www.github.com/lucapasquale"
            >
              <GitHubLogoIcon aria-hidden /> Github
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300"
              href="https://www.linkedin.com/in/luca-pasquale"
            >
              <LinkedInLogoIcon aria-hidden /> Linkedin
            </Link>

            <Link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-900 dark:text-gray-300"
              href="https://www.instagram.com/luca_dipasquale"
            >
              <InstagramLogoIcon aria-hidden /> Instagram
            </Link>
          </>
        }
      />

      <Link href="/secrets" className="fixed right-0 bottom-0">
        Secrets
      </Link>
    </>
  )
}
