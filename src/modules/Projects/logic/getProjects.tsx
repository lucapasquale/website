import Image from 'next/image'

export enum Technology {
  // Languages
  CSharp = 'c#',
  Elixir = 'elixir',
  Typescript = 'typescript',

  // Libraries
  React = 'react',
  NextJS = 'next.js',
  Apollo = 'Apollo',
  NestJS = 'nestjs',
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

export function getProjects(): Project[] {
  return [
    {
      title: 'Botchini',
      url: 'https://github.com/lucapasquale/botchini/',
      githubUrl: 'https://github.com/lucapasquale/botchini/',
      image: (
        <Image
          placeholder="blur"
          alt="botchini project image"
          src={require('../../../../public/images/projects/botchini.webp')}
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
          placeholder="blur"
          alt="Up We Go project image"
          src={require('../../../../public/images/projects/up-we-go.webp')}
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
          placeholder="blur"
          alt="Linking bio project image"
          src={require('../../../../public/images/projects/linking-bio.webp')}
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
        Technology.NextJS,
      ],
    },

    {
      title: 'Portfolio',
      url: 'https://lucapasquale.dev',
      githubUrl: 'https://github.com/lucapasquale/website',
      image: (
        <Image
          placeholder="blur"
          alt="Website project image"
          src={require('../../../../public/images/projects/website-light.webp')}
        />
      ),
      description: `You know, the one that has this text and is right in front of you.`,
      technologies: [Technology.Typescript, Technology.React, Technology.NextJS],
    },

    {
      title: 'Fit It',
      url: 'https://github.com/lucapasquale/FitIt',
      githubUrl: 'https://github.com/lucapasquale/FitIt',
      image: (
        <Image
          placeholder="blur"
          alt="Fit It project image"
          src={require('../../../../public/images/projects/fit-it.webp')}
        />
      ),
      description: `Solve hundreds of different puzzles in this great mobile game.
        Game was published on Android Play Store, where it had over a thousand downloads.`,
      technologies: [Technology.Unity, Technology.CSharp],
    },
  ]
}
