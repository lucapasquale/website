import React, { FC } from 'react'
import { NextSeo } from 'next-seo'

import { config } from '../config'

import { About } from '@modules/Home/About'

const Page: FC = () => (
  <>
    <NextSeo
      title="Luca Pasquale"
      description="Luca Pasquale - My personal website"
      canonical={config.URL + '/'}
      openGraph={{
        type: 'website',
        site_name: 'Luca Pasquale',
        title: 'Luca Pasquale',
        description: 'My personal website',
      }}
    />

    <About />
  </>
)

export default Page
