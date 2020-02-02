import React, { FC } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Layout } from '../../components/Layout'
import { Hero } from '../../components/Hero'
import { About } from './components/About'


const Avatar = styled.img({
  width: '125px',
  height: '125px',
  borderRadius: '50%',
  marginBottom: '16px',
})

export const Home: FC = () => (
  <>
    <Helmet>
      <title>Luca Pasquale</title>
      <link rel="canonical" href="https://lucapasquale.github.io/" />
      <meta name="description" content="My portfolio page" />
    </Helmet>

    <Layout>
      <Hero
        title="Luca Pasquale"
        subTitle="Developer | Gamer | Engineer"
        topContent={<Avatar src="https://avatars2.githubusercontent.com/u/15659967" />}
      />

      <About />
    </Layout>
  </>
)
