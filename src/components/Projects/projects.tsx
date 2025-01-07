import { projects } from "../../data/projects.data";
import { ProjectCard } from "./projectsCard";

export const Projects = () => {
  return (
    <section className="container-general" id="projects">
      <h3 className="text-general">PROYECTOS</h3>
      <div className="article-general">
        {projects.map((project, index) => (
          <ProjectCard key={index} {...project} />
        ))}
      </div>
    </section>
  );
};
