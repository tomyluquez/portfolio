import { SkillsIcons } from "../../data/skills.data";
import { Skill } from "../../Models/skills.models";
import "./skills.css";

export const Skills = () => {
  return (
    <section
      className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24"
      id="skills"
    >
      <h2 className="text-2xl font-bold">ALGUNAS DE MIS HABILIDADES</h2>
      <div className="flex items-center justify-between w-full md:w-1/2">
        {SkillsIcons.map((skill: Skill) => (
          <skill.component key={skill.id} className="text-4xl icon-skill" />
        ))}
      </div>
    </section>
  );
};
