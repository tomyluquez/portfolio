import { projects } from "../../data/projects.data";
import { Project } from "../../Models/projects.models";

export const Projects = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24 w-full">
      <h3 className="text-2xl font-bold">PROYECTOS</h3>
      <article className="w-full md:w-1/2 grid gap-8">
        {projects.map((project: Project) => (
          <div
            key={project.id}
            className="md:w-1/4 w-[340px]  bg-gris rounded-lg cards"
          >
            <img
              src={project.img}
              alt=""
              className="h-[150px] w-full object-cover rounded-t-lg"
            />
            <div className="p-4 text-[10px] h-[100px]">
              <h5 className="text-naranja">{project.tittle}</h5>
              <p>{project.description}</p>
            </div>
            <div className="p-4 flex justify-around items-center">
              <a
                href={project.link}
                target="blank"
                className="bg-blanco text-gris text-[12px] p-2 hover:bg-naranja hover:text-blanco duration-300"
              >
                Visitar Proyecto
              </a>
              <div className="flex relative">
                {project.icons.map((icon) => (
                  <div key={icon.id} className="relative group">
                    <icon.component
                      style={{ color: icon.color }}
                      className="transition-transform duration-300 transform group-hover:scale-110"
                    />
                    <span className="absolute cursor-default bottom-[-40px] bg-blanco text-gris p-2 text-[10px] opacity-0 group-hover:opacity-100 transition-opacity">
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
