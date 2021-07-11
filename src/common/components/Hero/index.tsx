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

      <header>
        <h1 className="text-4xl font-bold text-gray-200 pb-4">{title}</h1>
        <h2>{subTitle}</h2>
      </header>
    </>
  )
}
