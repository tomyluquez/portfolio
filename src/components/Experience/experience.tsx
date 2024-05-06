import experienceJson from "../../data/experience.data.json";
import { Experience } from "../../Models/experiences.models";

export const Experiences = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24">
      <h3 className="text-2xl font-bold">Experiencias laborales</h3>
      <article>
        {experienceJson.experience.map((experience: Experience) => (
          <div key={experience.id}>
            <div>
              <span>{experience.title}</span>
              <span>
                {experience.initialDate} - {experience.finalDate}
              </span>
            </div>
            <p>{experience.description}</p>
          </div>
        ))}
      </article>
    </section>
  );
};
