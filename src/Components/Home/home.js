import React from "react";

import { Row, Container, Button, Card, Image, Col } from "react-bootstrap/";
import "../Home/home.css";
import { Link } from "react-router-dom";
import "../../Assets/Poppins.ttf";
import portaltran from "../../Assets/portaltran.png";

import MdPhone from "@mui/icons-material/Phone";
import Chip from "@mui/material/Chip";
import Email from "@mui/icons-material/Email";
import Format from "@mui/icons-material/FormatListNumberedRtlOutlined";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        width: "100%",
        paddingTop: "5%",
        maxHeight: "100%",
        paddingBottom: "2rem",
        padding: "3%",
      }}
    >
      <Container
        style={{
          backgroundColor: "#12113A",
          padding: "1%",
          textAlign: "center",
          width: "90%",
          borderRadius: "1rem",
          marginTop: "3rem",
        }}
      >
        <Image fluid src={portaltran} />
      </Container>

      <div
        id="sdiv"
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          marginTop: "3%",
          width: "100%",
          textAlign: "center",
          padding: "3rem",
        }}
      >
        <Link to="/start">
          <Button
            size="lg"
            style={{
              padding: "10px",

              backgroundColor: "#AD160B",
            }}
          >
            <span
              style={{
                color: "#fbf5f3",
                fontSize: "1.5rem",
              }}
            >
              Click Here To Get Started!
            </span>
          </Button>
        </Link>
      </div>
      <Row style={{ marginTop: "5rem", marginBottom: "5rem" }}>
        <Card
          className="text-center"
          style={{ backgroundColor: "transparent", border: "none" }}
        >
          <Card.Header
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#12113A",
              color: "#fbf5f3",
              padding: "1%",
            }}
          >
            Why did my employer send me here?
          </Card.Header>
          <Card.Body
            style={{
              backgroundColor: "#4e5e88",
              color: "#fbf5f3",
              border: "4px double #fbf5f3",
              padding: "1rem",
            }}
          >
            <div>
              <Card.Title
                style={{
                  marginTop: "1rem",
                  borderBottom: "4px double #fbf5f3",
                  width: "fit-content",
                  margin: "0 auto",
                }}
              >
                Here's Why
              </Card.Title>
              <Row style={{ margin: "1rem" }}>
                <Col style={{ marginTop: "1rem" }} xs={12} lg={4}>
                  <Row>
                    <Card.Text>
                      With SmartForm you can strip away the confusion of
                      financial forms, and have our portal generate only what
                      you need to complete, while giving hints and tips along
                      the way!
                    </Card.Text>
                  </Row>
                </Col>
                <Col style={{ marginTop: "1rem" }} xs={12} lg={4}>
                  <Row>
                    <Card.Text>
                      Get up-to-date plan data: Review withdrawl eligibility,
                      Loan rules, and more!
                    </Card.Text>
                  </Row>
                </Col>
                <Col style={{ marginTop: "1rem" }} xs={12} lg={4}>
                  <Row>
                    <Card.Text>
                      Get in contact with a RetireWell distribution specialist,
                      who can help answer any questions you may have. Contact us
                      at the information listed below, between 8:30 AM - 5:00
                      PM.
                    </Card.Text>
                  </Row>
                </Col>
              </Row>
              <Row style={{ marginTop: "5%" }}>
                <a href="tel:8563960499">
                  <Chip
                    style={{
                      backgroundColor: "#fbf5f3",
                      width: "50%",
                      marginRight: "1%",
                    }}
                    icon={<MdPhone />}
                    label="Call Us; 856-396-0499"
                  />
                </a>
                <a
                  href="mailto: clientservices@retirewelltpa.com"
                  style={{ marginTop: "1%" }}
                >
                  <Chip
                    style={{ backgroundColor: "#fbf5f3", width: "50%" }}
                    icon={<Email />}
                    label="Email Us: Clientservices@retirewelltpa.com"
                  />
                </a>
              </Row>
            </div>
          </Card.Body>
        </Card>
      </Row>
    </div>
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
