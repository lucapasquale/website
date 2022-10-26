/* eslint-disable react/display-name */
import React from 'react'
import Link from 'next/link'

import { Code } from './Code'
import { Heading } from './Headings'

export const components = {
  code: (props: any) => <Code {...props} />,

  h1: (props: any) => <Heading showAnchor level="h1" {...props} />,
  h2: (props: any) => <Heading showAnchor level="h2" {...props} />,
  h3: (props: any) => <Heading level="h3" {...props} />,
  h4: (props: any) => <Heading level="h4" {...props} />,

  p: (props: any) => <p className="mb-5 leading-7" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="font-bold underline"
          {...props}
        />
      )
    }

    return <Link href={href} passHref className="font-bold underline" {...props}></Link>
  },
}
