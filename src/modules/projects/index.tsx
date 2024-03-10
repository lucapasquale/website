import type { Project } from "./Project";

export const ALL_PROJECTS: Project[] = [
  {
    title: "Botchini",
    url: "https://botchini.lucapasquale.dev",
    githubUrl: "https://github.com/lucapasquale/botchini/",
    image: <img alt="botchini project image" src="/images/projects/botchini.png" />,
    description:
      "Discord bot that notifies when a creator starts streaming on Twitch or uploads a video to YouTube",
    technologies: ["elixir", "postgresql"],
  },
  {
    title: "Up We Go",
    url: "https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo",
    image: <img alt="Up We Go project image" src="/images/projects/up-we-go.webp" />,
    description:
      "Climb to the top in this arcade game, try different characters and compete with your friends for the highest score!",
    technologies: ["unity", "csharp"],
  },
  {
    title: "Portfolio",
    url: "https://lucapasquale.dev",
    githubUrl: "https://github.com/lucapasquale/website",
    image: <img alt="Website project image" src="/images/projects/website.png" />,
    description: "You know, the one that has this text and is right in front of you.",
    technologies: ["typescript", "react", "nextjs", "tailwind"],
  },
  {
    title: "Linking Bio",
    url: "https://github.com/lucapasquale/linking-bio",
    githubUrl: "https://github.com/lucapasquale/linking-bio",
    image: <img alt="Linking bio project image" src="/images/projects/linking-bio.webp" />,
    description:
      "Share more than a single link in your social media. Create your own page, where you can customize and have as many links as you would like.",
    technologies: ["nestjs", "graphql", "postgresql", "typescript", "react", "apollo", "nextjs"],
  },
  {
    title: "Fit It",
    url: "https://github.com/lucapasquale/FitIt",
    githubUrl: "https://github.com/lucapasquale/FitIt",
    image: <img alt="Fit It project image" src="/images/projects/fit-it.webp" />,
    description:
      "Solve hundreds of different puzzles in this great mobile game. Game was published on Android Play Store, where it had over a thousand downloads.",
    technologies: ["unity", "csharp"],
  },
];
