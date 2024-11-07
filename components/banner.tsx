"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Socials from "./ui/socials";
import { useTranslations } from "next-intl";
import { FlipWords } from "./ui/flip-words";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const t = useTranslations("Banner");
  const toRotate = [t("design"), t("dev"), t("proj"), t("fix")];

  return (
    <div id="home">
      <LampContainer>
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-8xl text-center font-bold select-none"
          >
            {t('Hello')}
            <FlipWords words={toRotate} /> 
            <br />
            {t('systems')}
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-xl md:text-xl text-center banner-sub mt-4"
            id="skills"
          >
            {t("Description")}
          </motion.p>
        </div>
        <Socials email />
      </LampContainer>
    </div>
  );
}
