"use client";
import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";
import br from "@/assets/img/br.svg";
import en from "@/assets/img/us.svg";
import fr from "@/assets/img/fr.svg";
import Image from "next/image";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [atTop, setAtTop] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setAtTop(true);
      } else {
        setAtTop(false);
      }
    }
  });

  return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          borderRadius: atTop || isMobile ? "0" : "50rem",
          width: atTop || isMobile ? "100%" : "45%",
          paddingTop: atTop || isMobile ? "2rem" : "1.5rem",
          paddingBottom: atTop || isMobile ? "2rem" : "1.5rem",
          y: !atTop && !isMobile ? 15 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex fixed inset-x-0 mx-auto border-b-1 border-slate-800 bg-slate-900/[0.7] backdrop-blur-md z-[5000] px-16 items-center justify-center space-x-4",
          className,
          !atTop && !isMobile ? "border-2 border-white/[0.01]" : ""
        )}
      >
        {navItems.map((navItem, idx) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative text-neutral-50 items-center flex space-x-1 hover:text-neutral-500 transition-colors"
            )}
          >
            <span className="block sm:hidden">{navItem.icon}</span>
            <span className="hidden sm:block text-md font-bold">
              {navItem.name}
            </span>
          </Link>
        ))}

        <Link href="/pt">
          <Image src={br} alt="pt" className="h-6 w-6" />
        </Link>
        <Link href="/en">
          <Image src={en} alt="en" className="h-6 w-6" />
        </Link>
        <Link href="/fr">
          <Image src={fr} alt="fr" className="h-6 w-6" />
        </Link>
       
      </motion.div>
    </AnimatePresence>
  );
};
