import { ProjectCard } from "./ui/projectcard";
import { GetProjects } from "@/components/project";
import { useTranslations } from "next-intl";

const Projects = (tab: any) => {
  const projects = GetProjects(tab);
  const t = useTranslations(`Projects.${tab.tab}`);

  return (
    <div className="pb-8  bg-gradient-to-br from-slate-900 to-purple-950 p-10 rounded-2xl">
      {projects.length == 0 && (
        <div className="font-bold text-white text-4xl">Oops...</div>
      )}
      {projects.length !== 0 && (
        <>
          <h1 className="text-3xl font-bold text-white">{t("Title")}</h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
            {projects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                images={project.images}
                hrefURL={project.hrefURL}
                githubURL={project.githubURL}
                tab={tab.tab}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Projects;
