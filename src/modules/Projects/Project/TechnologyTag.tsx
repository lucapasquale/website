import React, { FC } from 'react'

import { Technology } from '../logic/getProjects'

type Props = {
  technology: Technology
}

export const TechnologyTag: FC<Props> = ({ technology }) => {
  const techClasses = getTechnologyClasses(technology)

  return (
    <li
      className={`inline-block py-0.5 px-2 rounded-sm text-sm uppercase font-bold ${techClasses}`}
    >
      {technology}
    </li>
  )
}

function getTechnologyClasses(technology: Technology) {
  switch (technology) {
    case Technology.Elixir:
      return 'text-gray-200 bg-[#6e4a7e]'

    case Technology.CSharp:
      return 'text-gray-200 bg-[#178600]'

    case Technology.Typescript:
      return 'text-gray-200 bg-[#2b7489]'

    case Technology.GraphQL:
      return 'text-gray-200 bg-[#e10098]'

    case Technology.PostgresQL:
      return 'text-gray-200 bg-[#0064a5]'

    case Technology.Unity:
      return 'text-gray-200 bg-[#222c37]'

    case Technology.NestJS:
      return 'text-gray-200 bg-[#e0234e]'

    case Technology.NextJS:
      return 'text-gray-200 bg-[#111]'

    case Technology.React:
      return 'text-gray-800 bg-[#61dafb]'

    default:
      return ''
  }
}
