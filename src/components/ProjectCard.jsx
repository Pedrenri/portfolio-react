import { Col } from "react-bootstrap";
import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";


export const ProjectCard = ({
  title,
  description,
  imgUrl,
  Car1,
  Car2,
  Car3,
  hrefURL,
}) => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <>
      <Col size={12} sm={6} md={4}>
        <div onClick={handleShow} className="proj-imgbx" >
          <img src={imgUrl} alt='project' />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
        </div>

        <Modal
          show={show}
          onHide={handleClose}
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
        >
          <Modal.Body>
            <Carousel>
              <Carousel.Item>
                <a className="carousel-item-img" href={hrefURL}>
                  <img
                    className="d-block w-100"
                    src={Car1}
                    alt="First slide"
                    
                  />
                </a>
              </Carousel.Item>

              <Carousel.Item>
                <a className="carousel-item-img" href={hrefURL}>
                  <img
                    className="d-block w-100"
                    src={Car2}
                    alt="Second slide"
                  />
                </a>
              </Carousel.Item>
              <Carousel.Item>
                <a className="carousel-item-img" href={hrefURL}>
                  <img
                    className="d-block w-100"
                    src={Car3}
                    alt="Third slide"
                  />
                </a>
              </Carousel.Item>
            </Carousel>
          </Modal.Body>
        </Modal>
      </Col>
    </>
  );
};
