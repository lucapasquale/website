import React, { FC, ReactNode } from 'react'
import Head from 'next/head'

type Props = {
  title: string
  subTitle: string
  rightComponent?: ReactNode
}

export const Hero: FC<Props> = ({ title, subTitle, rightComponent }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={`${title} - ${subTitle}`} />
      </Head>

      <header className="max-w-screen-md mx-auto flex items-center gap-2 my-8 px-4 sm:my-12 sm:px-0 sm:gap-4 sm:flex-row-reverse sm:justify-end">
        <div>
          <h1 className="text-6xl text-gray-200 pb-4">{title}</h1>
          <h2>{subTitle}</h2>
        </div>

        {rightComponent}
      </header>
    </>
  )
}
