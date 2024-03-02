"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "./ui/lamp";
import Socials from "./ui/socials";

export function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const toRotate = ["PEDRO HENRI", "WEB DEVELOPER", "FULLSTACK", "DESIGNER."];

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);
  
    return () => {
      clearInterval(ticker);
    };
  }, [text, delta, loopNum]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(300);
      return;
    }

    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    setDelta(isDeleting ? 100 : 200);

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    }
  };
  return (
    <div id="home">
      <LampContainer>
        <div>
          <motion.h1
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl xl:text-8xl text-center font-bold"
          >
            <span className="txt-rotate">
              <span className="wrap">
                {text.length > 0 ? text : <>&nbsp;</>}
              </span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ x: -50, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.25 }}
            className="text-2xl md:text-xl text-center banner-sub"
          >
            FULLSTACK DEVELOPER
          </motion.p>
        </div>
        <Socials email />

      </LampContainer>
    </div>
  );
}
