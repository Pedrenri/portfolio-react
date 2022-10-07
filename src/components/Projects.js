import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

import CoverD1 from '../assets/img/coverD1.png'
import design11 from '../assets/img/design1-1.png'
import design12 from '../assets/img/design1-2.png'
import design13 from '../assets/img/design1-3.png'

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
      description: "Empresa de cuidados financeiros",
      imgUrl: CoverD1,
      Car1: design11,
      Car2:design12,
      Car3:design13
    },
    {
      title: "Design-2",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
    },
    {
      title: "Design-3",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
    }
  ];
  const projects_bottom = [
    {
      title: "Design-4",
      description: "Design & Desenvolvimento",
      imgUrl: projImg1,
    },
    {
      title: "Design-5",
      description: "Design & Desenvolvimento",
      imgUrl: projImg2,
    },
    {
      title: "Design-6",
      description: "Design & Desenvolvimento",
      imgUrl: projImg3,
    }
  ];

  /* 3D */

  const projects2 = [
    {
      title: "3D-1",
      description: "Criação 3D",
      imgUrl: projImg1,
    },
    {
      title: "3D-2",
      description: "Criação 3D",
      imgUrl: projImg2,
    },
    {
      title: "3D-3",
      description: "Criação 3D",
      imgUrl: projImg3,
      
    }
  ];

  const projects_bottom2 = [
    {
      title: "3D-4",
      description: "Criação 3D",
      imgUrl: projImg1,
      
    },
    {
      title: "3D-5",
      description: "Criação 3D",
      imgUrl: projImg2,
      
    },
    {
      title: "3D-6",
      description: "Criação 3D",
      imgUrl: projImg3,
     
    },
  ];

  /* WEB */

  const projects3 = [
    {
      title: "Web-1",
      description: "Desenvolvimento Web",
      imgUrl: projImg1,
      
    },
    {
      title: "Web-2",
      description: "Desenvolvimento Web",
      imgUrl: projImg2,
      
    },
    {
      title: "Web-3",
      description: "Desenvolvimento Web",
      imgUrl: projImg3,
      
    },
  ];

  const projects_bottom3 = [
    {
      title: "Web-4",
      description: "Desenvolvimento Web",
      imgUrl: projImg1,
      
    },
    {
      title: "Web-5",
      description: "Desenvolvimento Web",
      imgUrl: projImg2,
      
    },
    {
      title: "Web-6",
      description: "Desenvolvimento Web",
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
                    <Nav.Link eventKey="second">Criação 3D</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">WebDev</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content>
                  <Tab.Pane eventKey="first">
                    <Row data-aos="fade-up">
                      {projects.map((project, index) => {
                        return (
                            <ProjectCard key={index} {...project} />
                        );
                      })}
                    </Row>

                    {/* <Row data-aos="fade-up">
                      {projects_bottom.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="second">
                    <Row data-aos="fade-up">
                      {projects2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                    {/* <Row data-aos="fade-up">
                      {projects_bottom2.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row> */}
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <Row data-aos="fade-up">
                      {projects3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                    {/* <Row data-aos="fade-up">
                      {projects_bottom3.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row> */}
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
