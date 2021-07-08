import React, { FC } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import { Hero } from '@common/components/Hero'
import { Layout } from '@common/components/Layout'

import { About } from '@modules/Home/About'

const Home: FC = () => (
  <Layout>
    <Hero
      title="Luca Pasquale"
      subTitle="Developer | Gamer | Engineer"
      rightComponent={
        <Image
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full"
          src={require('../../public/images/avatar.webp')}
        />
      }
    />

    <About />

    <footer>
      <Link href="/secrets">
        <a className="fixed right-0 bottom-0">Secrets</a>
      </Link>
    </footer>
  </Layout>
)

export default Home
