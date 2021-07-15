/* eslint-disable react/display-name */
import React from 'react'
import Link from 'next/link'

export const components = {
  h1: (props: any) => <h1 className="mt-8 mb-4 text-4xl font-bold" {...props} />,
  h2: (props: any) => <h2 className="mt-8 mb-3 text-2xl font-bold" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-5 text-xl font-bold" {...props} />,
  h4: (props: any) => <h4 className="mt-6 mb-5 text-lg font-bold" {...props} />,
  p: (props: any) => <p className="mb-5 leading-7" {...props} />,
  a: ({ href = '', ...props }) => {
    if (href.startsWith('http')) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className="font-bold" {...props} />
      )
    }

    return (
      <Link href={href} passHref>
        <a className="font-bold" {...props} />
      </Link>
    )
  },
}
