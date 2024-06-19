import { ProjectCard } from "./ui/projectcard";
import { getProjects } from "@/components/project";
import {useTranslations} from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');
  const projects = getProjects();
  return (
    <div className="pb-8">
      <h1 className="text-center text-3xl font-bold " id="projects">
        {t('Title')}
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 pb-4">
        {t('Description')}</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-8 xl:px-[300px] pt-10">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            images={project.images}
            hrefURL={project.hrefURL}
            githubURL={project.githubURL}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
