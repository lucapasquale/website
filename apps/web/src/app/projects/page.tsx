import React from 'react'
import { Hero } from '@website/ui'

import { Project } from './Project'
import { ALL_PROJECTS } from './projectList'

export default function Page() {
  return (
    <>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="flex flex-col items-center justify-between">
        {ALL_PROJECTS.map((project, idx) => (
          <Project key={idx} project={project} />
        ))}
      </div>
    </>
  )
}
