import { projects } from "../Services/proyects";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="font-roboto">
      <h2 className="text-gris w-full text-center text-3xl mt-8">
        MIS PRINCIPALES PROYECTOS
      </h2>
      <div className=" flex flex-wrap gap-12 items-center justify-center my-24 px-4">
        {projects.map((project) => (
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
      </div>
    </section>
  );
};

export default Portfolio;
