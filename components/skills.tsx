"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "./ui/tracing-beam";
import skills from "@/components/skill";
import {useTranslations} from 'next-intl';

export function Skills() {
  const t = useTranslations('Skills');
  return (
    <div style={{ backgroundColor: "#06000d" }} className="mb-20 py-16">
      <TracingBeam>
        <h1 className="text-center pt-16 text-3xl font-bold" id="skills">
        {t('Title')}
        </h1>
        <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 pb-4">
        {t('Description')}
        </p>
        <div className="max-w-5xl mx-auto px-8 ">
          <HoverEffect items={skills} />
        </div>
      </TracingBeam>
    </div>
  );
}
