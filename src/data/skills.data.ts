import { RiJavascriptFill } from "react-icons/ri";
import { IoLogoReact } from "react-icons/io5";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoAngular } from "react-icons/io";
import { FaNodeJs } from "react-icons/fa6";
import { DiMongodb } from "react-icons/di";
import { FaGitAlt } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Skill } from "../Models/skills.models";
import { SiMysql } from "react-icons/si";

export const SkillsIcons: Skill[] = [
  {
    id: 1,
    name: "Javascript",
    component: RiJavascriptFill,
    color: "#00D8FF",
  },
  {
    id: 2,
    name: "Typescript",
    component: BiLogoTypescript,
    color: "#00D8FF",
  },
  {
    id: 3,
    name: "React",
    component: IoLogoReact,
    color: "#00D8FF",
  },
  {
    id: 4,
    name: "Angular",
    component: IoLogoAngular,
    color: "#DE002D",
  },
  {
    id: 5,
    name: "Node",
    component: FaNodeJs,
    color: "#00D8FF",
  },
  {
    id: 6,
    name: "MongoDB",
    component: DiMongodb,
    color: "#21de10",
  },
  {
    id: 9,
    name: "MySQL",
    component: SiMysql,
    color: "#21de10",
  },
  {
    id: 7,
    name: "Git",
    component: FaGitAlt,
    color: "#de5500",
  },
  {
    id: 8,
    name: "Github",
    component: FaGithub,
    color: "#de5500",
  },
];
