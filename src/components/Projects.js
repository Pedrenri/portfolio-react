import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import CoverD1 from "../assets/img/coverD1.png";
import design11 from "../assets/img/design1-1.png";
import design12 from "../assets/img/design1-2.png";
import design13 from "../assets/img/design1-3.png";

import CoverD2 from "../assets/img/coverD2.png";
import design21 from "../assets/img/design2-1.png";
import design22 from "../assets/img/design2-2.png";
import design23 from "../assets/img/design2-3.png";

import CoverD3 from "../assets/img/coverD3.png";
import design31 from "../assets/img/design3-1.png";
import design32 from "../assets/img/design3-2.png";
import design33 from "../assets/img/design3-3.png";

import CoverW1 from "../assets/img/CoverW1.png"
import webd11 from "../assets/img/webdev1-1.png";
import webd12 from "../assets/img/webdev1-2.png";
import webd13 from "../assets/img/webdev1-3.png";

import CoverW2 from "../assets/img/coverW2.png"
import webd21 from "../assets/img/webdev2-1.png";
import webd22 from "../assets/img/webdev2-2.png";
import webd23 from "../assets/img/webdev2-3.png";

/* import colorSharp from "../assets/img/color-sharp.png"; */
import colorSharp2 from "../assets/img/color-sharp2.png";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

export const Projects = () => {
  /* DESIGN */

  const projects = [
    {
      title: "DRACMA",
      description: "Empresa de Cuidados Financeiros",
      imgUrl: CoverD1,
      Car1: design11,
      Car2: design12,
      Car3: design13,
    },
    {
      title: "Henri's",
      description: "Empresa de Venda de Produtos Esportivos",
      imgUrl: CoverD2,
      Car1: design21,
      Car2: design22,
      Car3: design23,
      
    },
    {
      title: "Moda-Bela",
      description: "Site Para Dicas de Moda e Cuidados Pessoais",
      imgUrl: CoverD3,
      Car1: design31,
      Car2: design32,
      Car3: design33,
    },
  ];

  /* 3D */

  const projects2 = [
    {
      title: "Sigma",
      description: "Empresa de Fabricação e Venda de produtos de Hardware.",
      Car1: webd11,
      Car2: webd12,
      Car3: webd13,
      imgUrl: CoverW1,
      hrefURL: 'https://sigmahardware.netlify.app'
    },
    {
      title: "Henri's",
      description: "Site pronto da empresa de equipamentos esportivos",
      Car1: webd21,
      Car2: webd22,
      Car3: webd23,
      imgUrl: CoverW2,
      hrefURL: 'https://henrisgym.netlify.app',
    },
    {
      title: "3D-3",
      description: "Criação 3D",
      imgUrl: projImg3,
    },
  ];

  /* WEB */

  const projects3 = [
    {
      title: "Desenhos",
      description: "Feitos no papel",
      imgUrl: projImg1,
    },
    {
      title: "Arte Digital",
      description: "Photoshop",
      imgUrl: projImg2,
    },
    {
      title: "Esculturas 3D",
      description: "Blender",
      imgUrl: projImg3,
    },
  ];


  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projetos</h2>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Design Gráfico</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">WebDev</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Outros</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row data-aos="fade-up">
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row data-aos="fade-up">
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row data-aos="fade-up">
                      {projects3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt='bg-img'></img>
      <div class="custom-shape-divider-bottom-1666449565">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            class="shape-fill"
          ></path>
        </svg>
      </div>
    </section>
  );
};
