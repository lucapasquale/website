import React from 'react'

import { TechnologyTag } from '~common/components/TechnologyTag'

import type { Project as ProjectType } from '../logic/getProjects'

import { Header } from './Header'

type Props = {
  project: ProjectType
}

export function Project({ project }: Props) {
  return (
    <article className="mt-8 mb-10 flex w-full flex-col sm:flex-row items-center sm:items-stretch">
      <div className="min-w-[275px] max-w-[275px] border border-gray-500 text-[0px]">
        {project.image}
      </div>

      <div className="mt-4 ml-0 sm:ml-8 max-w-md">
        <Header project={project} />

        <ul className="flex flex-row flex-wrap gap-2 mb-4">
          {project.technologies.map((technology, index) => (
            <li key={index}>
              <TechnologyTag technology={technology} />
            </li>
          ))}
        </ul>

        <p>{project.description}</p>
      </div>
    </article>
  )
}
