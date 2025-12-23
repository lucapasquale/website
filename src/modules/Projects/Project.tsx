import { ExternalLinkIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Link } from "~components/Link";
import { TechnologyTag } from "~components/TechnologyTag";

import { type Project } from "./allProjects";

type Props = {
  project: Project;
  preload?: boolean;
};

export function ProjectCard({ project, preload = false }: Props) {
  return (
    <article className="mt-8 mb-10 flex w-full flex-col sm:flex-row items-center sm:items-stretch">
      <div className="w-68.75">
        <img
          rel={preload ? "preload" : undefined}
          src={project.imagePath}
          alt={project.title}
          className="rounded-md"
        />
      </div>

      <div className="mt-4 ml-0 sm:ml-8 max-w-md">
        <Header project={project} />

        <ul className="flex flex-row flex-wrap gap-2 mb-4">
          {project.technologies.map((technology, index) => (
            <li key={index}>
              <TechnologyTag technology={technology} />
            </li>
          ))}
        </ul>

        <p>{project.description}</p>
      </div>
    </article>
  );
}

function Header({ project }: Props) {
  return (
    <div className="w-fit mb-4">
      <Link className="flex items-center gap-2 text-foreground mb-2 sm:mb-0" to={project.url}>
        <h3 className="text-2xl">{project.title}</h3>

        <ExternalLinkIcon className="w-6 h-6" />
      </Link>

      {project.githubUrl && (
        <Link className="flex items-center gap-1 text-foreground" to={project.githubUrl}>
          <GitHubLogoIcon />

          <h4 className="text-md">GitHub</h4>
        </Link>
      )}
    </div>
  );
}
