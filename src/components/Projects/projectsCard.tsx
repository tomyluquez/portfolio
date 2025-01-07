interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
  projectUrl: string;
}

export function ProjectCard({
  title,
  description,
  imageUrl,
  technologies,
  projectUrl,
}: ProjectCardProps) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover md:w-48"
          />
        </div>
        <div className="p-6 flex flex-col justify-between">
          <div>
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">
              {title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs font-semibold text-gray-700 bg-gray-200 rounded-full dark:text-gray-200 dark:bg-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <a
            href={projectUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-button"
          >
            Visiar
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
}
