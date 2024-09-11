import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">WSDALEX</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">About Me</Nav.Link>
            <Nav.Link href="#features">Skills</Nav.Link>
            <Nav.Link href="#pricing">Projects</Nav.Link>
            <Nav.Link href="#pricing">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
