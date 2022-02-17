import React, { FC } from 'react'

import { Project as ProjectType } from '../logic/getProjects'

import { Header } from './Header'
import { TechnologyTag } from './TechnologyTag'

type Props = {
  project: ProjectType
}

export const Project: FC<Props> = ({ project }) => {
  return (
    <section className="mt-8 mb-10 flex w-full flex-col sm:flex-row items-center sm:items-stretch">
      <div
        className="min-w-[275px] max-w-[275px] border border-gray-500 font-s"
        style={{ fontSize: 0 }}
      >
        {project.image}
      </div>

      <div className="mt-4 ml-0 sm:ml-8 max-w-md">
        <Header project={project} />

        <ul className="flex flex-row flex-wrap gap-2 mb-4">
          {project.technologies.map((technology, index) => (
            <TechnologyTag key={index} technology={technology} />
          ))}
        </ul>

        <p>{project.description}</p>
      </div>
    </section>
  )
}
