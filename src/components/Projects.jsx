import { React, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import CoverW1 from "../assets/img/CoverW1.png";
import webd11 from "../assets/img/webdev1-1.png";
import webd12 from "../assets/img/webdev1-2.png";
import webd13 from "../assets/img/webdev1-3.png";
import CoverW2 from "../assets/img/coverW2.png";
import webd21 from "../assets/img/webdev2-1.png";
import webd22 from "../assets/img/webdev2-2.png";
import webd23 from "../assets/img/webdev2-3.png";
import port1 from "../assets/img/port1.png";
import port2 from "../assets/img/port2.png";
import port3 from "../assets/img/port3.png";
import petmatch1 from "../assets/img/petmatch1.png"
import petmatch2 from "../assets/img/petmatch2.png"
import petmatch3 from "../assets/img/petmatch3.png"


AOS.init();

const projectsData = [
  {
    title: "Henri's",
    description:
      "Um dos primeiros projetos por mim desenvolvidos, com técnicas iniciantes. O trabalho deveria ser uma loja, contendo página de login, carrinho e suporte.",
    carouselImages: [webd21, webd22, webd23],
    hrefURL: "https://henrisgym.netlify.app",
  },
  {
    title: "Sigma",
    description:
      "Projeto de escola em que precisávamos desenvolver um site contendo carrosséis, modo escuro e diversas páginas. Deveria ser uma simulação de uma loja ou fabricantes de peças de computadores. Foi meu primeiro projeto em React",
    carouselImages: [webd11, webd12, webd13],
    hrefURL: "https://sigmahardware.netlify.app",
    githubURL: "https://github.com/Pedrenri/sigma-hardware-site"
  },
  {
    title: "Portfólio Pessoal",
    description:
      "Iniciado como um projeto de escola, o meu portfólio evoluiu para a página de profissional em que você se encontra agora! Foi meu segundo projeto em React e é um projeto que é aprimorado continuamente.",
    carouselImages: [port1, port2, port3],
    githubURL: "https://github.com/Pedrenri/portfolio-react",
  },
  {
    title: "PetMatch",
    description:
      "Projeto de conclusão, feito com ReactJS e NodeJS, utilizando o banco de dados MongoDB, o PetMatch é essencialmente um Tinder feito para cachorros. Foi realizado em grupo no meu último ano de curso.",
    carouselImages: [petmatch1, petmatch2, petmatch3],
    githubURL: "https://github.com/Pedrenri/pit-projeto",
  },
];

export const Projects = memo(() => {
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projetos</h2>
              <Row data-aos="fade-up">
                {projectsData.map((project, index) => (
                  <ProjectCard key={index} {...project} />
                ))}
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <div class="custom-shape-divider-bottom-1688671486">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            opacity=".25"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z"
            opacity=".5"
            class="shape-fill"
          ></path>
          <path
            d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
});
