import React, { FC } from 'react'
import Helmet from 'react-helmet'
import ReactPlayer from 'react-player'
import styled from 'styled-components'

import { Hero } from '../../components/Hero'
import { Layout } from '../../components/Layout'

const Section = styled.section({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '32px',
})

const Player = styled.div({
  marginTop: '32px',

  '@media (max-width: 700px)': {
    display: 'none',
  }
})

const PLAYLIST_LINK =
  'https://www.youtube.com/playlist?list=PL2gDVp_0vZOQjqMex201dYpUiu1mcGX96'

export const Secrets: FC = () => (
  <>
    <Helmet>
      <title>Luca Pasquale - Secrets</title>
      <link rel="canonical" href="https://lucapasquale.github.io/secrets" />
    </Helmet>

    <Layout>
      <Hero
        title="Secrets"
        subTitle="How did you get here?"
      />

      <Section>
        <a target="_blank" href={PLAYLIST_LINK}>
          My dumb playlist
        </a>

        <Player>
          <ReactPlayer controls url={PLAYLIST_LINK} />
        </Player>
      </Section>
    </Layout>
  </>
)
