import React, { useState } from "react";
import { coacherList, content } from "../../utils/content";
import { Col, Container, Form, Row } from "react-bootstrap";
import { GrContact } from "react-icons/gr";
import { IoShareSocialOutline } from "react-icons/io5";
import "./style/contact.scss";
const Contact = () => {
  const [nameInput, setNameInput] = useState();
  const [descInput, setDescInput] = useState();
  const [emailInput, setEmailInput] = useState();
  const { items, title, social, socialTitle } = content.contact;

  return (
    <div className="contact d-flex flex-column justify-content-center text-center align-items-center w-100">
      <h2 className="heading2 text-white">
        {title} <GrContact className="contact-icon" alt="Contact Icon" />
      </h2>
      <Row className="w-100 d-flex align-items-center justify-content-center text-center p-3">
        {items?.map((item, index) => (
          <Col sm key={index}>
            <p className="contact-title">{item.title}</p>
            <p className="contact-text">{item.text}</p>
          </Col>
        ))}
        <Row className="social-links justify-content-center text-center align-items-center">
          <p className="social-title">
            {socialTitle.toUpperCase()} <IoShareSocialOutline size={45} />
          </p>
          <div className="d-flex">
            {social?.map((item, index) => (
              <Col className="m-2" sm key={index}>
                <a className="social-link" href={item.link}>
                  {item.title}
                </a>
              </Col>
            ))}
          </div>
        </Row>
        <Form className="d-flex w-100 gap-2 m-1">
          <div className="row w-100">
            <div className="col">
              <input
                type="text"
                required
                className="form-control p-1 m-1 form-text"
                placeholder="Enter your name"
                onChange={(e) => setNameInput(e.target.value)}
              />
            </div>
            <div className="col">
              <input
                className="form-control p-1 m-1 form-text"
                type="email"
                required
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Enter your email"
              />
            </div>
            <textarea
              className="form-control p-1 m-1 form-text"
              required
              placeholder="Enter contact letter"
              onChange={(e) => setDescInput(e.target.value)}
            />
            <button type="submit" className="p-1 m-1 form-control form-text">
              Send
            </button>
          </div>
        </Form>
      </Row>
    </div>
  );
};

export default Contact;
