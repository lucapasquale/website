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
    <article className="mt-8 mb-10 flex w-full flex-col items-center sm:flex-row sm:items-stretch">
      <div className="w-68.75">
        <img
          rel={preload ? "preload" : undefined}
          src={project.imagePath}
          alt={project.title}
          className="rounded-md"
        />
      </div>

      <div className="mt-4 ml-0 max-w-md sm:ml-8">
        <Header project={project} />

        <ul className="mb-4 flex flex-row flex-wrap gap-2">
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
    <div className="mb-4 w-fit">
      <Link className="mb-2 flex items-center gap-2 text-foreground sm:mb-0" to={project.url}>
        <h3 className="text-2xl">{project.title}</h3>

        <ExternalLinkIcon className="h-6 w-6" />
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
