import { ProjectCard } from "./ui/projectcard";
import { GetProjects } from "@/components/project";
import { useTranslations } from "next-intl";
import Image from "next/image";
import zou from "../assets/img/zou.png";
import { ExpandableCardDemo } from "./ui/expandable-card";

const Projects = (tab: any) => {
  const projects = GetProjects(tab);
  const t = useTranslations(`Projects`);

  return (
    <div className="pb-8 bg-gradient-to-br from-neutral-300 to-gray-300 p-10  rounded-tr-xl rounded-tl-xl">
      <div className="flex flex-col items-center">
        <h1 className="text-5xl font-bold text-slate-950">{t("Title")}</h1>
        <p className="text-neutral-800 max-w-lg my-2 text-sm  relative z-10">
          {t("Description")}{" "}
        </p>
      </div>
      <ExpandableCardDemo />
    </div>
  );
};

export default Projects;
