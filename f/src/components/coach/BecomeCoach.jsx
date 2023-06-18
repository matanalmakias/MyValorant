import React, { useState } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Row, Col, Form, Button } from "react-bootstrap";
import BackBtn from "../btns/BackBtn";
import { content } from "../../utils/content";
import Loader1 from "../loaders/Loader1";

const BecomeCoach = () => {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulating a loading state for 2 seconds
    setTimeout(() => {
      // Logic for handling form submission and becoming a coach
      // You can implement your own logic here
      console.log("Form submitted. User wants to become a coach.");
      // Redirect to a success/thank you page
      navigate("/become-coach/success");
    }, 2000);
  };
  const { page } = content.becomeAcoach;
  return (
    <div className="become-coach-container card p-3">
      {isLoading ? (
        <Loader1 />
      ) : (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <BackBtn />
          <h2>{page.title}</h2>

          <p>{page.title}</p>

          <p>{page.form.title}</p>

          <Form onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="name">
                <Form.Label>{page.form.name.text}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={page.form.name.placeHolder}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="email">
                <Form.Label>{page.form.email.text}</Form.Label>
                <Form.Control
                  type="email"
                  placeholder={page.form.email.placeHolder}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="phone">
                <Form.Label>{page.form.phone.text}</Form.Label>
                <Form.Control
                  type="text"
                  placeholder={page.form.phone.placeHolder}
                  required
                />
              </Form.Group>
            </Row>

            <Row className="mb-3">
              <Form.Group as={Col} controlId="message">
                <Form.Label>{page.form.msg.text}</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder={page.form.msg.placeHolder}
                  required
                />
              </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
              {page.form.submitText}
            </Button>
          </Form>
        </motion.div>
      )}
    </div>
  );
};

export default BecomeCoach;
