import React from 'react'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentProps<typeof NextLink>

export function Link({ ...props }: Props) {
  return (
    <NextLink
      {...props}
      className={twMerge('text-blue-300 transition-colors hover:text-blue-500', props.className)}
    />
  )
}
