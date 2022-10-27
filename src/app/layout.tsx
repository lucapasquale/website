import '../styles.css'
import { Inter } from '@next/font/google'

import { Footer } from '../common/components/Layout/Footer'
import { Header } from '../common/components/Layout/Header'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <head>
        <title>Luca Pasquale</title>
      </head>

      <body>
        <Header />

        <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

        <Footer />
      </body>
    </html>
  )
}
