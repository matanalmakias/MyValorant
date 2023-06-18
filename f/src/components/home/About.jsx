import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FcAbout } from "react-icons/fc";
import { GiMuscleUp } from "react-icons/gi";
import { BsArrowRightShort } from "react-icons/bs";
import { content } from "../../utils/content";

const About = () => {
  const aboutTitle = content.about.heading;
  const aboutText = content.about.text;

  return (
    <div className="justify-content-center flex-column d-flex w-100 text-white about">
      <div className="div-2">
        <Container fluid>
          <Row className="gap-2">
            <Col sm className="bg1 border1 p-5">
              <div className="heading2">
                {aboutTitle}
                <FcAbout />
              </div>
              <div className="overview-text">{aboutText}</div>
            </Col>
            <Col sm className="bg1 border1 p-4">
              <div className="heading2">
                {content.coachServices.heading} <GiMuscleUp />
              </div>
              <div className="overview-text">
                <Row className="gap-2">
                  {content.coachServices.items?.map((item, index) => (
                    <Col sm className="d-flex flex-column bg2" key={index}>
                      <span className="heading3 p-2 bg-dark w-100">
                        <BsArrowRightShort />
                        {item.title}
                      </span>
                      <span className="service-text bg4 text-black p-1 rounded">
                        {item.text}
                      </span>
                    </Col>
                  ))}
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default About;
