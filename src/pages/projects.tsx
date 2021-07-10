import React, { FC } from 'react'

import { Hero } from '@common/components/Hero'
import { Layout } from '@common/components/Layout'

import { Project } from '@modules/Projects/Project'
import { getProjects } from '@modules/Projects/logic/getProjects'

const Projects: FC = () => {
  const projects = getProjects()

  return (
    <Layout>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="mt-6 flex flex-col items-center justify-between">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </Layout>
  )
}

export default Projects
