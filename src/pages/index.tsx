import React, { FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Layout } from '@components/Layout'
import { Hero } from '@components/Hero'

import { About } from '@modules/Home/About'

const Avatar = styled.img({
  width: '125px',
  height: '125px',
  borderRadius: '50%',
  marginBottom: '16px',
})

const Home: FC = () => (
  <>
    <Head>
      <link rel="canonical" href="https://lucapasquale.netlify.app/" />
    </Head>

    <Layout>
      <Hero
        title="Luca Pasquale"
        subTitle="Developer | Gamer | Engineer"
        topContent={
          <Avatar
            alt="avatar"
            src="https://avatars2.githubusercontent.com/u/15659967"
          />
        }
      />

      <About />
    </Layout>
  </>
)

export default Home
