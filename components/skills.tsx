"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "./ui/tracing-beam";
import js from "../assets/img/js.png";
import react from "../assets/img/react.png";
import node from "../assets/img/node.png";
import php from "../assets/img/php.png";
import mongodb from "../assets/img/mongodb.png";
import python from "../assets/img/python.png";
import powerbi from "../assets/img/powerbi.png";
import ps from "../assets/img/ps.png";
import ts from "../assets/img/ts.png";
import next from "../assets/img/next.webp";
import laravel from "../assets/img/laravel.png";
import sql from "../assets/img/sql.png";
import docker from "../assets/img/docker.png";

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
export const skills = [
  {
    title: "JavaScript",
    image: js,
  },
  {
    title: "TypeScript",
    image: ts,
  },
  {
    title: "Next",
    image: next,
  },
  {
    title: "React",
    image: react,
  },
  {
    title: "Node",
    image: node,
  },
  {
    title: "PHP",
    image: php,
  },
  {
    title: "Laravel",
    image: laravel,
  },
  {
    title: "SQL",
    image: sql,
  },
  {
    title: "MongoDB",
    image: mongodb,
  },
  {
    title: "Python",
    image: python,
  },
  {
    title: "PowerBI",
    image: powerbi,
  },
  {
    title: "Docker",
    image: docker,
  },
];
