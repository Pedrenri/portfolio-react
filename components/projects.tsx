"use client";

import Image from "next/image";
import { GetProjects } from "@/components/project";
import { useTranslations } from "next-intl";

const Projects = () => {
  const projects = GetProjects("web");
  const t = useTranslations("Projects");

  return (
    <section
      id="projects"
      className="
        border-t border-white/10
        py-24
        bg-[#252525]
      "
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-14">
          <p
            className="
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-white
            "
          >
            {t("Title")}
          </p>

          <p
            className="
              mt-5
              max-w-2xl
              text-sm
              leading-6
              text-neutral-200
            "
          >
            {t("Description")}
          </p>
        </div>

        <div className="space-y-10">
          {projects.map((project, index) => {
            const hostname = new URL(project.ctaLink).hostname.replace(
              "www.",
              ""
            );

            const preview = `https://api.microlink.io/?url=${project.ctaLink}&screenshot=true&meta=false&embed=screenshot.url`;

            return (
              <a
                key={index}
                href={project.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  block
                  border-b border-white/20
                  pb-10
                "
              >
                <div className="grid gap-6 md:grid-cols-[220px_1fr]">
                  <div
                    className="
                      relative
                      aspect-video
                      overflow-hidden
                      rounded-lg
                      bg-neutral-900
                    "
                  >
                    <Image
                      src={preview}
                      alt={project.title}
                      fill
                      unoptimized
                      className="
                        object-cover
                        transition-transform duration-500
                        group-hover:scale-[1.02]
                      "
                    />
                  </div>

                  <div className="flex justify-between gap-6">
                    <div className="max-w-xl">
                      <span
                        className="
                          text-sm
                          uppercase
                          tracking-[0.2em]
                          text-neutral-300
                        "
                      >
                        {hostname}
                      </span>

                      <h3
                        className="
                          mt-3
                          text-xl
                          font-medium
                          tracking-tight
                          text-white
                        "
                      >
                        {project.title}
                      </h3>

                      <p
                        className="
                          mt-3
                          text-sm
                          leading-7
                          text-neutral-400
                        "
                      >
                        {project.description}
                      </p>
                    </div>

                    <span
                      className="
                        text-neutral-500
                        transition-transform duration-300
                        group-hover:translate-x-1
                      "
                    >
                      ↗
                    </span>
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;