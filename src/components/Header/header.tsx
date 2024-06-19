import "./header.css";

export const Header = () => {
  // const [navScroll, setNavScroll] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 100) {
  //       setNavScroll(true);
  //     } else {
  //       setNavScroll(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <header className={`container-header `}>
      <nav className="nav-header">
        <a href="#about" className="item-nav">
          Inicio
        </a>
        <a href="#skills" className="item-nav">
          Habilidades
        </a>
        <a href="#projects" className="item-nav">
          Proyectos
        </a>
        <a href="#experience" className="item-nav">
          Experiencia
        </a>
        <a href="#contact" className="item-nav">
          Contacto
        </a>
      </nav>
    </header>
  );
};
