import "./about.css";

export const About = () => {
  return (
    <main className="container-ppal" id="about">
      <img src="./dev.png" alt="image avatar dev" className="image" />
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-bold">Hola, soy Tomas </p>
        <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold">
          <h1>desarrollador FullStack</h1>
        </span>
      </div>
      <p className="dark:text-slate-500 text-palette-900 leading-relaxed">
        Desarrollador Web Fullstack con sólida experiencia construyendo
        aplicaciones modernas y escalables. Mis conocimientos principales en el
        frontend son React y Angular, y para backend Node.js, Express y C#.
        Experiencia trabajando con bases de datos relacionales y no relacionales
        (MySQL y MongoDB), APIs REST y metodologías ágiles como SCRUM. Busco un
        entorno desafiante donde pueda seguir creciendo, aportar valor y
        consolidar mis conocimientos técnicos.
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <a className="primary-button" href="mailto:luquez1431@gmail.com">
          Ponte en contacto
        </a>
        <a
          className="primary-button"
          href="/CV_Tomas_E_Luquez.pdf"
          download="CV_Tomas_E_Luquez.pdf"
        >
          Descargar CV
        </a>
      </div>
    </main>
  );
};
