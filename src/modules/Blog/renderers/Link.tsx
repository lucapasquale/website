import React, { FC } from 'react'
import NextLink from 'next/link'

type Props = {
  href: string
}

export const Link: FC<Props> = ({ href, children }) => {
  if (href.startsWith('http')) {
    return (
      <a href={href} rel="noreferrer" target="_blank">
        {children}
      </a>
    )
  }

  return (
    <NextLink href={href}>
      <a>{children}</a>
    </NextLink>
  )
}
