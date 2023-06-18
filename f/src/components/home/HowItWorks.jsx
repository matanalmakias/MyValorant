import React from "react";
import { coacherList, content } from "../../utils/content";
import { Col, Container, Row } from "react-bootstrap";
import "./style/how-it-works.scss";
const HowItWorks = () => {
  const steps = content.howItWorks.steps;

  return (
    <div className="how-it-works d-flex flex-column justify-content-center text-center align-items-center w-100">
      <h2 className="heading2 text-white">How It Works</h2>
      <Row className="bg3 flex-column w-100 align-items-center justify-content-center text-center">
        {steps.map((step, index) => (
          <Col className="how-it-works-step d-flex m-1" key={index}>
            <div className="how-it-works-step-icon w-50">{step.name}</div>
            <p className="how-it-works-step-text w-100 bg6 p-1 text-white">
              {step.text}
            </p>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default HowItWorks;
