import Image from 'next/image'

import botchiniImage from '../../../../public/images/projects/botchini.webp'
import fitItImage from '../../../../public/images/projects/fit-it.webp'
import linkingBioImage from '../../../../public/images/projects/linking-bio.webp'
import upWeGoImage from '../../../../public/images/projects/up-we-go.webp'
import websiteImage from '../../../../public/images/projects/website.webp'

export enum Technology {
  // Languages
  CSharp = 'c#',
  Elixir = 'elixir',
  Typescript = 'typescript',

  // Libraries
  React = 'react',
  NextJS = 'next.js',
  Apollo = 'apollo',
  NestJS = 'nestjs',
  Tailwind = 'tailwind',
  Unity = 'unity',

  // Tools
  GraphQL = 'graphql',
  PostgresQL = 'postgresql',
}

export type Project = {
  title: string
  description: string
  url: string
  githubUrl?: string
  image: React.ReactElement
  technologies: Technology[]
}

const ALL_PROJECTS: Project[] = [
  {
    title: 'Botchini',
    url: 'https://botchini.lucapasquale.dev',
    githubUrl: 'https://github.com/lucapasquale/botchini/',
    image: <Image priority placeholder="blur" alt="botchini project image" src={botchiniImage} />,
    description: `Discord bot to notify when a Twitch streamer starts streaming`,
    technologies: [Technology.Elixir, Technology.PostgresQL],
  },

  {
    title: 'Up We Go',
    url: 'https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo',
    image: <Image priority placeholder="blur" alt="Up We Go project image" src={upWeGoImage} />,
    description: `Climb to the top in this arcade game, try different characters
      and compete with your friends for the highest score!`,
    technologies: [Technology.Unity, Technology.CSharp],
  },

  {
    title: 'Linking Bio',
    url: 'https://www.linkingbio.com',
    image: <Image placeholder="blur" alt="Linking bio project image" src={linkingBioImage} />,
    description: `Share more than a single link in your social media.
      Create your own page, where you can customize and have as many links as you would like.`,
    technologies: [
      Technology.NestJS,
      Technology.GraphQL,
      Technology.PostgresQL,
      Technology.Typescript,
      Technology.React,
      Technology.Apollo,
      Technology.NextJS,
    ],
  },

  {
    title: 'Portfolio',
    url: 'https://lucapasquale.dev',
    githubUrl: 'https://github.com/lucapasquale/website',
    image: <Image placeholder="blur" alt="Website project image" src={websiteImage} />,
    description: `You know, the one that has this text and is right in front of you.`,
    technologies: [Technology.Typescript, Technology.React, Technology.NextJS, Technology.Tailwind],
  },

  {
    title: 'Fit It',
    url: 'https://github.com/lucapasquale/FitIt',
    githubUrl: 'https://github.com/lucapasquale/FitIt',
    image: <Image placeholder="blur" alt="Fit It project image" src={fitItImage} />,
    description: `Solve hundreds of different puzzles in this great mobile game.
      Game was published on Android Play Store, where it had over a thousand downloads.`,
    technologies: [Technology.Unity, Technology.CSharp],
  },
]

export function getProjects() {
  return ALL_PROJECTS
}
