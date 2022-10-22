import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import { motion } from 'framer-motion'
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Spline from '@splinetool/react-spline';

// ..
AOS.init();


let Result = "";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Enviar");
  const [toReset, setToRes] = useState({
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

  const formSubmit = (e) => {
    e.preventDefault();
    setButtonText("Enviando...");

    emailjs
      .send("service_8jxbx9x", "template_xlxhazk", toSend, "ysp9nvzNcXa5v9dqh")
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        setButtonText("Enviar");
        setToSend(toReset);
        Result = 'Mensagem enviada!'
      })
      .catch((err) => {
        console.log("FAILED...", err);
        Result = 'Algo deu errado. Tente novamente mais tarde.'
      });
  };

  const handleChange = (e) => {
    setToSend({ ...toSend, [e.target.name]: e.target.value });
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6} className='d-flex justify-content-center '>
            <Spline className="spline" scene="https://prod.spline.design/zPAY4mT7EzNNgRJf/scene.splinecode" />
          </Col>

          <Col size={12} md={6}>
            <div data-aos="fade-down" >
              <h2>Entre em contato</h2>
              <form data-aos="fade-down"  onSubmit={formSubmit}>
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
                      placeholder="Endereço de Email"
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
                      <button type="submit">
                        <span>{buttonText}</span>
                      </button>
                      <p>{Result}</p>
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
};
