import Image from 'next/image'

import { Technology } from '~common/components/TechnologyTag'

import botchiniImage from '../../../../public/images/projects/botchini.webp'
import fitItImage from '../../../../public/images/projects/fit-it.webp'
import linkingBioImage from '../../../../public/images/projects/linking-bio.webp'
import upWeGoImage from '../../../../public/images/projects/up-we-go.webp'
import websiteImage from '../../../../public/images/projects/website.webp'

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
    technologies: ['elixir', 'postgresql'],
  },

  {
    title: 'Up We Go',
    url: 'https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo',
    image: <Image priority placeholder="blur" alt="Up We Go project image" src={upWeGoImage} />,
    description: `Climb to the top in this arcade game, try different characters
      and compete with your friends for the highest score!`,
    technologies: ['unity', 'csharp'],
  },

  {
    title: 'Linking Bio',
    url: 'https://www.linkingbio.com',
    image: <Image placeholder="blur" alt="Linking bio project image" src={linkingBioImage} />,
    description: `Share more than a single link in your social media.
      Create your own page, where you can customize and have as many links as you would like.`,
    technologies: ['nestjs', 'graphql', 'postgresql', 'typescript', 'react', 'apollo', 'nextjs'],
  },

  {
    title: 'Portfolio',
    url: 'https://lucapasquale.dev',
    githubUrl: 'https://github.com/lucapasquale/website',
    image: <Image placeholder="blur" alt="Website project image" src={websiteImage} />,
    description: `You know, the one that has this text and is right in front of you.`,
    technologies: ['typescript', 'react', 'nextjs', 'tailwind'],
  },

  {
    title: 'Fit It',
    url: 'https://github.com/lucapasquale/FitIt',
    githubUrl: 'https://github.com/lucapasquale/FitIt',
    image: <Image placeholder="blur" alt="Fit It project image" src={fitItImage} />,
    description: `Solve hundreds of different puzzles in this great mobile game.
      Game was published on Android Play Store, where it had over a thousand downloads.`,
    technologies: ['unity', 'csharp'],
  },
]

export function getProjects() {
  return ALL_PROJECTS
}
