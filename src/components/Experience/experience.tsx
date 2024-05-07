import experienceJson from "../../data/experience.data.json";
import { Experience } from "../../Models/experiences.models";

export const Experiences = () => {
  return (
    <section className="dark:text-palette-50 text-palette-900 grid place-items-center gap-8 py-24 w-full">
      <h3 className="text-2xl font-bold">EXPERIENCIAS LABORALES</h3>
      <article className="w-full md:w-1/2 grid gap-8">
        {experienceJson.experience.map((experience: Experience) => (
          <div key={experience.id} className="grid gap-4">
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <span className="text-2xl font-bold">{experience.title}</span>
                <span>{experience.company}</span>
              </div>
              <span className="text-slate-600">
                {experience.initialDate} - {experience.finalDate}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {experience.description}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
};
