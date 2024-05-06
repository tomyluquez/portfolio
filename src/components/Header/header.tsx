import { useEffect, useState } from "react";

export const Header = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.querySelector("body")!.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <header className="dark:bg-palette-900 bg-palette-200 dark:text-palette-50 text-palette-900 flex items-center justify-between py-4 px-8 duration-300">
      <div className="w-[50px] h-[50px] rounded-full overflow-hidden flex justify-center items-center bg-palette-400 dark:bg-palette-600 dark:fill-palette-50 fill-palette-900">
        <p>TL</p>
      </div>

      <nav className="flex gap-8">
        <a href="#">Inicio</a>
        <a href="#">Proyectos</a>
        <a href="#">Experiencia</a>
        <i
          className="fa-solid fa-moon fill-palette-900 dark:fill-palette-50 cursor-pointer"
          onClick={toggleDarkMode}
        ></i>
        {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width={24}
          height={24}
          fill={"none"}
          className=""
          onClick={toggleDarkMode}
        >
          <path
            d="M21.5 14.0784C20.3003 14.7189 18.9301 15.0821 17.4751 15.0821C12.7491 15.0821 8.91792 11.2509 8.91792 6.52485C8.91792 5.06986 9.28105 3.69968 9.92163 2.5C5.66765 3.49698 2.5 7.31513 2.5 11.8731C2.5 17.1899 6.8101 21.5 12.1269 21.5C16.6849 21.5 20.503 18.3324 21.5 14.0784Z"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
      </nav>
    </header>
  );
};
