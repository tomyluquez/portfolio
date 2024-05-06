import skillsJson from "../../data/skills.data.json";
import "./skills.css";

export const Skills = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24">
      <h2 className="text-2xl font-bold">Habilidades en</h2>
      <div className="flex flex-wrap gap-8">
        {skillsJson.skills.map((skill) => (
          <img
            key={skill.id}
            src={skill.img}
            alt={skill.title}
            className="w-[50px] aspect-square grayscale img-experience"
          />
        ))}
      </div>
    </section>
  );
};
