import React, { useEffect, useState } from "react";
import {
  Container,
  Accordion,
  Row,
  Col,
  Card,
  ListGroup,
  Image,
  Fade,
} from "react-bootstrap";
import {
  BriefcaseFill,
  GlobeEuropeAfrica,
  PeopleFill,
} from "react-bootstrap-icons";

const Skills = () => {
  const [show, setShow] = useState(false);
  useEffect;
  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 500); // Delay for fade-in effect
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Fade in={show}>
        <Container className="mt-5 section" id="skills">
          <h1>Skills</h1>
          <Row>
            <Col md={6}>
              <h3>Technical Skills</h3>
              <Accordion className="shadow-lg" defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Front-End</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex justify-content-center flex-wrap">
                      <Image
                        src="/react.svg"
                        alt="React"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/nextjs-icon.svg"
                        alt="NextJS"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/tailwindcss-icon.svg"
                        alt="Tail Wind CSS"
                        style={{ width: "50px", height: "50px" }}
                      />

                      <Image
                        src="/bootstrap.svg"
                        alt="Bootstrap"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                  <Accordion.Header>Back-End</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex justify-content-center flex-wrap">
                      <Image
                        src="/express.svg"
                        alt="Express"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/flask.svg"
                        alt="Flask"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/django-icon.svg"
                        alt="Django"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/postgresql.svg"
                        alt="PostgreSQL"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/mongodb-icon.svg"
                        alt="MongoDB"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                  <Accordion.Header>Languages</Accordion.Header>
                  <Accordion.Body>
                    <div className="d-flex justify-content-center flex-wrap">
                      <Image
                        src="/nodejs-icon.svg"
                        alt="Node JS"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/python.svg"
                        alt="Python"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/c-sharp.svg"
                        alt="C#"
                        style={{ width: "50px", height: "50px" }}
                      />
                      <Image
                        src="/swift.svg"
                        alt="Swift"
                        style={{ width: "50px", height: "50px" }}
                      />
                    </div>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </Col>
            <Col md={6}>
              <h3>Soft Skills</h3>
              <Card className="shadow-lg">
                <Card.Body>
                  <ul className="list-unstyled">
                    <li className="mb-1">
                      <PeopleFill className="me-2" />I pride myself in my social
                      skills. I often find myself able to comfortably adapt to
                      new teams and new environments.
                    </li>
                    <li className="mb-1">
                      <BriefcaseFill className="me-2" />
                      Having worked in a broad set of industries, I enjoy
                      throwing myself in the deep end and learning quickly about
                      new work practices.
                    </li>
                    <li className="mb-1">
                      <GlobeEuropeAfrica className="me-2" />I have a strong
                      moral attitude towards my work. I want my work to have a
                      positive impact on the world and people I work with.
                    </li>
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Container>
      </Fade>
    </>
  );
};

export default Skills;
