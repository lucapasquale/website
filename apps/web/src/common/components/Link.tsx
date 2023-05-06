import React from 'react'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

type Props = React.ComponentProps<typeof NextLink>

export function Link({ ...props }: Props) {
  return (
    <NextLink
      {...props}
      className={twMerge(
        'transition-colors text-blue-700 hover:text-blue-500 dark:text-blue-300 dark:hover:text-blue-500',
        props.className
      )}
    />
  )
}
