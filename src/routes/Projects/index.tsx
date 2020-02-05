import React, { FC } from 'react'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import { Hero } from '../../components/Hero'
import { Layout } from '../../components/Layout'
import { Project } from './components/Project'

import { projects } from './data'

const Wrapper = styled.div({
  padding: '32px',
})

const ProjectWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
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
      <link rel="canonical" href="https://lucapasquale.netlify.com/projects" />
    </Helmet>

    <Layout>
      <Hero
        title="Projects"
        subTitle="Some things I've created over the years"
      />

      <Wrapper>
        {projects.map((p, idx) => (
          <ProjectWrapper key={p.title}>
            <Project {...p} />

            {idx < projects.length - 1 && <Divider />}
          </ProjectWrapper>
        ))}
      </Wrapper>
    </Layout>
  </>
)
