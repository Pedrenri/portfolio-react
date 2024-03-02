"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "./ui/tracing-beam";
import js from "../assets/img/js.png";

export function Skills() {
  return (
    <TracingBeam>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </TracingBeam>
  );
}
export const projects = [
  {
    title: "JAVASCRIPT",
    image: js,
  },
  {
    title: "Js",
    image: js,
  },
  {
    title: "Js",
    image: js,
  },
];
