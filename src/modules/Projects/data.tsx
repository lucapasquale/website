import Image from 'next/image'
import { Props as ProjectProps } from './Project'

export function getProjects(isDarkTheme: boolean): ProjectProps[] {
  return [
    {
      title: 'Botchini',
      url: 'https://github.com/lucapasquale/botchini/',
      image: (
        <Image
          placeholder="blur"
          alt="botchini project image"
          src={require('../../../public/images/projects/botchini.webp')}
        />
      ),
      description: `Discord bot to notify when a Twitch streamer starts streaming`,
      technologies: [
        {
          title: 'Technologies:',
          list: ['Elixir', 'PostgreSQL'],
        },
      ],
    },

    {
      title: 'Up We Go',
      url: 'https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo',
      image: (
        <Image
          placeholder="blur"
          alt="Up We Go project image"
          src={require('../../../public/images/projects/up-we-go.webp')}
        />
      ),
      description: `Climb to the top in this arcade game, try different characters
        and compete with your friends for the highest score!`,
      technologies: [
        {
          title: 'Technologies:',
          list: ['Unity Game Engine', 'Android', 'iOS', 'C#'],
        },
      ],
    },

    {
      title: 'Linking Bio',
      url: 'https://www.linkingbio.com',
      image: (
        <Image
          placeholder="blur"
          alt="Linking bio project image"
          src={require('../../../public/images/projects/linking-bio.webp')}
        />
      ),
      description: `Share more than a single link in your social media.
        Create your own page, where you can customize and have as many links as you would like.`,
      technologies: [
        {
          title: 'Back-end:',
          list: ['GraphQL', 'NestJS', 'PostgreSQL', 'TypeScript'],
        },
        {
          title: 'Front-end:',
          list: ['Next.js', 'Apollo Client', 'Material-UI', 'TypeScript'],
        },
      ],
    },

    {
      title: 'My portfolio webpage',
      url: 'https://github.com/lucapasquale/website',
      image: isDarkTheme ? (
        <Image
          placeholder="blur"
          alt="Website project image"
          src={require('../../../public/images/projects/website-light.webp')}
        />
      ) : (
        <Image
          placeholder="blur"
          alt="Website project image"
          src={require('../../../public/images/projects/website-dark.webp')}
        />
      ),
      description: `You know, the one that has this text and is right in front of you.`,
      technologies: [
        {
          title: 'Technologies:',
          list: ['React', 'Next.js', 'Styled-Components', 'TypeScript'],
        },
      ],
    },

    {
      title: 'Fit It',
      url: 'https://github.com/lucapasquale/FitIt',
      image: (
        <Image
          placeholder="blur"
          alt="Fit It project image"
          src={require('../../../public/images/projects/fit-it.webp')}
        />
      ),
      description: `Solve hundreds of different puzzles in this great mobile game.
        Game was published on Android Play Store, where it had over a thousand downloads.`,
      technologies: [
        {
          title: 'Technologies:',
          list: ['Unity Game Engine', 'Android', 'iOS', 'C#'],
        },
      ],
    },
  ]
}
