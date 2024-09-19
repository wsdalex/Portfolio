import { useState } from "react";
import { Col, Container, Row, Form, Button } from "react-bootstrap";
import { Github, Linkedin } from "react-bootstrap-icons";

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Container className="mt-5">
        <h1>Contact Me</h1>
        <Row>
          <Col xs={12} md={8} lg={6} className="mx-auto">
            <Form onSubmit={handleSubmit}>
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Please enter your name..."
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Please enter your email..."
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  type="text"
                  as="textarea"
                  name="message"
                  rows={4}
                  placeholder="Please enter a message..."
                  value={formData.message}
                  onChange={handleChange}
                />
              </Form.Group>
              <Button className="mt-3" type="submit" block="true">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>

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
      </Container>
    </>
  );
};

export default ContactMe;
