import React from "react";

import {
  Row,
  Container,
  ListGroup,
  Col,
  Button,
  Card,
  CardGroup,
} from "react-bootstrap/";
import "../Home/home.css";
import { Link } from "react-router-dom";
import "../../Assets/Poppins.ttf";
import desk from "../../Assets/desk.jpg";
import hands from "../../Assets/hands.jpg";
import dude from "../../Assets/dude.jpg";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        width: "100%",
        paddingTop: "5%",
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "3rem",
          backgroundColor: "#fbf5f3",
          padding: "1rem",
          // borderBottomWidth: "3px",
          // borderBottomColor: "black",
          // borderBottomStyle: "solid",
        }}
      >
        <h1
          style={{
            color: "#242a57",
            marginBottom: "2rem",
            padding: ".5rem",
            fontWeight: "900",
          }}
        >
          [Cool Name For App Here]
        </h1>
        <h3 id="sh" style={{ textAlign: "center", paddingLeft: "10px" }}>
          401(k) Transactions Made Simple
        </h3>
      </div>
      <Row>
        <div className="d-grid gap-2">
          <Link
            style={{ marginRight: "auto", marginLeft: "auto", width: "70%" }}
            to="/start"
          >
            <Button
              size="lg"
              style={{
                padding: "10px",
                width: "100%",

                backgroundColor: "#242a57",
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
      </Row>
      <Row style={{ padding: "1rem", margin: "1rem", marginTop: "3rem" }}>
        <Container>
          <CardGroup>
            <Card id="card">
              <Card.Body>
                <Card.Img variant="bottom" id="img" src={desk} />
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This card has even longer
                  content than the first to show that equal height action.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card id="card">
              <Card.Img variant="top" id="img1" src={hands} />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This card has supporting text below as a natural lead-in to
                  additional content.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
        </Container>
      </Row>
      <Row id="butt">
        <Container id="buttconn">
          <Row style={{ textAlign: "center", padding: "1rem" }}>
            <h4>Rather talk to someone in person?</h4>
            <h8>
              Please call us at 856-396-0499, or send an questions you may have
              to clientservcies@retirewelltpa.com
            </h8>
          </Row>
        </Container>
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
