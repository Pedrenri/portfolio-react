import { ProjectCard } from "./ui/projectcard";
import { projects } from "@/components/project";

const Projects = () => {
  return (
    <div className="pb-8">
      <h1 className="text-center text-3xl font-bold " id="projects">
        PROJETOS
      </h1>
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
