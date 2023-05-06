import '@website/ui/styles.css'
import { Inter } from 'next/font/google'
import { Header } from '@website/ui'

import { AnalyticsWrapper } from '~common/components/Analytics'
import { Footer } from '~common/components/Footer'
import { Link } from '~common/components/Link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Luca Pasquale',
  description: 'My personal website',
  viewport: { width: 'device-width', initialScale: 1 },
  icons: [
    {
      rel: 'icon',
      url: 'data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>',
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="text-gray-300 bg-gray-900">
        <Header
          title={
            <Link passHref href="/" className="text-gray-300">
              <h1 className="tracking-wider">LUCA PASQUALE</h1>
            </Link>
          }
          actions={
            <Link passHref href="/projects" className="text-gray-300">
              <h2>PROJECTS</h2>
            </Link>
          }
        />

        <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

        <Footer />

        <AnalyticsWrapper />
      </body>
    </html>
  )
}
