import React, { useState, useEffect, useRef } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import masterlist from "../../Data/Planlist";
import {
  Row,
  Container,
  Button,
  Alert,
  Col,
  Placeholder,
  ButtonGroup,
} from "react-bootstrap/";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Chip from "@mui/material/Chip";

import "../../Assets/Poppins.ttf";
import "../Info/plandetails.css";

function Getplan() {
  let navigate = useNavigate();
  let [error, setError] = React.useState(null);
  const [plandata, setPlandata] = useState(null);
  const [display, setDisplay] = useState("none");
  const [next, setNext] = useState("none");
  const [type, setType] = useState("");
  const [tdata, setTdata] = useState("");
  const [next1, setNext1] = useState("none");

  function handleEvent() {
    if (plandata === null) {
      return () => setDisplay("block");
    } else {
      return () => setNext("block");
    }
  }

  function handleNav() {
    console.log(plandata);

    // const nav = `${"/" + plandata.tpaID + "/" + plandata.vendor}`;

    // navigate("/form" + nav);
  }

  const buttonStyle = {
    textAlign: "left",
    fontSize: "1.5rem",
    textTransform: "none",
    fontWeight: "700",
    marginTop: "2%",
    marginBottom: "2%",
    paddingLeft: "2%",
    paddingRight: "2%",
    backgroundColor: "#4e5e88",
    color: "#f2f4e5",
  };

  return (
    <Container
      id="con1"
      style={{
        padding: "2%",
        fontFamily: "Poppins",
        maxHeight: "100%",
      }}
    >
      <Container style={{ width: "70%" }}>
        <Row style={{ textAlign: "left" }}>
          <h1>Lets start with telling us what retirement plan you are in</h1>
          <p style={{ marginTop: "5px" }}>
            Or in other words who is your current/former employer?
          </p>
        </Row>
        <Row>
          <Autocomplete
            style={{ paddingLeft: "0", marginTop: "4%" }}
            id="plan-list"
            options={masterlist}
            onChange={(event, value) =>
              value === null
                ? console.log("error")
                : setPlandata({
                    vendor: value.vendor,
                    tpaID: value.TPAID,
                  })
            }
            sx={{ width: "100%" }}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Plan Name"
                style={{
                  backgroundColor: "#DBE9EE",
                  borderRadius: "5px",
                }}
              />
            )}
          />
          <Alert
            style={{ marginTop: "2rem", display: `${display}` }}
            variant="danger"
          >
            No plan has been selected, please select your plan before continuing
          </Alert>
          <Row style={{ marginTop: "10%" }}>
            <div className="d-grid gap-2" style={{ fontSize: "4rem" }}>
              <Button
                variant="secondary"
                size="md"
                onClick={handleEvent()}
                style={{ fontSize: "1.4rem", backgroundColor: "#092746" }}
              >
                Next
              </Button>
            </div>
          </Row>
          <Row
            style={{ marginTop: "10%", textAlign: "center", fontSize: "1rem" }}
          >
            <Link to="/">
              <h4 style={{ fontSize: "1rem", color: "#092746" }}>
                Cant find your plan? Click here!
              </h4>
            </Link>
          </Row>
        </Row>
      </Container>
      <Container>
        <Row style={{ marginTop: "2%", fontSize:"auto", display:`${next}` }}>
          <Chip
            style={{ width: "20%", marginLeft: "40%" }}
            icon={<ArrowDownwardIcon />}
            label="Scroll down"
          />
        </Row>
        <Row>
          <Placeholder
            bg="secondary"
            style={{ marginBottom: "2%", marginTop: "3%" }}
            xs={12}
            size="xs"
          />
        </Row>
      </Container>

      <Container
        style={{
          textAlign: "left",
          marginTop: "5%",
          display: `${next}`,
          width: "100%",
        }}
      >
        <Row>
          <Row
            style={{
              width: "100%",
              color: "#2d3047",
              marginBottom: "3%",
              paddingLeft: "15%",
            }}
          >
            <div>
              <h1>I would like to...</h1>
              <p>Something missing? Make sure to reach out to us!</p>
            </div>
          </Row>
          <Row style={{ marginBottom: "4rem" }}>
            <ButtonGroup className="btn-group">
              <Button
                onClick={(e) => {
                  setType("dist");
                  setTdata("Take a Distribution");
                  setNext("none");
                  setNext1("inline");
                }}
                id="btn"
                style={{ ...buttonStyle, ...{} }}
              >
                Take a Distribution
              </Button>
              <Button
                onClick={(e) => {
                  setType("loan");
                  setTdata("Request a Loan");
                  setNext("none");
                  setNext1("inline");
                }}
                id="btn"
                style={{
                  ...buttonStyle,
                  ...{},
                }}
              >
                Request a Loan
              </Button>
              <Button
                onClick={(e) => {
                  setType("data");
                  setTdata("View Plan Data");
                  setNext("none");
                  setNext1("inline");
                }}
                id="btn"
                style={{ ...buttonStyle, ...{} }}
              >
                View Plan Data
              </Button>
              <Button
                onClick={(e) => {
                  setType("cont");
                  setTdata("Contact Us");
                  setNext("none");
                  setNext1("inline");
                }}
                value="contact"
                id="btn"
                style={{
                  ...buttonStyle,
                  ...{},
                }}
              >
                Contact Us
              </Button>
            </ButtonGroup>
          </Row>
        </Row>
      </Container>
      <Container style={{ margin: "0 auto", display: `${next1}` }}>
        <Row>
          <h4>Selected:</h4>
          <Button
            disabled
            style={{
              fontSize: "1.4rem",
              backgroundColor: "#94bbd3",
              marginBottom: "5%",
              width: "33%",
              color: "#1f2a47",
              marginLeft: "1rem",
            }}
          >
            {tdata}
          </Button>
        </Row>
        <Row>
          <Button
            size="lg"
            onClick={() => console.log(type)}
            style={{ fontSize: "1.4rem", backgroundColor: "#092746" }}
          >
            Next
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Getplan;
