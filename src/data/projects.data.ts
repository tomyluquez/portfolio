import { SiFirebase, SiMongodb, SiTailwindcss, SiCss3 } from "react-icons/si";
import { FaAngular, FaNodeJs, FaReact } from "react-icons/fa";

export const projects = [
  {
    tittle: "Ecomerce - Herencia",
    subTittle: "Ecomerce para marca de ropa de bebe",
    description:
      "En este ecomerce, se utilzo: React, Redux, Style name: '',dComponents,React-Router, Framer motion, Firebase, chakra UI",
    link: "https://herenciabebe.vercel.app/",
    id: 1,
    img: "/herencia.png",
    icons: [
      { id: 1, name: "React", component: FaReact, color: "#00D8FF" },
      { id: 2, name: "Firebase", component: SiFirebase, color: "#de5500" },
    ],
  },
  {
    tittle: "App web - Invitaciones bodas",
    subTittle: "App para invitaciones de bodas",
    description:
      "En esta app, se utilzo: React, tailwind css, React-hook-form, mongoDB",
    link: "https://celi-tomi-casamiento.vercel.app/",
    id: 5,
    img: "/boda.png",
    icons: [
      { id: 1, name: "React", component: FaReact, color: "#00D8FF" },
      {
        id: 2,
        name: "Tailwind",
        component: SiTailwindcss,
        color: "#00D8FF",
      },
      { id: 3, name: "MongoDB", component: SiMongodb, color: "#21de10" },
      { id: 4, name: "NodeJs", component: FaNodeJs, color: "#21de10" },
    ],
  },
  {
    tittle: "Landing page - Nucleo It",
    subTittle:
      "landing page para empresa de software gastronomico (en proceso de construccion)",
    description:
      "En este ecomerce, se utilzo: Angular, Css, Node.js, Express y MongoDB.",
    link: "https://www.nucleocheck.com",
    id: 6,
    img: "/nucleo.png",
    icons: [
      { id: 1, name: "Angular", component: FaAngular, color: "#DE002D" },
      { id: 2, name: "CSS", component: SiCss3, color: "#de5500" },
      { id: 3, name: "MongoDB", component: SiMongodb, color: "#21de10" },
      { id: 4, name: "NodeJs", component: FaNodeJs, color: "#21de10" },
    ],
  },
  {
    tittle: "Memo test - Game",
    subTittle: "Juego de las coincidencias",
    description: "En este mini juego, se utilzo: Angular, Css y Tailwind",
    link: "https://memo-game-two.vercel.app/",
    id: 4,
    img: "/memo.png",
    icons: [
      { id: 1, name: "Angular", component: FaAngular, color: "#DE002D" },
      {
        id: 2,
        name: "Tailwind",
        component: SiTailwindcss,
        color: "#00D8FF",
      },
    ],
  },
  // {
  //   tittle: "App web - Cuentas Claras",
  //   subTittle: "App para dividir gastos entre personas",
  //   description:
  //     "En esta app, se utilzo: React, Redux, Tailwind, Framer motion, React-Hook-Form",
  //   link: "https://dividir-cuenta-app.vercel.app/",
  //   id: 2,
  //   img: "/cuentasClaras.png",
  //   icons: [
  //     { id: 1, name: "React", component: FaReact, color: "#00D8FF" },
  //     {
  //       id: 2,
  //       name: "Tailwind",
  //       component: SiTailwindcss,
  //       color: "#00D8FF",
  //     },
  //     { id: 3, name: "MongoDB", component: SiMongodb, color: "#21de10" },
  //     { id: 4, name: "NodeJs", component: FaNodeJs, color: "#21de10" },
  //   ],
  // },
  // {
  //   tittle: "App web - Pedir APP",
  //   subTittle: "App para pedidos online de comida",
  //   description:
  //     "En esta app, se utilzo: React, Redux, Style Components, React-Router, Framer motion, Firebase, chakra UI, React-Hook-Form",
  //   link: "https://pedir-app.vercel.app/",
  //   id: 3,
  //   img: "/pedir.png",
  //   icons: [
  //     { id: 1, name: "React", component: FaReact, color: "#00D8FF" },
  //     { id: 2, name: "Firebase", component: SiFirebase, color: "#de5500" },
  //   ],
  // },
];
