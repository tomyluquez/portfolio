import { BsLinkedin, BsGithub } from "react-icons/bs";
import { SiGmail } from "react-icons/si";

export const menues = [
  { name: "Inicio", link: "#Inicio" },
  { name: "sobre mi", link: "#Sobre" },
  { name: "Skills", link: "#Skills" },
  { name: "Portfolio", link: "#Portfolio" },
  { name: "Contacto", link: "#Contacto" },
];

export const icons = [
  {
    id: 1,
    component: BsLinkedin,
    link: "https://www.linkedin.com/in/tomasluquez/",
  },
  { id: 2, component: BsGithub, link: "https://github.com/tomyluquez" },
  { id: 3, component: SiGmail, link: "mailto:luquez1431@gmail.com" },
];
