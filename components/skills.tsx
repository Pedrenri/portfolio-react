"use client";
import skills from "@/components/skill";
import { useTranslations } from "next-intl";
import Slider from "react-slick";
import React from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

export function Skills() {
  const settings = {
    arrows: false,
    adaptativeHeight: true,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
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
        breakpoint: 800,
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
    <div className="pb-32">
      
      <div className="max-w-[100rem] m-auto mt-12" id="projects">
        <Slider {...settings}>
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="px-2 m-auto flex items-center justify-center"
              whileTap={{
                scale: 0.95,
              }}
            >
              <div className="flex gap-x-2 object-contain justify-center items-center">
                <Image
                  src={skill.image}
                  alt={skill.title}
                   className="w-[50px] sm:w-[65px] md:w-[80px] object-contain"
                />
                <div className="flex flex-col justify-center">
                  <h3 style={{ color: "white" }} className="text-3xl font-bold">
                    {skill.title}
                  </h3>
                </div>
              </div>
            </motion.div>
          ))}
        </Slider>
      </div>
    </div>
  );
}
