import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <img src={logo} alt="Logo" />

      <div className="social-icon">
        <a href="https://www.linkedin.com/in/pedro-henri-de-assis-50b612231/" target='_blank'>
          <img src={navIcon1} alt="Icon" />
        </a>
        <a href="https://chatwith.io/s/pedro-henri" target='_blank'>
          <img src={navIcon2} alt="Icon" />
        </a>
        <a href="https://github.com/Pedrenri" target='_blank'>
          <img src={navIcon3} alt="Icon" />
        </a>
      </div>
    </footer>
  );
};
