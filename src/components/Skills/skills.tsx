import skillsJson from "../../data/skills.data.json";
import { Skill } from "../../Models/skills.models";
import "./skills.css";

export const Skills = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24">
      <h2 className="text-2xl font-bold">Habilidades en</h2>
      <div className="flex items-center justify-between w-full md:w-1/2">
        {skillsJson.skills.map((skill: Skill) => (
          <i
            key={skill.id}
            className={`fa-brands fa-${skill.icon} text-[30px] img-experience`}
          ></i>
        ))}
      </div>
    </section>
  );
};
