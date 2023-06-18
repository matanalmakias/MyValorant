import React from "react";
import { coacherList, content, serverConfig } from "../../utils/content";
import { Col, Container, Row } from "react-bootstrap";
import "./style/testimonials.scss";
import { ImQuotesRight } from "react-icons/im";
import { AiTwotoneStar } from "react-icons/ai";
const Testimonials = () => {
  return (
    <div className="testimonials d-flex align-items-center">
      <div className="testimonials-overlay" />
      <Container fluid>
        <h2 className="heading2 text-white text-center">
          {serverConfig.testimonials.title} <AiTwotoneStar />
        </h2>
        <Row className="testimonials-row">
          {serverConfig.testimonials.items.map((item) => (
            <Col className="testimonials-item" key={item.id}>
              <div className="testimonials-quote-icon">
                <ImQuotesRight size={30} />
              </div>
              <p className="testimonials-name">{item.name}</p>
              <p className="testimonials-text">{item.text}</p>
              <p className="testimonials-rank">{item.rank}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Testimonials;
