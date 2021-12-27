import React from "react";

import {
  Row,
  Container,
  ListGroup,
  Col,
  Button,
  Card,
  CardGroup,
  Placeholder,
} from "react-bootstrap/";
import "../Home/home.css";
import { Link } from "react-router-dom";
import "../../Assets/Poppins.ttf";
import desk from "../../Assets/desk.jpg";
import hands from "../../Assets/hands.jpg";

function Home() {
  return (
    <div
      style={{
        fontFamily: "Poppins",
        width: "100%",
        paddingTop: "5%",
        maxHeight: "100%",
        paddingBottom:"2rem"
      }}
    >
      <div
        style={{
          textAlign: "center",
          fontStyle: "italic",
          marginBottom: "3rem",
          backgroundColor: "transparent",
          padding: "1rem",
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
        <h4 id="sh" style={{ textAlign: "center", paddingLeft: "10px" }}>
          Your 401(k){" "}
          <em
            style={{
              fontSize: "2rem",
              color: "#d01137",
              textDecoration: "underline",
            }}
          >
            Made Simple
          </em>
        </h4>
      </div>

      <div
        style={{
          marginRight: "auto",
          marginLeft: "auto",
          width: "40%",
          textAlign: "center",
        }}
      >
        <Link to="/start">
          <Button
            size="lg"
            style={{
              padding: "10px",

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
      <Container id="changethisone">
        <Row>
          <div style={{ padding: "4rem", margin: "1rem", marginTop: "3rem" }}>
            <CardGroup>
              <Card
                id="card1"
                style={{ backgroundColor: "#242a57", color: "#fbf5f3" }}
              >
                <Card.Body style={{ width: "70%" }}>
                  <Card.Title style={{ fontSize: "2rem", textAlign: "left" }}>
                    Why are these forms so complicated?
                  </Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This card has even longer
                    content than the first to show that equal height action.
                  </Card.Text>
                  <Card.Img variant="bottom" id="img" src={desk} />
                </Card.Body>
                <div id="low-divider">I</div>
              </Card>
              <div id="mid-divider">I</div>
              <Col>
                <Card
                  id="card"
                  style={{
                    textAlign: "right",
                    margin: "1.5rem",
                    border: "none",
                    textAlign: "right",
                    height: "auto",
                    paddingTop: "15%",
                    color: "#fbf5f3",
                  }}
                >
                  <div
                    id="high-divider"
                    style={{
                      color: "transparent",
                      borderStyle: "solid",
                      borderWidth: "2px",
                      borderColor: "black",
                      height: "8px",
                      marginTop: "2rem",
                      marginBottom: "2rem",
                      borderRadius: "1rem",
                      width: "100%",
                    }}
                  >
                    I
                  </div>

                  <div
                    style={{
                      backgroundColor: "#bfd1e5",
                      padding: "1rem",
                      color: "#242a57",
                    }}
                  >
                    <Card.Body>
                      <Card.Img variant="top" id="img1" src={hands} />
                      <Card.Title
                        style={{ fontSize: "2rem", textAlign: "right" }}
                      >
                        What we do to help
                      </Card.Title>
                      <Card.Text
                        style={{ fontSize: "1rem", textAlign: "right" }}
                      >
                        This application simplifies your choices, and desent
                        prompt you to answer questions that are not relevant.
                        Along with that it ensures you dont fill out an
                        "out-dated" or incorrect form for the request you are
                        making. It is almost like we are over your shoulder
                        letting you know exactly what needs to be done!
                      </Card.Text>
                    </Card.Body>
                  </div>
                </Card>
              </Col>
            </CardGroup>
          </div>
        </Row>
        <Row id="butt">
          <Container id="buttconn">
            <Row style={{ textAlign: "center", padding: "1rem" }}>
              <h4>Rather talk to someone in person?</h4>
              <h8>
                Please call us at 856-396-0499, or send an questions you may
                have to clientservcies@retirewelltpa.com
              </h8>
            </Row>
          </Container>
        </Row>
      </Container>
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
