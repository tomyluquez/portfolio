import Variables from "../Components/Variables";

const Inicio = () => {
  return (
    <section
      id="Inicio"
      className="h-screen px-4 md:gap-36 flex flex-col md:flex-row items-center justify-center text-roboto"
    >
      <div className="flex flex-col items-center font-roboto gap-4">
        <span className="bg-naranjaFont text-gris p-1 text-[12px] self-start ">
          Hola!, soy
        </span>
        <p className="text-5xl">Tomas Luquez</p>
        <h1 className="self-start">{">"} Front-end Developer</h1>
      </div>
      <div className="bg-negro w-full sm:w-[auto] text-[12px] sm:text-[15px] mt-36 p-4 flex flex-col gap-12 md:mt-0">
        <div className="text-grisFont flex flex-col">
          <span>{"// Encuentrame en Github o Linkedin"} </span>
          <span>{"// Click en el enlace para visitarlo"} </span>
        </div>
        <div>
          {" "}
          <Variables
            variable="gitHubURL"
            content="https://github.com/tomyluquez"
            line="1"
          />
          <Variables
            variable="linkedinURL"
            content="https://www.linkedin.com/in/tomasluquez/"
            line="2"
          />
        </div>
      </div>
    </section>
  );
};

export default Inicio;
