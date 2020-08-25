import React, { FC } from 'react'
import styled from 'styled-components'
import Link from 'next/link'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'
import { colors } from '@helpers/theme/colors'

import { About } from '@modules/Home/About'

const Avatar = styled.img({
  width: '125px',
  height: '125px',
  borderRadius: '50%',
  marginBottom: '16px',
})

const SecretLink = styled.a({
  position: 'fixed',
  right: '0px',
  bottom: '0px',
  cursor: 'pointer',
  color: `var(${colors.primary.cssVariable})`,
})

const Home: FC = () => (
  <Layout>
    <Hero
      title="Luca Pasquale"
      subTitle="Developer | Gamer | Engineer"
      topContent={<Avatar alt="avatar" src="/images/avatar.webp" />}
    />

    <About />

    <footer>
      <Link href="/secrets">
        <SecretLink>Secrets</SecretLink>
      </Link>
    </footer>
  </Layout>
)

export default Home
