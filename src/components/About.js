import { Container, Row, Col } from "react-bootstrap";
import AboutImg from "../assets/img/me_2.jpeg";
import "animate.css";

export const About = () => {
  return (
    <section className="about" id="about">
      <Container>
        <h2>Sobre Mim</h2>
        <Row className="align-items-center justify-content-center">
          <Col xs={12} md={6} xl={5} className="align-items-center">
            <img
              className="img-fluid rounded-circle"
              src={AboutImg}
              alt="About Img"
            />
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <h1></h1>
              <p>
                Meu nome é Pedro Henri. Sou um programador/designer com foco em
                desenvolvimento Web. Atualmente, estou cursando o Ensino Médio
                Técnico no COTEMIG. Sou centrado, focado, e sempre busco dar o
                meu melhor para atingir o resultado máximo esperado pelo
                cliente/contratante. Minhas habilidades incluem HTML, CSS, JS,
                C#, SQL, Design Gráfico, Desenvolvimento 3D e Design UI/UX. Meu
                nome é Pedro Henri. Sou um programador/designer com foco em
                desenvolvimento Web. Atualmente, estou cursando o Ensino Médio
                Técnico no COTEMIG. Sou centrado, focado, e sempre busco dar o
                meu melhor para atingir o resultado máximo esperado pelo
                cliente/contratante. Minhas habilidades incluem HTML, CSS, JS,
                C#, SQL, Design Gráfico, Desenvolvimento 3D e Design UI/UX.
              </p>
            </div>
          </Col>
        </Row>
        <Row xs={2} md={3} className="justify-content-center ">
          <div>
            <h1></h1>
            <p>
              Meu nome é Pedro Henri. Sou um programador/designer com foco em
              desenvolvimento Web. Atualmente, estou cursando o Ensino Médio
              Técnico no COTEMIG. Sou centrado, focado, e sempre busco dar o meu
              melhor para atingir o resultado máximo esperado pelo
              cliente/contratante. Minhas habilidades incluem HTML, CSS, JS, C#,
              SQL, Design Gráfico, Desenvolvimento 3D e Design UI/UX. Meu nome é
              Pedro Henri. Sou um programador/designer com foco em
              desenvolvimento Web. Atualmente, estou cursando o Ensino Médio
              Técnico no COTEMIG. Sou centrado, focado, e sempre busco dar o meu
              melhor para atingir o resultado máximo esperado pelo
              cliente/contratante. Minhas habilidades incluem HTML, CSS, JS, C#,
              SQL, Design Gráfico, Desenvolvimento 3D e Design UI/UX.
            </p>
          </div>
        </Row>
      </Container>
    </section>
  );
};

export default About;
