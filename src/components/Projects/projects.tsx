import { projects } from "../../data/projects.data";
import { Project } from "../../Models/projects.models";

export const Projects = () => {
  return (
    <section className="container-general" id="projects">
      <h3 className="text-general">PROYECTOS</h3>
      <article className="w-full lg:w-1/2 flex flex-wrap items-center justify-center gap-8">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="w-[80%] lg:w-[45%] h-[auto] shadow-md shadow-palette-900 dark:shadow-palette-50 duration-300 hover:cursor-pointer hover:rounded-lg border bg-gris rounded-lg cards"
          >
            <img
              src={project.img}
              alt=""
              className="h-[200px] w-full rounded-t-lg"
            />
            <div className="p-4 text-[10px]">
              <h5 className="text-naranja">{project.tittle}</h5>
            </div>
            <div className="p-4 flex justify-around items-center">
              <a
                className="primary-button scale-75"
                href={project.link}
                target="blank"
              >
                Visitar Proyecto
              </a>

              <div className="flex gap-2 relative">
                {project.icons.map((icon) => (
                  <div key={icon.id} className="relative group">
                    <icon.component
                      style={{ color: icon.color }}
                      className="transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <span className="absolute cursor-default top-[-30px] bg-blanco text-gris p-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
                      {icon.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
