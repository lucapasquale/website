import React from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { Link } from '~common/components/Link'

import { Project } from '../logic/getProjects'

type Props = {
  project: Project
}

export function Header({ project }: Props) {
  return (
    <div className="mb-4">
      <Link
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-baseline gap-2 text-gray-300 mb-2 sm:mb-0"
        href={project.url}
      >
        <h3 className="text-2xl">{project.title}</h3>

        <FaExternalLinkAlt />
      </Link>

      {project.githubUrl && (
        <Link
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-gray-300"
          href={project.githubUrl}
        >
          <FaGithub />

          <h4 className="text-md">GitHub</h4>
        </Link>
      )}
    </div>
  )
}
