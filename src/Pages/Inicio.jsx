import { FaHandPeace } from "react-icons/fa";
import Button from "../Components/Button";

const Inicio = () => {
  return (
    <section
      id="Inicio"
      className="container h-screen flex items-center justify-center"
    >
      <div className="py-16 w-3/4 h-full flex flex-col items-center justify-center">
        <h5 className="flex gap-2 items-center mb-8 text-3xl">
          BIENVENIDOS <FaHandPeace className="text-icons" />
        </h5>
        <h1 className="mb-4">
          SOY <span className="font-roboto text-3xl">TOMAS LUQUEZ</span>
        </h1>
        <p className="text-center mb-12 font-montserrat italic text-xl">
          Desarrollador web frontend con experiencia en HTML, CSS, JS, REACT,
          entre otros.
        </p>
        <a href="tel:+5493512118497">
          <Button
            text={"CONTACTAME"}
            hover={"hover:bg-blanco"}
            color={"hover:text-negro"}
          />
        </a>
      </div>
    </section>
  );
};

export default Inicio;
