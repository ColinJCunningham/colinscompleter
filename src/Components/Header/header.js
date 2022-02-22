import React from "react";
import "../../Assets/atkinson.ttf";

import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap/";
import { Link } from "react-router-dom";

import logo from "../../Assets/goal.png";

import "./header.css";

function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        style={{ backgroundColor: "#0b2746", width: "100%", color: "#f2f4e5" }}
        variant="dark"
      >
        <Container>
          <Link style={{ textDecoration: "none" }} to="/">
            <Navbar.Brand>
              <img
                id="log"
                alt="rwlogo"
                src={logo}
                width="15%"
                height="15%"
                className="d-inline-block align-top"
              />
              <span
                id="navtext"
                style={{
                  float: "right",
                  marginRight: "10%",
                  marginTop: "10px",
                }}
              >
                PDF Project Demo
              </span>
            </Navbar.Brand>
          </Link>
          <Navbar.Toggle
            style={{ width: "100%" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse style={{ color: "black" }}>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.colinjamescunningham.com", "_blank");
              }}
              style={{ color: "white" }}
              href="#home"
            >
              Code
            </Nav.Link>
            <Nav.Link
              onClick={(e) => {
                e.preventDefault();
                window.open("https://www.colinjamescunningham.com", "_blank");
              }}
              style={{ color: "white" }}
              href="#link"
            >
              Portfolio
            </Nav.Link>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
