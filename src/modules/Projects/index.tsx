import { Hero } from "~components/Hero";
import { Separator } from "~components/Separator";

import { ALL_PROJECTS } from "./allProjects";
import { ProjectCard } from "./Project";

export function Page() {
  return (
    <>
      <Hero title="Projects" subTitle="Some things I've created over the years" />

      <div className="flex flex-col items-center justify-between">
        {ALL_PROJECTS.map((project, idx) => (
          <section>
            <ProjectCard key={idx} project={project} preload={idx <= 2} />

            {idx < ALL_PROJECTS.length - 1 && <Separator className="block sm:hidden" />}
          </section>
        ))}
      </div>
    </>
  );
}
