import React from "react";
import "../../Assets/atkinson.ttf";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";

import logo from "../../Assets/goal.png";

import "../Header/header.css";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#12113A", width: "100%", color: "#f2f4e5" }}
        variant="dark"
      >
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand>
              <img
                id="log"
                alt="rwlogo"
                src={logo}
                width="10%"
                height="10%"
                className="d-inline-block align-top"
                style={{ marginRight: "1rem" }}
              />
              <span id="navtext">RetireWell Administrators Inc.</span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            style={{ width: "50%" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse
            className="justify-content-end"
            style={{ color: "black" }}
          >
            <Nav.Link style={{ color: "#a5cde6" }} href="#home">
              Contact
            </Nav.Link>
            <Nav.Link style={{ color: "#a5cde6" }} href="#link">
              Privacy
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
