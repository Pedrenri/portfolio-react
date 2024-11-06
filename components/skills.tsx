"use client";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { TracingBeam } from "./ui/tracing-beam";
import skills from "@/components/skill";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import React from "react";
import Image, { StaticImageData } from "next/image";



export function Skills() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const t = useTranslations("Skills");
  return (
    <div
      style={{ backgroundColor: "#06000d" }}
      className="mb-20 py-16"
      id="skills"
    >
      <h1 className="text-center pt-16 text-3xl font-bold">{t("Title")}</h1>
      <p className="text-neutral-500 max-w-lg mx-auto my-2 text-sm text-center relative z-10 pb-4">
        {t("Description")}
      </p>
      <div className="max-w-[70rem] m-auto">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <div key={index} className="px-6 m-auto">
              <div className="flex gap-x-2 object-contain">
                <Image
                  src={skill.image}
                  alt={skill.title}
                  style={{ height: "50px" }}
                  className="object-contain"
                />
                <div className="flex flex-col justify-center">
                  <h3 style={{ color: "white" }} className="text-xl font-bold">{skill.title}</h3>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
