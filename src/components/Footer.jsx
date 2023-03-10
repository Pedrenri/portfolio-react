import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Curriculum } from "./Curriculum";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="d-flex align-items-center">
          <Curriculum />
          <Col size={12} sm={6} className="d-flex justify-content-center align-items-center">
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end d-flex justify-content-center align-items-center" >
            <div className="social-icon py-4 sm:py-0">
              <a
                href="https://www.linkedin.com/in/pedro-henri-de-assis-50b612231/"
                target="_blank"
              >
                <img src={navIcon1} alt="Icon" />
              </a>
              <a
                href="https://api.whatsapp.com/send?phone=5531996624846&text=%28Pedro+Henri%29+"
                target="_blank"
              >
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/Pedrenri" target="_blank">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
