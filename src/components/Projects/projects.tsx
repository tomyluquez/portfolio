import ProjectsJson from "../../data/projects.data.json";
import { Project } from "../../Models/projects.models";

export const Projects = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24 w-full">
      <h3 className="text-2xl font-bold">Experiencias laborales</h3>
      <article className="w-full md:w-1/2 grid gap-8">
        {ProjectsJson.projects.map((project: Project) => (
          <div key={project.id} className="grid gap-4">
            <span>{project.tittle}</span>
          </div>
        ))}
      </article>
    </section>
  );
};
