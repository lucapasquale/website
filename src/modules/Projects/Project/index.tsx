import React, { FC } from 'react'

import { Header } from './Header'
import { TechnologyTag } from './TechnologyTag'
import { Project as ProjectType } from '../data'

type Props = {
  project: ProjectType
}

export const Project: FC<Props> = ({ project }) => {
  return (
    <section className="flex w-full flex-col items-center sm:flex-row sm:items-stretch">
      <div className="min-w-[275px] max-w-[275px]">{project.image}</div>

      <div className="mt-4 ml-0 sm:ml-8">
        <Header project={project} />

        <p>{project.description}</p>

        <ul className="flex flex-row flex-wrap gap-2 mt-4">
          {project.technologies.map((technology, index) => (
            <TechnologyTag key={index} technology={technology} />
          ))}
        </ul>
      </div>
    </section>
  )
}
