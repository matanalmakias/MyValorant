import React from "react";
import { coacherList, content } from "../../utils/content";
import { Col, Container, Row } from "react-bootstrap";
import "./style/meet-the-coach.scss";
import { useNavigate } from "react-router-dom";

const MeetTheCoaches = () => {
  const { title, showMoreBtnText } = content.meetTheCoaches;
  const nav = useNavigate();

  return (
    <div className="justify-content-center flex-column d-flex w-100 text-white meet-the-coach">
      <Container fluid>
        <Row className="gap-2">
          <Col sm className="bg5">
            <div className="d-flex flex-column">
              <span className="heading2 text-white">{title}</span>
              <Row className="gap-1 p-1">
                {coacherList?.slice(0, 3).map((item, index) => (
                  <Col className="bg3 d-flex flex-column p-3" key={index}>
                    <span className="h5">
                      {index + 1} | {item.name}
                    </span>
                    <span>{item.desc}</span>
                  </Col>
                ))}
              </Row>
              <span
                onClick={() => nav(`${import.meta.env.BASE_URL}coach`)}
                className="btn2"
              >
                {showMoreBtnText}
              </span>
            </div>
          </Col>
          <Col sm className="bg3">
            <div className="d-flex flex-column">
              <span className="heading2 bg1 text-white">
                {content.becomeAcoach.buttonText}
              </span>
              <span className="become-a-coach-text bg1">
                {content.becomeAcoach.becomeAcoachText}
              </span>
              <button
                onClick={() => nav(`${import.meta.env.BASE_URL}become-a-coach`)}
                className="btn1 mt-4"
              >
                {content.becomeAcoach.buttonText}
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MeetTheCoaches;
