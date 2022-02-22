import React from "react";

import {
  Row,
  Container,
  Button,
  Card,
  Image,
  Col,
  ButtonGroup,
} from "react-bootstrap/";
import "../Home/home.css";
import { Link } from "react-router-dom";
import "../../Assets/Poppins.ttf";
import portaltran from "../../Assets/portaltran.png";

import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import Email from "@mui/icons-material/Email";
import Format from "@mui/icons-material/FormatListNumberedRtlOutlined";

const header = {
  borderBottomStyle: "solid",
  borderBottomWidth: 4,
  marginBottom: "3%",
  paddingLeft: 0,
  color: "#01172F",
  marginTop: "10%",
};

function Home() {
  return (
    <>
      <Row
        style={{
          fontFamily: "Poppins",
          width: "100%",
          paddingTop: "1%",
          maxHeight: "100%",
          paddingBottom: "2rem",
          padding: "3%",
        }}
      >
        <Col sm="12" lg="6">
          <Container
            style={{
              textAlign: "center",
              width: "100%",
              borderRadius: "1rem",
            }}
          >
            <Image fluid src={portaltran} />
          </Container>
        </Col>
        <Col sm="12" lg="6" style={{ borderRadius: "1rem", paddingTop: "5%" }}>
          <Card style={{ backgroundColor: "#CBDEF6", margin: "0 auto" }}>
            <Card.Body>
              <Card.Title
                style={{
                  textAlign: "Center",
                  fontSize: "1.5rem",
                  backgroundColor: "#091C34",
                  padding: "2%",
                  borderRadius: "1rem",
                  color: "white",
                }}
              >
                Project Inspiration
              </Card.Title>
              <Card.Text
                style={{
                  paddingTop: "1rem",
                  color: "#091C34",
                }}
              >
                Created as a demo for my current employer to show how we can
                drastically change the way we interface with our clients. This
                website would guide 401(k) particpants through complicated
                financial documents in order to streamline the process.
              </Card.Text>
              <Card.Text
                style={{
                  borderTopStyle: "solid",
                  borderTopWidth: 4,
                  paddingTop: "1rem",
                  color: "#091C34",
                }}
              >
                I consider this project to be "in progress" but this demo shows
                my ability to take real world problems and seek innovative
                soultions through modern web applications.{" "}
              </Card.Text>
              <div style={{ textAlign: "center" }}>
                <Card.Link>
                  <Link to="/start">
                    <Button
                      size="md"
                      style={{
                        padding: "10px",
                        borderColor: "#f1f4e4",
                        backgroundColor: "#091C34",
                        margin: "1rem",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontSize: "1rem",
                        }}
                      >
                        Single Form
                      </span>
                    </Button>
                  </Link>
                </Card.Link>
                <Card.Link style={{ marginLeft: "0.000001rem" }}>
                  <Link to="/multi">
                    <Button
                      size="md"
                      style={{
                        padding: "10px",
                        borderColor: "#f1f4e4",
                        backgroundColor: "#091C34",
                        margin: "1rem",
                      }}
                    >
                      <span
                        style={{
                          color: "white",
                          fontSize: "1rem",
                        }}
                      >
                        Multiple Download
                      </span>
                    </Button>
                  </Link>
                </Card.Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Home;

{
  /* <ul style={{ marginLeft: "5%" }}>
<li>Distributions</li>
<li>Withdrawls</li>
<li>Loans</li>
<li>Plan Information</li>
<li>And More!</li>
</ul> */
}
