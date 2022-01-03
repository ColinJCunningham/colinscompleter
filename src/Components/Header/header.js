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
        style={{ backgroundColor: "#94bbd3ad", width: "100%", color:"#12113A", }}
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
            style={{ margin: "0 auto", width: "100%" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse className="justify-content-end">
            <Nav.Link style={{ color: "#12113A" }} href="#home">
              Contact
            </Nav.Link>
            <Nav.Link style={{ color: "#12113A" }} href="#link">
              Privacy
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
