import React, { FC } from 'react'
import styled from 'styled-components'

import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout'
import { DarkThemeContext } from '@helpers/theme/context'
import { colors } from '@helpers/theme/colors'

import { Project } from '@modules/Projects/Project'
import { getProjects } from '@modules/Projects/data'

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

  borderBottomColor: `var(${colors.primary.cssVariable})`,
  borderBottomWidth: '0.5px',
})

const Projects: FC = () => {
  const { isDarkTheme } = DarkThemeContext.useContainer()
  const projects = getProjects(isDarkTheme)

  return (
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
  )
}

export default Projects
