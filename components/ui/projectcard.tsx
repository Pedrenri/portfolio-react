"use client";

import React, { useState } from "react";
import { Meteors } from "@/components/ui/meteors";
import Image, { StaticImageData } from "next/image";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  images: StaticImageData[];
  hrefURL?: string;
  githubURL?: string;
}

type ThumbnailRef = {
  current: {
    visible: boolean;
    hide: () => void;
    show: () => void;
  } | null;
};

export function ProjectCard(props: ProjectCardProps) {
  const { title, description, images, hrefURL, githubURL } = props;
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + images.length) % images.length
    );
  };

  const [open, setOpen] = React.useState(false);
  const thumbnailsRef = React.useRef<ThumbnailRef>(null);

  return (
    <>
      <div className="relative shadow-xl bg-violet-950/[0.2] border border-violet-800/[0.2] px-4 py-8 h-full overflow-hidden rounded-2xl flex flex-col items-start">
        <div className="relative z-50 flex items-center">
          <button
            className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-transparent text-white cursor-pointer z-50 flex items-center"
            onClick={prevSlide}
          >
            &#9664;
          </button>

          <button
            className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-transparent text-white cursor-pointer z-50 flex items-center"
            onClick={nextSlide}
          >
            &#9654;
          </button>
          <Image
            src={images[currentSlide]}
            alt={`${title}-${currentSlide}`}
            className="z-50"
            onClick={() => setOpen(true)}
          />

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={images}
            plugins={[Thumbnails]}
            thumbnails={{ ref: thumbnailsRef.current }}
            on={{
              click: () => {
                (thumbnailsRef.current?.current?.visible
                  ? thumbnailsRef.current?.current?.hide
                  : thumbnailsRef.current?.current?.show)?.();
              },
            }}
          />
        </div>

        <div className="relative z-50 flex flex-col justify-start pt-4">
          <h1 className="font-bold text-xl text-white mb-2 relative z-50">
            {title}
          </h1>

          <p className="font-normal text-base text-slate-500 mb-4 relative z-50 text-justify">
            {description}
          </p>
          
        </div>

        <div className="mt-auto flex flex-row justify-between w-full">
          {hrefURL && (
            <Link href={hrefURL} target="_blank">
              <button className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                Ver Projeto
              </button>
            </Link>
          )}

          {githubURL && (
            <Link
              href={githubURL}
              target="_blank"
              rel="noopener noreferrer"
              className=""
            >
              <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                  <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(120,56,248,0.6)_0%,rgba(120,56,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-slate-950 py-2 px-4 ring-1 ring-white/10 ">
                  <span className="flex gap-2">
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path
                        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
                        fill="white"
                      />
                    </svg>
                    Ver no Github
                  </span>
                  <svg
                    fill="none"
                    height="16"
                    viewBox="0 0 24 24"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.75 8.75L14.25 12L10.75 15.25"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                    />
                  </svg>
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-indigo-400/0 via-indigo-400/90 to-indigo-400/0 transition-opacity duration-500 group-hover:opacity-40" />
              </button>
            </Link>
          )}
        </div>

        

        {/* Meaty part - Meteor effect */}
        <Meteors number={20} />
      </div>
    </>
  );
}
