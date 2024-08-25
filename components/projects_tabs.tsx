import React from "react";
import { Tabs } from "./ui/tabs";
import Projects from "./projects";
import { useTranslations } from "next-intl";

interface Props {}

function Projects_tabs(props: Props) {
  const {} = props;
  const t = useTranslations("Projects");

  const tabs = [
    {
      title: "Web",
      value: "web",
      content: <Projects />,
    },
    {
      title: "3D",
      value: "3D",
      content: (
        <div className="w-full overflow-hidden relative rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-tl from-slate-900 to-purple-950">
          <h1>Ops...</h1>
          <span>Não há nada aqui ainda...</span>
        </div>
      ),
    },
  ];

  return (
    <>
      <h1 className="text-center text-3xl font-bold " id="projects">
        {t("Title")}
      </h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
        {t("Description")}
      </p>
      <div className="h-[210rem] sm:h-[220rem] md:h-[110rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

export default Projects_tabs;
