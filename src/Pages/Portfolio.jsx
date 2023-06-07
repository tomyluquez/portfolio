import { projects } from "../Services/proyects";

const Portfolio = () => {
  return (
    <section id="Portfolio" className="font-roboto">
      <h2 className="text-gris w-full text-center text-3xl mt-8">
        MIS PRINCIPALES PROYECTOS
      </h2>
      <div className="w-full flex flex-wrap gap-12 items-center justify-center my-24">
        {projects.map((proyect) => (
          <div
            key={proyect.id}
            className={`cuadro hover:scale-110 duration-300 overflow-hidden relative cursor-pointer w-3/4 md:w-1/4 text-gris px-8 py-4 h-[300px] flex flex-col justify-end group bg-[url('src/assets/${proyect.fondo}.png')]  bg-cover bg-no-repeat`}
          >
            <div className="bg-transparente text-blanco overflow-hidden absolute left-1 -bottom-72 group-hover:bottom-1 duration-300">
              <h5 className="w-full text-center font-bold">{proyect.tittle}</h5>
              <span className="italic w-full mb-4 text-center block text-sm">
                {proyect.subTittle}
              </span>
              <p className="w-full text-center">{proyect.description}</p>
              <a
                href={proyect.link}
                target="blank"
                className="w-full text-center text-rojo block mt-8"
              >
                Link para visitar
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
