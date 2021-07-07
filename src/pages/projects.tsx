import React, { FC } from 'react'

import { Hero } from '@components/Hero'
import { Layout } from '@components/Layout'
import { Project } from '@modules/Projects/Project'
import { getProjects } from '@modules/Projects/data'

const Projects: FC = () => {
  const projects = getProjects()

  return (
    <Layout>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="max-w-screen-sm mx-auto flex flex-col items-center px-4">
        {projects.map((p, idx) => (
          <div key={idx}>
            <Project project={p} />

            {idx < projects.length - 1 && <hr className="w-full max-w-md mx-auto my-8" />}
          </div>
        ))}
      </div>
    </Layout>
  )
}

export default Projects
