import React, { FC } from 'react'
import { FaExternalLinkAlt } from 'react-icons/fa'

import { Project } from '../data'

type Props = Pick<Project, 'title' | 'url'>

export const Header: FC<Props> = ({ title, url }) => (
  <div className="mb-8">
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center gap-2 text-blue-400"
      href={url}
    >
      <h2 className="text-2xl">{title}</h2>

      <FaExternalLinkAlt />
    </a>
  </div>
)
