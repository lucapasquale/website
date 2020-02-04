/* eslint-disable react/no-unescaped-entities */
import React, { FC } from 'react'
import styled from 'styled-components'

import { Links } from './Links'

const Wrapper = styled.main({
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
        I'm a developer born in Brazil, who loves gaming and creating things. I
        started learning programming so i could create my own game, and after
        that, I never stopped learning and improving myself.
      </p>

      <p>
        I worked in companies where I created event-based architecture using
        RabbitMQ for messaging between micro-services, and also developed
        GraphQL APIs to be consumed by our clients.
      </p>

      <p>
        When needed, I also helped out on the front-end, developing e-commerces,
        and administration panels with React and React Native.
      </p>
    </AboutSection>

    <Links />
  </Wrapper>
)
