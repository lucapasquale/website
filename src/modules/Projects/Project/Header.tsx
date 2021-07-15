import React, { FC } from 'react'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

import { Project } from '../logic/getProjects'

type Props = {
  project: Project
}

export const Header: FC<Props> = ({ project }) => (
  <div className="mb-4">
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-baseline gap-2 text-gray-300"
      href={project.url}
    >
      <h3 className="text-2xl">{project.title}</h3>

      <FaExternalLinkAlt />
    </a>

    {project.githubUrl && (
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 text-gray-300"
        href={project.githubUrl}
      >
        <FaGithub />

        <h4 className="text-md">GitHub</h4>
      </a>
    )}
  </div>
)
