import { ProjectCard } from "./ui/projectcard";
import { GetProjects } from "@/components/project";
import { useTranslations } from "next-intl";
import Image from "next/image";
import zou from "../assets/img/zou.png";

const Projects = (tab: any) => {
  const projects = GetProjects(tab);
  const t = useTranslations(`Projects.${tab.tab}`);

  return (
    <div className="pb-8  bg-gradient-to-br from-slate-900 to-purple-950 p-10 rounded-2xl" id="projects">
      {projects.length == 0 && (
        <div className="font-bold text-white text-4xl">Oops...</div>
      )}
      {projects.length !== 0 && (
        <>
            <div>
              <h1 className="text-3xl font-bold text-white">{t("Title")}</h1>
              <p className="text-neutral-500 max-w-lg my-2 text-sm  relative z-10">
                {t("Description")}{" "}
              </p>
            </div>
            {tab.tab == "3D" && (
              <div>
                <Image
                  className="object-contain h-24"
                  src={zou}
                  alt={"Zou3D"}
                />
              </div>
            )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-10">
            {projects.map((project : any, index : any) => (
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
