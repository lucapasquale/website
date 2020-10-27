import { Props as ProjectProps } from './Project'

export function getProjects(isDarkTheme: boolean): ProjectProps[] {
  return [
    {
      title: 'Up We Go',
      url:
        'https://play.google.com/store/apps/details?id=com.NarrowAlley.UpWeGo',
      image: {
        src: '/images/projects/up-we-go.webp',
        width: 275,
        height: 490,
      },
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
      image: {
        src: '/images/projects/linking-bio.webp',
        width: 275,
        height: 450,
      },
      description: `Share more than a single link in your social media.
        Create your own page, where you can customize and have as many links as you would like.`,
      technologies: [
        {
          title: 'Front-end:',
          list: [
            'React',
            'Next.js',
            'Apollo Client',
            'Material-UI',
            'TypeScript',
          ],
        },
        {
          title: 'Back-end:',
          list: ['GraphQL', 'NestJS', 'PostgreSQL', 'TypeScript'],
        },
      ],
    },

    {
      title: 'My portfolio webpage',
      url: 'https://github.com/lucapasquale/website',
      image: {
        src: isDarkTheme
          ? '/images/projects/website-light.webp'
          : '/images/projects/website-dark.webp',
        width: 275,
        height: 490,
      },
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
      image: {
        src: '/images/projects/fit-it.webp',
        width: 275,
        height: 420,
      },
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
