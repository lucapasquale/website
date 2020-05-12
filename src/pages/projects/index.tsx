import React, { FC } from 'react'
import Head from 'next/head'
import styled from 'styled-components'

import { Hero } from '../../components/common/Hero'
import { Layout } from '../../components/common/Layout'

import { Project } from '../../components/Projects/Project'
import { projects } from '../../components/Projects/data'

const Wrapper = styled.div({
  padding: '32px',
})

const ProjectWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
})

const Divider = styled.hr({
  width: '100%',
  maxWidth: '500px',
  margin: '32px 0px',

  borderBottomColor: 'var(--color-primary)',
  borderBottomWidth: '0.5px',
})

const Projects: FC = () => (
  <>
    <Head>
      <link rel="canonical" href="https://lucapasquale.netlify.app/projects" />
    </Head>

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

export default Projects
