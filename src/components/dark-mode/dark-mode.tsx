import { useEffect, useState } from "react";
import { FaRegMoon, FaRegSun } from "react-icons/fa";

export const DarkMode = () => {
  const [darkMode, setDarkMode] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  useEffect(() => {
    document.querySelector("body")!.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <div
      className="rounded-l-lg cursor-pointer bg-palette-900 dark:bg-palette-50 w-[50px] h-[50px] text-palette-50 flex justify-start px-2 items-center fixed right-0 top-1/2 transform translate-x-1/2 translate-y-1/2 dark:text-palette-900 hover:w-[80px] duration-300"
      onClick={toggleDarkMode}
    >
      {!darkMode && <FaRegMoon className="w-[20px] h-[20px]" />}
      {darkMode && <FaRegSun className="w-[20px] h-[20px]" />}
    </div>
  );
};
