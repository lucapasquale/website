import React, { FC } from 'react'

import { Hero } from '@common/components/Hero'

import { getProjects } from '@modules/Projects/logic/getProjects'
import { Project } from '@modules/Projects/Project'

const Page: FC = () => {
  const projects = getProjects()

  return (
    <>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="flex flex-col items-center justify-between">
        {projects.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </>
  )
}

export default Page
