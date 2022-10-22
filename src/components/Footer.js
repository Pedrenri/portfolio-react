import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import { Curriculum } from "./Curriculo";
import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Curriculum />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
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
