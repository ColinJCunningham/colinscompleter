import React, { useState } from "react";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./Lincoln_Director/LincolnDirector";
import masterlist from "../../Data/Planlist";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import {
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap/";
import Moment from "moment";

export default function FormCreate() {
  
  
  
  
  //----- Form Inputs ----//
  const [dist, setDist] = useState(""); // Distribution Reason 
  const [name, setName] = useState("Your Name Here"); // Particpant Name 
  const [dob, setDob] = useState("10/21/1996"); // Date of Birth 
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]); // Plan Data Autocomplete
  //----- Form Inputs ----//


  const [display, setDisplay] = useState("none");

  const data = [
    { dist: dist },
    { name: name },
    { dob: Moment(dob).format("MM  DD   YYYY") },
    { data: planData },
  ];

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  const reasons = [
    { value: 430, text: "Termination of Employment" },
    { value: 447, text: "Retirement" },
    { value: 462, text: "Disability" },
    { value: 489, text: "Death Claim" },
    { value: 525, text: "In-Service (Under 59)" },
    { value: 550, text: "In-Service (Over 59)" },
    { value: 575, text: "Hardship" },
    { value: 601, text: "RMD" },
    { value: 626.5, text: "QDRO" },
    { value: 662, text: "Plan Term" },
  ];

  return (
    <form>
      <div style={{ textAlign: "center", margin: 10 }}>
        <div style={{ margin: "5%", marginBottom: 200, textAlign: "center" }}>
          <Container fluid>
            <Row>
              <Col>
                <h1> Tell us a bit about yourself </h1>
                <Row>
                  <Form.Label>Full Name</Form.Label>
                  <InputGroup
                    className="mb-3"
                    id="name"
                    onMouseOut={(e) => setName(e.target.value)}
                    value={name}
                  >
                    <FormControl
                      placeholder="Your Name Here"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Row>
                <Row>
                  <Col>
                    <InputGroup
                      className="mb-3"
                      id="dob"
                      onInput={(e) => setDob(e.target.value)}
                      value={dob}
                    >
                      <FormControl
                        type="date"
                        placeholder="Your Name Here"
                        aria-label="DOB"
                        aria-describedby="basic-addon1"
                      />
                    </InputGroup>
                  </Col>
                </Row>
                <Button onClick={setDisplay("")}>Next</Button> {/* Form Progression (new options added) */}
              </Col>
            </Row>
            <Row
              style={{
                fontSize: ".9rem",
                marginTop: "10%",
                display: `${display}`,
              }}
            >
              <Col style={{ width: "100%" }}>
                <select
                  id="DisType"
                  className="select"
                  value={reasons.value}
                  onChange={(e) => setDist(e.target.value)}
                  style={{
                    backgroundColor: "#DBE9EE",
                    width: "100%",
                    padding: "17px",
                    borderRadius: "5px",
                  }}
                >
                  <option value={"Distribution due to Termination"}>
                    Select your Option
                  </option>
                  {reasons.map((reason, index) => {
                    return (
                      <option key={index} value={reason.value}>
                        {reason.text}
                      </option>
                    );
                  })}
                </select>
              </Col>
              <Col style={{ width: "100%" }}>
                <Autocomplete
                  disablePortal
                  id="plan-list"
                  options={masterlist}
                  onChange={(event, value) =>
                    setPlanData({
                      planName: value.label,
                      planID: value.planID,
                      contract: value.contract_num,
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
                  s
                />
              </Col>
            </Row>
          </Container>
        </div>
        <div className="container">
          <PDFDownloadLink
            document={<PdfDocument data={data} />}
            fileName={planData.tpaID + " - " + name + " " + date + ".pdf"}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Download Pdf" : "Download Pdf"
            }
          </PDFDownloadLink>
        </div>
      </div>
    </form>
  );
}
