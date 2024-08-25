import { ProjectCard } from "./ui/projectcard";
import { GetProjects } from "@/components/project";

const Projects = () => {
  const projects = GetProjects();
  return (
    <div className="pb-8  bg-gradient-to-br from-slate-900 to-purple-950 p-10 rounded-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
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
