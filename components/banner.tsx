"use client";

import { Skills } from "./skills";
import Socials from "./ui/socials";
import { useTranslations } from "next-intl";

export function Banner() {
  const t = useTranslations("Banner");

  return (
    <section
      id="home"
      className="
        flex min-h-screen items-center
        border-b 
        border-white/10
        bg-[#0f0f10]
      "
    >
      <div className="mx-auto w-full max-w-6xl px-6">
        <div className="max-w-4xl">
          <p
            className="
              mb-6
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-neutral-500
            "
          >
            {t("Role")}
          </p>

          <h1
            className="
              text-5xl
              font-semibold
              leading-none
              tracking-tight
              text-white
              sm:text-6xl
              md:text-7xl
              xl:text-8xl
            "
          >
            {t("Hello")}
          </h1>

          <div
            className="
              mt-8
              h-px
              w-24
              bg-blue-600
            "
          />

          <p
            className="
              mt-8
              max-w-2xl
              text-base
              leading-7
              text-neutral-400
            "
          >
            {t("Description")}
          </p>

          <div className="mt-10">
            <Socials email />
          </div>
        </div>
        <Skills  />
      </div>
    </section>
  );
}
