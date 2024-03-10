import { createLazyFileRoute } from "@tanstack/react-router";

import { Hero } from "../components/Hero";
import { ALL_PROJECTS } from "../modules/projects";
import { ProjectCard } from "../modules/projects/Project";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

function Projects() {
  return (
    <>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="flex flex-col items-center justify-between">
        {ALL_PROJECTS.map((project, idx) => (
          <ProjectCard key={idx} project={project} />
        ))}
      </div>
    </>
  );
}
