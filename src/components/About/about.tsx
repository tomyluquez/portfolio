import "./about.css";

export const About = () => {
  return (
    <main className="container-ppal" id="about">
      <img src="./dev.png" alt="image avatar dev" className="image" />
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-bold">Hola, soy Tomas </p>
        <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold">
          <h1>desarrollador frontend</h1>
        </span>
      </div>
      <p className="dark:text-slate-500 text-palette-900 leading-relaxed">
        Desarrollador web frontend con sólida experiencia en HTML, CSS,
        JavaScript, Typescript, React y Angular. Hábil en la creación de
        interfaces web atractivas y funcionales, con un fuerte enfoque en la
        usabilidad y el rendimiento. Poseo conocimientos en MySQL y manejo de
        API REST, y estoy siempre en busca de nuevas oportunidades para aprender
        y crecer profesionalmente.
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <a className="primary-button" href="mailto:luquez1431@gmail.com">
          Ponte en contacto
        </a>
        <a
          className="primary-button"
          href="/TomasLuquezCV.pdf"
          download="TomasLuquezCV.pdf"
        >
          Descargar CV
        </a>
      </div>
    </main>
  );
};
