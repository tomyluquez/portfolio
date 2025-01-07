import { MdComputer } from "react-icons/md";
import experienceJson from "../../data/experience.data.json";
import { Experience } from "../../Models/experiences.models";

export const Experiences = () => {
  return (
    <section className="container-general" id="experience">
      <h3 className="text-general">EXPERIENCIAS LABORALES</h3>
      <article className="article-general">
        {experienceJson.experience.map((experience: Experience) => (
          <div
            key={experience.id}
            className="bg-white dark:bg-gray-800 p-8 flex flex-col justify-center gap-4"
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col">
                <div className="text-2xl font-bold flex gap-2 items-center">
                  <MdComputer /> {experience.title}
                </div>
                <span>{experience.company}</span>
              </div>
              <span className="text-slate-600">
                {experience.initialDate} - {experience.finalDate}
              </span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              {experience.responsabilities.map((r, i) => (
                <li key={r + "" + i}>{r}</li>
              ))}
            </p>
            <div className="flex flex-wrap gap-4">
              Tecnologias:
              {experience.tecnologies.map((t, i) => (
                <span key={t + "" + i}>{t}</span>
              ))}
            </div>
          </div>
        ))}
      </article>
    </section>
  );
};
