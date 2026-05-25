"use client";

import skills from "@/components/skill";
import Image from "next/image";
import { useTranslations } from "next-intl";

export function Skills() {
  const t = useTranslations("Navbar");

  return (
    <section
      id="skills"
      className="mt-24 xl:mt-52"
    >
      <div className="mx-auto max-w-6xl ">
        <div className="grid gap-16 md:grid-cols-[220px_1fr]">
          <div>
            <p
              className="
                text-sm
                font-medium
                uppercase
                tracking-[0.25em]
                text-white/80
              "
            >
              {t("Skills")}
            </p>
          </div>

          <div
            className="
              grid
              grid-cols-2
              gap-x-8
              gap-y-6
              sm:grid-cols-3
              md:grid-cols-4
            "
          >
            {skills.map((skill, index) => (
              <div
                key={index}
                className="
                  flex items-center gap-3
                  border-b border-black/5
                  pb-3
                  dark:border-white/5
                "
              >
                <Image
                  src={skill.image}
                  alt={skill.title}
                  width={18}
                  height={18}
                  className="object-contain opacity-80"
                />

                <span
                  className="
                    text-sm
                    text-neutral-700
                    dark:text-neutral-300
                  "
                >
                  {skill.title}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
