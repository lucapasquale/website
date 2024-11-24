import { Technology } from "~components/TechnologyTag";

export type Project = {
  title: string;
  description: string;
  url: string;
  githubUrl?: string;
  imagePath: string;
  technologies: Technology[];
};

export const ALL_PROJECTS: Project[] = [
  {
    title: "Watchlist",
    url: "https://watchlist.luca.codes",
    githubUrl: "https://github.com/lucapasquale/watchlist/",
    imagePath: "/images/projects/watchlist.webp",
    description: "Create and share your favorite videos from YouTube, Twitch and Twitter",
    technologies: ["typescript", "react", "vite", "tailwind", "nestjs"],
  },
  {
    title: "Botchini",
    url: "https://botchini.luca.codes",
    githubUrl: "https://github.com/lucapasquale/botchini/",
    imagePath: "/images/projects/botchini.webp",
    description:
      "Discord bot that notifies when a creator starts streaming on Twitch or uploads a video to YouTube",
    technologies: ["elixir", "postgresql"],
  },
  {
    title: "Up We Go",
    url: "https://play.google.com/store/apps/details?id=com.Bendev.UpWeGo",
    imagePath: "/images/projects/up-we-go.webp",
    description:
      "Climb to the top in this arcade game, try different characters and compete with your friends for the highest score!",
    technologies: ["unity", "csharp"],
  },
  {
    title: "Portfolio",
    url: "https://www.luca.codes",
    githubUrl: "https://github.com/lucapasquale/website",
    imagePath: "/images/projects/website.webp",
    description: "You know, the one that has this text and is right in front of you.",
    technologies: ["typescript", "react", "vite", "tailwind"],
  },
  {
    title: "Linking Bio",
    url: "https://github.com/lucapasquale/linking-bio",
    githubUrl: "https://github.com/lucapasquale/linking-bio",
    imagePath: "/images/projects/linking-bio.webp",
    description:
      "Share more than a single link in your social media. Create your own page, where you can customize and have as many links as you would like.",
    technologies: ["nestjs", "graphql", "postgresql", "typescript", "react", "apollo", "nextjs"],
  },
  {
    title: "Fit It",
    url: "https://github.com/lucapasquale/FitIt",
    githubUrl: "https://github.com/lucapasquale/FitIt",
    imagePath: "/images/projects/fit-it.webp",
    description:
      "Solve hundreds of different puzzles in this great mobile game. Game was published on Android Play Store, where it had over a thousand downloads.",
    technologies: ["unity", "csharp"],
  },
];
