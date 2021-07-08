import React, { FC } from 'react'

import { Hero } from '@common/components/Hero'
import { Layout } from '@common/components/Layout'

import { Project } from '@modules/Projects/Project'
import { getProjects } from '@src/modules/Projects/logic/getProjects'

const Projects: FC = () => {
  const projects = getProjects()

  return (
    <Layout>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="max-w-screen-sm mx-auto flex flex-col items-center px-4">
        {projects.map((project, idx) => (
          <div key={idx}>
            <Project project={project} />

            {idx < projects.length - 1 && <hr className="max-w-md mx-auto" />}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
