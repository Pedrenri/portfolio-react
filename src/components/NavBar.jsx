import React, { useState, useEffect, memo } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { HashLink } from "react-router-hash-link";
import { BrowserRouter as Router } from "react-router-dom";
import logo from "../assets/img/logo.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const NavBar = memo(() => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/" sm={5}>
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link
                as={HashLink}
                to="#home"
                className={activeLink === "home" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("home")}
              >
                Início
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="#skills_ref"
                className={activeLink === "skills" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("skills")}
              >
                Habilidades
              </Nav.Link>
              <Nav.Link
                as={HashLink}
                to="#projects"
                className={activeLink === "projects" ? "active navbar-link" : "navbar-link"}
                onClick={() => onUpdateActiveLink("projects")}
              >
                Projetos
              </Nav.Link>
            </Nav>
            <span className="navbar-text">
              <HashLink to="#connect">
                <button className="vvd mx-0 mx-sm-4">
                  <span>Fale Comigo</span>
                </button>
              </HashLink>
              <div className="social-icon">
                <a href="https://www.linkedin.com/in/pedro-henri-de-assis-50b612231/" target='_blank' rel="noopener noreferrer">
                  <img src={navIcon1} alt="" />
                </a>
                <a href="https://chatwith.io/s/pedro-henri" target='_blank' rel="noopener noreferrer">
                  <img src={navIcon2} alt="" />
                </a>
                <a href="https://github.com/Pedrenri" target='_blank' rel="noopener noreferrer">
                  <img src={navIcon3} alt="" />
                </a>
              </div>
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Router>
  );
});