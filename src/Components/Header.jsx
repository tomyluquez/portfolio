import { menues, icons } from "../Services/menues";
import { RiMenu4Fill } from "react-icons/ri";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  return (
    <header className="w-full">
      <nav className="container fixed top-0 flex items-center justify-around px-8 py-4 text-blanco z-20	bg-gris">
        <div>
          <a href="#Inicio">
            <h1 className="text-2xl hover:scale-110 duration-300">TL</h1>
          </a>
        </div>
        <div
          className={`${
            open ? "h-auto" : "h-0"
          } duration-300 absolute w-full overflow-hidden items-center left-0 bg-gris flex flex-col top-12 md:h-auto md:w-auto md:top-0 md:relative md:flex-row`}
        >
          <ul className="py-4 md:py-0 md:flex md:gap-4">
            {menues.map((menu, index) => (
              <a key={index} href={menu.link}>
                <li
                  className="relative hover:after:w-full"
                  onClick={() => setOpen(!open)}
                >
                  {menu.name.toUpperCase()}
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
              className="hover:scale-125 duration-300"
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
