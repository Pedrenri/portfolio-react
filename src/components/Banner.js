import { useState, useEffect } from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import headerImg from "../assets/img/astro_p_transp.png";
import { ArrowRightCircle } from "react-bootstrap-icons";
import TrackVisibility from "react-on-screen";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

AOS.init();

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Olá! Sou o Pedro!",
    "Web Developer.",
    "Designer UI/UX.",
    "Developer.cs",
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
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  let arrayNum = [
    -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20,
    20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20,
    -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20,
    20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20,
    -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20,
    20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20,
    -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20, 20, -20,
    20, -20, 20, -20, 20, -20, 20, -20,
  ];

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7} data-aos="fade-right">
            <div>
              <motion.span
                className="tagline"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                Bem vindo ao meu portfólio!
              </motion.span>
              <motion.h1
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{delay:0.1}}
              >
                <span
                  className="txt-rotate"
                  dataperiod="1000"
                  data-rotate='[ "Olá! Sou o Pedro!","Web Developer.",
                      "Designer UI/UX.",
                      "Desenvolvedor.cs.", ]'
                >
                  <span className="wrap">{text}</span>
                </span>
              </motion.h1>
              <motion.p
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{delay:0.25}}
              >
                Meu nome é Pedro Henri. Sou um programador/designer com foco em
                desenvolvimento Web. Atualmente, estou cursando o Ensino Médio
                Técnico no COTEMIG. Sou centrado, focado, e sempre busco dar o
                meu melhor para atingir o resultado máximo esperado pelo
                cliente/contratante. Minhas habilidades incluem HTML, CSS, JS,
                C#, SQL, Design Gráfico, Desenvolvimento 3D e Design UI/UX.
              </motion.p>
              <motion.a
                href="#connect"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
              >
                <button onClick={() => console.log("connect")}>
                  Fale Comigo! <ArrowRightCircle size={25} />
                </button>
              </motion.a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              <motion.div
                animate={{
                  /* rotate: 360, */
                  /* x: [50, 50, -50, -50, 50],*/
                  y: { arrayNum },
                  scale: [1, 0.5, 1],
                  rotate: [50, -50, 50],
                }}
                transition={{
                  duration: 300,
                  ease: "linear",
                  delay: 2,
                  repeat: Infinity,
                }}
              >
                <img src={headerImg} alt="Header Img" />
              </motion.div>
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
