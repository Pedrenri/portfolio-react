import React, { useState, useEffect, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

export const Banner = memo(() => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 500);
  const toRotate = ["PEDRO HENRI", "WEB DEVELOPER", "DESIGNER", "FULLSTACK"];
  const period = 2000;

  useEffect(() => {
    const ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text, delta]);

  const tick = () => {
    const i = loopNum % toRotate.length;
    const fullText = toRotate[i];

    // Verifica se o texto está sendo deletado e se já foi completamente deletado
    if (isDeleting && text === "") {
      setIsDeleting(false);
      setLoopNum((prevLoopNum) => prevLoopNum + 1);
      setDelta(300); // Ajuste conforme necessário
      return;
    }

    // Calcula o próximo texto a ser exibido
    const updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    // Ajusta o período de transição para criar uma animação mais suave
    setDelta(isDeleting ? 100 : 200);

    // Se o texto atual for igual ao texto completo, inicia a deleção
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    }
  };

  return (
    <section className="banner py-56 md:py-80 " id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={12} xl={12} data-aos="fade-right">
            <div className="banner-text">
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="mb-80 text-6xl md:text-8xl xl:text-9xl text-center"
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
              ></motion.a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="custom-shape-divider-bottom-1687571069">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 0L0 0 598.97 114.72 1200 0z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
});
