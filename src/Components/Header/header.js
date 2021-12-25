import React from "react";
import "../..//Assets/AtkinsonHyperlegible-Regular.ttf";

import { Row, Container, Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

import logo from "../../Assets/goal.png";

import "../Header/header.css";

function Header() {
  return (
    <Navbar
      expand="lg"
      style={{ backgroundColor: "#242a57", padding: "1.4rem" }}
      variant="dark"
    >
      <Container style={{ marginLeft: "0.3rem" }}>
        <Link style={{ textDecoration: "none" }} to="/">
          <Navbar.Brand
            style={{
              fontFamily: "Copperplate",
              fontSize: "1rem",
            }}
          >
            <img
              alt="rwlogo"
              src={logo}
              width="40"
              height="40"
              className="d-inline-block align-top"
            />
            RetireWell Administrators Inc.
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle style={{margin: "0 auto"}} aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav style={{marginLeft:"70%"}} className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
