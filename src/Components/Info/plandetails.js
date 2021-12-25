import React, { useState } from "react";
import masterlist from "../../Data/Planlist";
import { Row, Container, Button } from "react-bootstrap/";

import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import "../../Assets/Poppins.ttf";

function Getplan() {
  const [plandata, setPlandata] = useState([{ tpa: "", vendor: "" }]);
  return (
    <Container
      style={{
        padding: "4%",
        fontFamily: "Poppins",
        marginTop: "2%",
        width: "50%",
      }}
    >
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
        <Row style={{ marginTop: "15%" }}>
          <div className="d-grid gap-2" style={{ fontSize: "4rem" }}>
            <Button
              onClick={console.log(plandata)}
              variant="secondary"
              size="md"
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
  );
}

export default Getplan;
