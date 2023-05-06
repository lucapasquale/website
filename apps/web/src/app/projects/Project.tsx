import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'
import { TechnologyTag, TechnologyTagProps } from '@website/ui'

import { Link } from '~common/components/Link'

export type ProjectType = {
  title: string
  description: string
  url: string
  githubUrl?: string
  image: React.ReactNode
  technologies: TechnologyTagProps['technology'][]
}

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

function Header({ project }: Props) {
  return (
    <div className="mb-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-baseline gap-2 text-gray-700 dark:text-gray-300 mb-2 sm:mb-0"
        href={project.url}
      >
        <h3 className="text-2xl">{project.title}</h3>

        <FaExternalLinkAlt />
      </Link>

      {project.githubUrl && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-700 dark:text-gray-300"
          href={project.githubUrl}
        >
          <FaGithub />

          <h4 className="text-md">GitHub</h4>
        </Link>
      )}
    </div>
  )
}
