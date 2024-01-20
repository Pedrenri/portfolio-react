import React, { useState } from "react";
import { Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";

export const ProjectCard = ({ title, description, imgUrl, Car1, Car2, Car3, hrefURL }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div onClick={handleShow} className="proj-imgbx">
          <img src={imgUrl} alt='project' />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Body>
            <Carousel>
              {[Car1, Car2, Car3].map((carouselItem, index) => (
                <Carousel.Item key={index}>
                  <a className="carousel-item-img" href={hrefURL}>
                    <img className="d-block w-100" src={carouselItem} alt={`Slide ${index + 1}`} />
                  </a>
                </Carousel.Item>
              ))}
            </Carousel>
          </Modal.Body>
        </Modal>
      </Col>
    </>
  );
};