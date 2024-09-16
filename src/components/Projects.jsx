import { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  Image,
  Collapse,
  Button,
  ListGroup,
} from "react-bootstrap";

const Projects = () => {
  const [showProject1, setShowProject1] = useState(false);
  const [showProject2, setShowProject2] = useState(false);
  const [showProject3, setShowProject3] = useState(false);

  return (
    <>
      <Container className="mt-5" id="projects">
        <h1>Projects</h1>
        <Row md={4}>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Makers 64</Card.Title>
                <Image src={"/Makers64.png"} fluid className="border"></Image>
                <Card.Text>Browser based games website.</Card.Text>
                <Button onClick={() => setShowProject1(!showProject1)}>
                  {showProject1 ? "Less Info" : "More Info"}
                </Button>
                <Collapse in={showProject1}>
                  <div>
                    <Card.Text className="mt-3">
                      Makers 64 is a fullstack application written made with the
                      MERN stack. The site features multiple games to play and
                      social media features such as messaging and friends. The
                      design was inspired by Nintendo and Miniclip for a true
                      nostalgic retro feel. The site was deployed on Render.
                    </Card.Text>
                    <h6>Technologies Used:</h6>
                    <ListGroup variant="flush">
                      <ListGroup.Item>React</ListGroup.Item>
                      <ListGroup.Item>Material UI</ListGroup.Item>
                      <ListGroup.Item>Express</ListGroup.Item>
                      <ListGroup.Item>MongoDB</ListGroup.Item>
                    </ListGroup>
                    <Card.Link
                      href="https://pacmern-frontend.onrender.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Depolyed site
                    </Card.Link>
                    <Card.Link
                      href="https://github.com/wsdalex/PacMERN"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Card.Link>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Acebook</Card.Title>
                <Image src={"/Acebook.png"} fluid className="border"></Image>
                <Card.Text>Social media website.</Card.Text>
                <Button onClick={() => setShowProject2(!showProject2)}>
                  {showProject2 ? "Less Info" : "More Info"}
                </Button>
                <Collapse in={showProject2}>
                  <div>
                    <Card.Text className="mt-3">
                      Acebook is fullstack application clone of Facebook made
                      with the MERN stack. The site contains most of the
                      features of Facebook. Users can create posts and view them
                      on a feed where they can like and comment on them. The
                      user can add and view their friends. Acebook also uses
                      token based authentication for secure sessions.
                    </Card.Text>
                    <h6>Technologies Used:</h6>
                    <ListGroup variant="flush">
                      <ListGroup.Item>React</ListGroup.Item>
                      <ListGroup.Item>Bootstrap</ListGroup.Item>
                      <ListGroup.Item>Express</ListGroup.Item>
                      <ListGroup.Item>MongoDB</ListGroup.Item>
                    </ListGroup>

                    <Card.Link
                      href="https://github.com/rokesby/acebook-team-water"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Card.Link>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card>
              <Card.Body>
                <Card.Title>Makers BnB</Card.Title>
                <Image src={"/MakersBnB.png"} fluid className="border"></Image>
                <Card.Text>Poperty rental website.</Card.Text>
                <Button onClick={() => setShowProject3(!showProject3)}>
                  {showProject3 ? "Less Info" : "More Info"}
                </Button>
                <Collapse in={showProject3}>
                  <div>
                    <Card.Text className="mt-3">
                      Makers BnB is a holiday letting website made with Flask
                      and PostgreSQL. The fully featured site allows users to
                      search and book properties while also listing their own.
                    </Card.Text>
                    <h6>Technologies Used:</h6>
                    <ListGroup variant="flush">
                      <ListGroup.Item>Python</ListGroup.Item>
                      <ListGroup.Item>Flask</ListGroup.Item>
                      <ListGroup.Item>PostgreSQL</ListGroup.Item>
                    </ListGroup>

                    <Card.Link
                      href="https://github.com/QS-Coding/makersbnb-python-seed"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View on GitHub
                    </Card.Link>
                  </div>
                </Collapse>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Projects;
