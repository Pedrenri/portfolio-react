import React from "react";
import { Col } from "react-bootstrap";
import Curriculo from "../assets/pdf/Currículo - Pedro Henri.pdf";
import { motion } from "framer-motion";

export const Curriculum = () => {
  return (
    <Col lg={12} className="">
      <motion.div
        initial={{ y: 90, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="newsletter-bx flex flex-col md:flex-row py-4 gap-y-4 align-items-center justify-content-around"
      >
        <h3>Baixe meu currículo!</h3>

        <div className="new-email-bx">
          <motion.a href={Curriculo} download="Curriculo" whileHover={{ scale: 1.05 }}>
            Download
          </motion.a>
        </div>
      </motion.div>
    </Col>
  );
};