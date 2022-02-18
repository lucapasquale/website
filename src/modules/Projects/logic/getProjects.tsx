import Image from 'next/image'

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
    url: 'https://github.com/lucapasquale/botchini/',
    githubUrl: 'https://github.com/lucapasquale/botchini/',
    image: (
      <Image
        priority
        width={642}
        height={632}
        alt="botchini project image"
        src="/images/projects/botchini.webp"
      />
    ),
    description: `Discord bot to notify when a Twitch streamer starts streaming`,
    technologies: [Technology.Elixir, Technology.PostgresQL],
  },

  {
    title: 'Up We Go',
    url: 'https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo',
    image: (
      <Image
        priority
        width={411}
        height={731}
        alt="Up We Go project image"
        src="/images/projects/up-we-go.webp"
      />
    ),
    description: `Climb to the top in this arcade game, try different characters
      and compete with your friends for the highest score!`,
    technologies: [Technology.Unity, Technology.CSharp],
  },

  {
    title: 'Linking Bio',
    url: 'https://www.linkingbio.com',
    image: (
      <Image
        priority
        width={1079}
        height={1919}
        alt="Linking bio project image"
        src="/images/projects/linking-bio.webp"
      />
    ),
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
    image: (
      <Image
        priority
        width={750}
        height={1334}
        alt="Website project image"
        src="/images/projects/website.webp"
      />
    ),
    description: `You know, the one that has this text and is right in front of you.`,
    technologies: [Technology.Typescript, Technology.React, Technology.NextJS, Technology.Tailwind],
  },

  {
    title: 'Fit It',
    url: 'https://github.com/lucapasquale/FitIt',
    githubUrl: 'https://github.com/lucapasquale/FitIt',
    image: (
      <Image
        priority
        width={476}
        height={720}
        alt="Fit It project image"
        src="/images/projects/fit-it.webp"
      />
    ),
    description: `Solve hundreds of different puzzles in this great mobile game.
      Game was published on Android Play Store, where it had over a thousand downloads.`,
    technologies: [Technology.Unity, Technology.CSharp],
  },
]

export function getProjects() {
  return ALL_PROJECTS
}
