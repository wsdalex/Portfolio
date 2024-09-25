import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

const ContactMe = () => {
  return (
    <>
      <Container className="mt-5">
        <h1>Contact Me</h1>

        <Row className="d-flex justify-content-center mt-4">
          <Col md={6} className="text-center">
            <a
              href="https://www.linkedin.com/in/william-alexander-aba503185/"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-reset"
              style={{ fontSize: "3rem" }}
            >
              <Linkedin />
            </a>
            <a
              href="https://github.com/wsdalex"
              target="_blank"
              rel="noopener noreferrer"
              className="mx-2 text-reset"
              style={{ fontSize: "3rem" }}
            >
              <Github />
            </a>
          </Col>
        </Row>

        <Row className="d-flex justify-content-center mt-4">
          <Col md={6} className="text-center">
            <Button
              href="/William_Alexander_CV.pdf" // Replace this with the actual path to your CV
              download
              variant="primary"
              className="mt-3"
            >
              Download My CV
            </Button>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ContactMe;
