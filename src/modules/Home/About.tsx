import Link from 'next/link'
import React, { FC } from 'react'
import styled from 'styled-components'

import { Links } from './Links'

const Wrapper = styled.div({
  margin: 'auto',
  padding: '16px',

  display: 'flex',
  flexDirection: 'row',
  justifyContent: 'center',

  '@media (max-width: 700px)': {
    flexDirection: 'column',
    alignItems: 'center',
  },
})

const AboutSection = styled.section({
  maxWidth: '450px',
})

export const About: FC = () => (
  <Wrapper>
    <AboutSection>
      <h3>About me</h3>

      <p>Hey, I'm Luca!</p>
      <p>
        I'm a software engineer born in Brazil, who loves gaming and creating things. I started
        learning programming so I could create my own game, and after that, I never stopped learning
        and improving myself.
      </p>
      <p>
        I've worked mainly on creating APIs and services in GraphQL, either directly for websites,
        or in a micro-service architecture. Nowadays I tend to use TypeScript for developing, but
        I've also used C# and I'm currently learning Elixir.
      </p>
      <p>
        For the frontend, I've created websites, ecommerces and admin dashboards with React, and
        also developed an app using React Native.
      </p>
      <p>
        You can check more about that on my <Link href="/projects">projects page</Link>.
      </p>
    </AboutSection>

    <Links />
  </Wrapper>
)
