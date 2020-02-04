import React, { FC } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Hero } from '../../components/Hero'
import { Layout } from '../../components/Layout'
import { Project } from './components/Project'

const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',

  padding: '32px',
})

const Divider = styled.hr(({ theme }) => ({
  width: '100%',
  maxWidth: '500px',
  margin: '32px 0px',

  borderBottomColor: theme.colors.primary,
  borderBottomWidth: '0.5px',
}))

export const Projects: FC = () => (
  <>
    <Helmet>
      <title>Luca Pasquale - Projects</title>
      <link rel="canonical" href="https://lucapasquale.github.io/projects" />
    </Helmet>

    <Layout>
      <Hero
        title="Projects"
        subTitle="Some things I've created over the years"
      />

      <Wrapper>
        <Project
          title="Linking Bio"
          url="https://www.linkingbio.com"
          imageSrc={require('../../assets/img/linking-bio.png')}
          description="Share more than a single link in your social media. Create your own page, where you can customize and have as many links as you would like."
          technologies={[
            {
              title: 'Front-end',
              list: ['React', 'Apollo Client', 'Emotion', 'TypeScript'],
            },
            {
              title: 'Back-end',
              list: ['GraphQL', 'DynamoDB', 'Serverless', 'TypeScript'],
            },
          ]}
        />

        <Divider />
      </Wrapper>
    </Layout>
  </>
)
