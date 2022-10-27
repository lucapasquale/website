import { Footer } from './Footer'
import { Header } from './Header'

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <Header />
      <main className="container max-w-4xl mx-auto px-4 my-16">{children}</main>
      <Footer />
    </>
  )
}
