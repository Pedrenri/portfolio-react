import React from "react";
import { Col, Carousel } from "react-bootstrap";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  carouselImages,
  hrefURL,
  githubURL,
}) => {
  return (
    <Col size={12} sm={12} md={12}>
      <div className="flex flex-col mt-10 lg:flex-row">
        <div className="proj-imgbx">
          <Carousel className="proj-carousel">
            {carouselImages.map((carouselItem, index) => (
              <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={carouselItem}
                    alt={`Slide ${index + 1}`}
                  />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
        <div className="proj-description">
          <h4>{title}</h4>
          <p>{description}</p>
          <div className="proj-links">
            {hrefURL && (
              <a href={hrefURL} target="_blank" rel="noopener noreferrer">
                Ver Projeto
              </a>
            )}
            {githubURL && (
              <a href={githubURL} target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="" className="github-icon" />
                Ver no GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
