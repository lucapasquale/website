import '../styles.css'
import { Inter } from '@next/font/google'

import { Footer } from '~common/components/Layout/Footer'
import { Header } from '~common/components/Layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Luca Pasquale</title>

        {/* Fav Icon */}
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👾</text></svg>"
        />
      </head>

      <body className="text-gray-300 bg-gray-900">
        <Header />

        <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
