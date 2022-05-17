import React, { PropsWithChildren } from 'react'

import { Footer } from './Footer'
import { Header } from './Header'

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <Header />

      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>

      <Footer />
    </>
  )
}
