import React, { FC } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  subTitle: string
}

export const Hero: FC<Props> = ({ title, subTitle }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} - ${subTitle}`} />
      </Head>

      <header className="mb-12">
        <h1 className="text-4xl font-bold pb-2">{title}</h1>
        <h2 className="text-gray-400">{subTitle}</h2>
      </header>
    </>
  )
}
