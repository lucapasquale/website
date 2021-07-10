import React, { FC } from 'react'

import { Technology } from '../logic/getProjects'

const TECHNOLOGY_CLASSES: Record<Technology, string> = {
  [Technology.Elixir]: 'text-gray-200 bg-[#6e4a7e]',
  [Technology.CSharp]: 'text-gray-200 bg-[#178600]',
  [Technology.Typescript]: 'text-gray-200 bg-[#2b7489]',

  [Technology.Unity]: 'text-gray-200 bg-[#222c37]',
  [Technology.Apollo]: 'text-gray-200 bg-[#7156d9]',
  [Technology.NestJS]: 'text-gray-200 bg-[#e0234e]',
  [Technology.NextJS]: 'text-gray-200 bg-[#111]',
  [Technology.Tailwind]: 'text-gray-800 bg-[#06b6d4]',
  [Technology.React]: 'text-gray-800 bg-[#61dafb]',

  [Technology.GraphQL]: 'text-gray-200 bg-[#e10098]',
  [Technology.PostgresQL]: 'text-gray-200 bg-[#0064a5]',
}

type Props = {
  technology: Technology
}

export const TechnologyTag: FC<Props> = ({ technology }) => {
  const techClasses = TECHNOLOGY_CLASSES[technology] ?? ''

  return (
    <li
      className={`inline-block py-0.5 px-2 rounded-sm text-sm uppercase font-bold ${techClasses}`}
    >
      {technology}
    </li>
  )
}
