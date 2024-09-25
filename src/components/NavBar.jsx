import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
const NavBar = () => {
  return (
    <>
      <Navbar fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#home" className="wsdalex navbar-animation">
            WSDALEX
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#about-me" className="navbar-animation">
              About Me
            </Nav.Link>
            <Nav.Link href="#skills" className="navbar-animation">
              Skills
            </Nav.Link>
            <Nav.Link href="#projects" className="navbar-animation">
              Projects
            </Nav.Link>
            <Nav.Link href="#contact-me" className="navbar-animation">
              Contact Me
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavBar;
