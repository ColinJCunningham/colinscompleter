import React from "react";
import "../../Assets/atkinson.ttf";

import { Row, Container, Navbar, Nav } from "react-bootstrap/";
import { Link } from "react-router-dom";

import logo from "../../Assets/goal.png";

import "../Header/header.css";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#242a57", padding: "1.4rem", width:"100%" }}
        variant="dark"
      >
        <Container style={{ marginLeft: "0.3rem" }}>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand
              style={{
                fontFamily: "Copperplate",
                fontSize: "2rem",
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
          <Navbar.Toggle
            style={{ margin: "0 auto" }}
            aria-controls="basic-navbar-nav"
          />
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
