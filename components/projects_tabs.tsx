import React from "react";
import { Tabs } from "./ui/tabs";
import Projects from "./projects";
import { useTranslations } from "next-intl";
import zou from "../assets/img/zou.png";
interface Props {}

function Projects_tabs(props: Props) {
  const {} = props;
  const t = useTranslations(`Projects`);

  const tabs = [
    {
      title: "3D",
      value: "3D",
      content: <Projects tab="3D" />,
    },
    {
      title: "Dev",
      value: "web",
      content: <Projects tab="web" />,
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
      <div className="h-[245rem] xsm:h-[265rem] msm:h-[275rem] lgsm:h-[285rem] 2lgsm:h-[300rem] 3lgsm:h-[325rem] 4lgsm:h-[350rem] 5lgsm:h-[380rem] sm:h-[425rem] md:h-[180rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full items-start justify-start my-20">
        <Tabs tabs={tabs} />
      </div>
    </>
  );
}

export default Projects_tabs;
