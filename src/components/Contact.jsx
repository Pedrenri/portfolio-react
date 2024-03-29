import React, { useState, memo } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";

AOS.init();

export const Contact = memo(() => {
  const [buttonText, setButtonText] = useState("Enviar");
  const [toReset] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [toSend, setToSend] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });

  const [result, setResult] = useState("");

  const formSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    try {
      const response = await emailjs.send(
        "service_8jxbx9x",
        "template_xlxhazk",
        toSend,
        "ysp9nvzNcXa5v9dqh"
      );

      console.log("SUCCESS!", response.status, response.text);
      setResult("Mensagem enviada!");
    } catch (err) {
      console.log("FAILED...", err);
      setResult("Algo deu errado. Tente novamente mais tarde.");
    } finally {
      setButtonText("Enviar");
      setToSend(toReset);
    }
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center cont_container justify-center">
          <Col size={12} md={10} sm={9}>
            <div data-aos="fade-down">
            <h2>Entre em contato</h2>
              <form data-aos="fade-down" onSubmit={formSubmit}>
                <Row>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="Nome"
                      name="firstName"
                      value={toSend.firstName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="text"
                      placeholder="Sobrenome"
                      name="lastName"
                      value={toSend.lastName}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={toSend.email}
                      onChange={handleChange}
                      required
                    />
                  </Col>
                  <Col size={12} sm={6} className="px-1">
                    <input
                      type="tel"
                      placeholder="No. de Telefone (Opcional)"
                      name="phone"
                      value={toSend.phone}
                      onChange={handleChange}
                    />
                  </Col>
                  <Col size={12} className="px-1">
                    <textarea
                      rows="6"
                      placeholder="Mensagem"
                      name="message"
                      value={toSend.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <div id="status">
                      <motion.button type="submit" whileHover={{ scale: 1.05 }}>
                        <span>{buttonText}</span>
                      </motion.button>
                      <p>{result}</p>
                    </div>
                  </Col>
                </Row>
              </form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
});

