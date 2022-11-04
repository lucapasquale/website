import '../styles.css'
import { Inter } from '@next/font/google'

import { AnalyticsWrapper } from '~common/components/Analytics'
import { Layout } from '~common/components/Layout'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Luca Pasquale</title>

        {/* Fav Icon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
      </head>

      <body className="text-gray-300 bg-gray-900">
        <Layout>{children}</Layout>

        <AnalyticsWrapper />
      </body>
    </html>
  )
}
