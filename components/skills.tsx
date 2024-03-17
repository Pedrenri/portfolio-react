"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "./ui/tracing-beam";
import skills from "@/components/skill";

export function Skills() {
  return (
    <div style={{ backgroundColor: "#06000d" }} className="mb-20 py-16">
      <TracingBeam>
        <h1 className="text-center pt-16 text-3xl font-bold" id="skills">
          HABILIDADES
        </h1>
        <div className="max-w-5xl mx-auto px-8 ">
          <HoverEffect items={skills} />
        </div>
      </TracingBeam>
    </div>
  );
}
