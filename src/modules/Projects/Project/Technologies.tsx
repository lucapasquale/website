import React, { FC } from 'react'

import { Project, Technology } from '../data'

type Props = Pick<Project, 'technologies'>

export const Technologies: FC<Props> = ({ technologies }) => (
  <ul className="flex gap-2 mt-4">
    {technologies.map((technology, index) => {
      const techClasses = getTechnologyClasses(technology)

      return (
        <li
          key={index}
          className={`inline-block py-0.5 px-2 rounded-sm text-sm uppercase font-bold text-gray-200 ${techClasses}`}
        >
          {technology}
        </li>
      )
    })}
  </ul>
)

function getTechnologyClasses(technology: Technology) {
  switch (technology) {
    case Technology.Elixir:
      return 'bg-[#6e4a7e]'

    case Technology.CSharp:
      return 'bg-[#178600]'

    case Technology.Typescript:
      return 'bg-[#2b7489]'

    case Technology.GraphQL:
      return 'bg-[#e10098]'

    case Technology.PostgresQL:
      return 'bg-[#0064a5]'

    case Technology.Unity:
      return 'bg-[#222c37]'

    case Technology.NestJS:
      return 'bg-[#e0234e]'

    case Technology.NextJS:
      return 'bg-[#111]'

    case Technology.React:
      return 'bg-[#61dafb] text-gray-800'

    default:
      return ''
  }
}
