import React, { FC } from 'react'
import { useRouter } from 'next/router'
import { NextSeo } from 'next-seo'

import { config } from '@src/config'

type Props = {
  title: string
  subTitle: string
  image?: {
    src: string
    alt: string
    width: number
    height: number
  }
}

export const Hero: FC<Props> = ({ title, subTitle, image }) => {
  const { pathname } = useRouter()

  return (
    <>
      <NextSeo
        title={title}
        description={`${title} - ${subTitle}`}
        canonical={config.URL + pathname}
        openGraph={{
          type: 'website',
          site_name: 'Luca Pasquale',
          title: title,
          description: subTitle,
          images: image
            ? [
                {
                  url: config.URL + image.src,
                  alt: image.alt,
                  width: image.width,
                  height: image.height,
                },
              ]
            : [],
        }}
      />

      <header className="mb-12">
        <h1 className="text-4xl font-bold pb-2">{title}</h1>
        <h2 className="text-gray-400">{subTitle}</h2>
      </header>
    </>
  )
}
