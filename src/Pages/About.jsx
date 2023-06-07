import Button from "../Components/Button";
import { CiLocationOn } from "react-icons/ci";

const About = () => {
  return (
    <section
      id="Sobre"
      className="w-full flex flex-col items-center justify-around py-4 md:p-24 gap-12 md:flex-row"
    >
      <div
        className="cuadro md:w-1/2 w-3/4 md:h-[560px] bg-gris rounded flex justify-center"
        data-aos="fade-right"
      >
        <img src="./public/foto.png" alt="Foto de tomas" />
      </div>
      <div className="md:w-1/2 w-3/4 md:h-[560px] text-negro font-roboto md:flex md:flex-col md:justify-center">
        <h4>Sobre Mi</h4>
        <h2 className="mb-12">
          Soy <span className="text-header font-bold">Tomas Luquez</span>
        </h2>
        <p className="mb-4 font-extralight">
          Un apasionado del desarrollado web frontend con experiencia en{" "}
          <strong>HTML, CSS, JavaScript, React</strong>. Experto en la creación
          de soluciones web atractivas y funcionales. Conocimientos avanzados de
          Excel. Comprometido con el aprendizaje continuo y la mejora constante
          de habilidades.
        </p>
        <span className="flex items-center mb-12">
          <CiLocationOn /> Cordoba, Argentina
        </span>
        <div>
          <a href="./public/tomas luquez.pdf" download="CvTomasLuquez.pdf">
            <Button hover={"header"} text={"blanco"}>
              DESCARGAR CV
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
