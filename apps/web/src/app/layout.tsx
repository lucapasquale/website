import '@website/ui/styles.css'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'

import { Link } from '~common/components/Link'
import { Layout } from '~common/Layout'
import { Providers } from '~common/providers'

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

export default function RootLayout({ children }: React.PropsWithChildren<{}>) {
  return (
    <html suppressHydrationWarning lang="en" className={inter.className}>
      <body className="text-gray-900 bg-white dark:text-gray-300 dark:bg-gray-900">
        <Providers>
          <Layout>{children}</Layout>

          <Analytics />
        </Providers>
      </body>
    </html>
  )
}
