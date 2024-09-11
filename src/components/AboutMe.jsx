import React from "react";
import { Col, Image, Row } from "react-bootstrap";
import Container from "react-bootstrap/Container";
const imageLink =
  "https://media.licdn.com/dms/image/v2/C4D03AQHCLKga9HLpuw/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1594725670496?e=1731542400&v=beta&t=o6z8OSNKt4XscdHMPGWRCo_p7DtcPvfY5m9pHZ20o6g";
const AboutMe = () => {
  return (
    <>
      <Container className="mt-5">
        <Row>
          <Col md={4}>
            <Image
              src={imageLink}
              roundedCircle
              fluid
              style={{ maxWidth: "300px" }}
            />
          </Col>

          <Col md={8} className="text-start mt-5">
            <h2>Hi I'm William Alexander!</h2>
            <p>
              I am an ambitious software developer based in the London area.
              Having recently graduated Maker Academy, I am a strong programmer
              with a foundation in TDD and OOP. I am keen to embrace new
              technologies and always drive myself to learn more. My work
              experience has lead me to multiple industries including Film and
              Graphic Design. All of which have served me well when adapting to
              new roles. My goal is to grow as a developer and always deliver
              high quality work reliably.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutMe;
