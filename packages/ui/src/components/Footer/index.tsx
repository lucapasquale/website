import React from 'react'

export type FooterProps = {
  title: string
  links?: React.ReactNode
}

export function Footer({ title, links }: FooterProps) {
  return (
    <footer className="pb-24">
      <div className="container max-w-4xl mx-auto px-4">
        <hr />

        <div className="my-8 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h2>{title}</h2>

          {links && <nav className="flex space-x-6">{links}</nav>}
        </div>
      </div>
    </footer>
  )
}
