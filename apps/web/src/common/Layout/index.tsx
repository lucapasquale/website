import React from 'react'
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Footer } from '@website/ui'

import { Link } from '~common/components/Link'

import { Header } from './Header'

export function Layout({ children }: React.PropsWithChildren<{}>) {
  return (
    <>
      <Header />

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
