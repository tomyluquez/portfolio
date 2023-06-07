import { icons } from "../Services/icons";

const Skills = () => {
  return (
    <section
      id="Skills"
      className="cotainer py-12 md:mb-12 flex flex-col items-center justify-center font-roboto gap-4 bg-gris text-blanco"
    >
      <h4 className="text-3xl">MIS SKILLS</h4>
      <div className="w-3/4 flex flex-col justify-center items-center md:flex-row">
        {icons.map((icon) => (
          <div
            key={icon.name}
            className="w-3/4 flex items-center justify-center md:flex-col md:grayscale  md:hover:grayscale-0 cursor-pointer md:hover:scale-110 duration-300"
          >
            <img src={icon.src} alt="" data-aos={`fade-${icon.fade}`} />
            <span
              className={`w-[80px] text-center text-${icon.name}`}
              data-aos="fade-up"
            >
              {icon.name.toUpperCase()}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
