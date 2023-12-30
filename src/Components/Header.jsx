import { menues, icons } from "../Services/menues";
import { RiMenu4Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [navScroll, setNavScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setNavScroll(true);
      } else {
        setNavScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header className="w-full duration-300">
      <nav
        className={`container max-w-[1840px] fixed top-0 flex items-center justify-around px-8 py-4 text-blanco z-20 duration-300 ${
          navScroll && "bg-gris"
        } ${open && "bg-gris"} `}
      >
        <div>
          <a href="#Inicio">
            <h1 className="text-2xl hover:scale-110 hover:text-naranja duration-300">
              TL
            </h1>
          </a>
        </div>
        <div
          className={`duration-300 ${
            open ? "h-screen" : "h-0"
          }  absolute w-full overflow-hidden items-center left-0  flex flex-col  top-12 md:h-auto md:w-auto md:top-0 md:relative md:flex-row ${
            navScroll && "bg-gris"
          } ${open && "bg-gris"}`}
        >
          <ul className="py-4 md:py-0 flex md:gap-4 h-full w-full flex-col justify-center items-center gap-[115px] md:flex-row">
            {menues.map((menu, index) => (
              <a key={index} href={menu.link}>
                <li
                  className="relative hover:after:w-full font-roboto"
                  onClick={() => setOpen(!open)}
                >
                  _{menu.name}
                </li>
              </a>
            ))}
          </ul>
        </div>
        <div className=" flex gap-2">
          {icons.map((icon) => (
            <a
              key={icon.id}
              href={icon.link}
              target="blank"
              className="hover:scale-125 hover:text-naranja duration-300"
            >
              <icon.component />
            </a>
          ))}
        </div>
        <div className="block md:hidden cursor-pointer">
          <RiMenu4Fill onClick={() => setOpen(!open)} />
        </div>
      </nav>
    </header>
  );
};

export default Header;
