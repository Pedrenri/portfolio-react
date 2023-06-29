import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/astro.png";
import { ArrowDownCircle, Display } from "react-bootstrap-icons";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

AOS.init();

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "PEDRO HENRI",
    "WEB DEVELOPER",
    "DESIGNER UI/UX",
    "DEVELOPER CS",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => 100);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner py-56 md:py-80 " id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={12} data-aos="fade-right">
            <div className="banner-text">
              {/* <motion.span
                className="tagline"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                Olá! Eu sou:
              </motion.span> */}
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-80 text-6xl	md:text-8xl xl:text-9xl text-center"
              >
                <span className="txt-rotate" dataperiod="1000">
                  <span className="wrap">{text}</span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.25 }}
                className="text-2xl md:text-xl text-center banner-sub"
              >
                FULLSTACK DEVELOPER <span>&</span> DESIGNER
              </motion.p>
              <motion.a
                href="#connect"
                initial={{ y: 50, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
              >
               {/*  <button onClick={() => console.log("connect")}>
                  Fale Comigo! <ArrowDownCircle size={25} />
                </button> */}
              </motion.a>
            </div>
          </Col>
          {/* <Col
             xs={8}
            md={5}
            xl={5}
            className="justify-content-center align-items-center d-none d-md-flex"
          > 
          
            <motion.div
              className="header-img"
              initial={{
                scale: 1.5
              }}
              animate={{
                y: [-50, 40, -50],
                rotate: [0, -5, 0],
                
              }}
              transition={{
                duration: 15,
                ease: "linear",
                delay: 2,
                repeat: Infinity,
              }}
            > 
              <img src={headerImg} alt="Header Img" />
            </motion.div>
          </Col> */}
        </Row>
      </Container>
      <div class="custom-shape-divider-bottom-1687571069">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path d="M1200 0L0 0 598.97 114.72 1200 0z" class="shape-fill"></path>
        </svg>
      </div>
    </section>
  );
};
