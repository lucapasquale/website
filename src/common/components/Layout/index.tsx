import React, { FC } from 'react'

import { Header } from './Header'
import { Footer } from './Footer'

export const Layout: FC = ({ children }) => {
  return (
    <>
      <Header />

      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

      <Footer />
    </>
  )
}
