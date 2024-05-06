export const About = () => {
  return (
    <main className="grid place-items-center m-auto lg:w-[50%] gap-8 py-24 dark:text-palette-50 text-palette-900 text-center">
      <img
        src="./dev.png"
        alt="image avatar dev"
        className="w-[200px] h-[180px] rounded-full overflow-hidden"
      />
      <div className="flex flex-col gap-2">
        <p className="text-5xl font-bold">Hola, soy Tomas </p>
        <span className="text-transparent bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-6xl font-bold">
          <h1>desarrollador frontend</h1>
        </span>
      </div>
      <p className="dark:text-slate-500 text-palette-900 leading-relaxed">
        ¡Soy un desarrollador con 3 años de experiencia creando sitios web
        dinámicos y atractivos. Mi pasión radica en transformar ideas en
        interfaces intuitivas. Desde el diseño hasta la implementación, estoy
        comprometido con la excelencia y la innovación en cada proyecto. ¡Echa
        un vistazo a mis trabajos!.
      </p>
      <div className="flex flex-wrap gap-4 items-center justify-center">
        <button className="bg-transparent dark:bg-palette-50 text-palette-900 px-4 py-2 text-2xl font-bold border-2 border-palette-900 rounded-full duration-300">
          Ponte en contacto
        </button>
        <button className="bg-palette-900 dark:bg-transparent text-palette-50 px-4 py-2 text-2xl font-bold border-2 border-palette-50 rounded-full duration-300">
          Descargar CV
        </button>
      </div>
    </main>
  );
};
