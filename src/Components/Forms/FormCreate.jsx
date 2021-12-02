// --- Form Creation --- //
import React, { useState } from "react";
// --- NPM Imports --- //
import { PDFDownloadLink } from "@react-pdf/renderer";
import Moment from "moment";
import Addautocomplete from "react-google-autocomplete";
// --- CMS Imports --- //
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
// --- Component/Data Imports --- //
import { PdfDocument } from "./Lincoln_Director/LincolnDirector";
import masterlist from "../../Data/Planlist";
import reasons from "../../Data/dists";
import {
  Row,
  Container,
  Col,
  InputGroup,
  FormControl,
  Form,
  Button,
} from "react-bootstrap/";
// --- Api Key --- //
const key = process.env.REACT_APP_API_KEY;

export default function FormCreate() {
  //----- Form Inputs ----//
  const [index, setIndex] = useState(9);
  const [name, setName] = useState("Your Name Here"); // Particpant Name
  const [dob, setDob] = useState("10/21/1996"); // Date of Birth
  const [doi, setDoi] = useState(""); // Date of Incident
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]); // Plan Data Autocomplete

  const [homeAddress, setHomeaddress] = useState([
    { address: "", city: "city", state: "ST", zip: "12345" },
  ]);
  //----- Form Inputs ----//

  const [display, setDisplay] = useState("none");


  const data = [
    { dist: reasons[index].value},
    { name: name },
    { dob: Moment(dob).format("MM - DD - YYYY") },
    { data: planData },
    { address: homeAddress },
    { doi: Moment(doi).format("MM - DD - YYYY")},
    { date: reasons[index].yvalue}
  ];

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  return (
    <form>
      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "1%", marginBottom: 200, textAlign: "center" }}>
          <Container fluid>
            <Row>
              <Col style={{ padding: "2rem" }}>
                <Row>
                  <Form.Label className="label">Full Name</Form.Label>
                  <InputGroup
                    className="mb-3"
                    id="name"
                    onInput={(e) => setName(e.target.value)}
                    value={name}
                  >
                    <FormControl
                      placeholder="Your Name Here"
                      aria-label="Username"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Row>
                <Row style={{ width: "60%" }}>
                  <Form.Label className="label">Date of Birth</Form.Label>
                  <InputGroup
                    className="mb-3"
                    id="dob"
                    onInput={(e) => setDob(e.target.value)}
                    value={dob}
                  >
                    <FormControl
                      type="date"
                      placeholder=""
                      aria-label="DOB"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Row>
              </Col>
              {/* --- Address Input --- */}
              <Col
                style={{
                  fontSize: ".9rem",
                  marginTop: "2rem",
                  padding: "2rem",
                }}
              >
                <Row>
                  <Addautocomplete
                    style={{ padding: "10px" }}
                    apiKey={key}
                    onPlaceSelected={(place) => {
                      setHomeaddress({
                        address:
                          place.address_components[0].long_name +
                          " " +
                          place.address_components[1].long_name,
                        city: place.address_components[3].long_name,
                        state: place.address_components[5].short_name,
                        zip: place.address_components[7].short_name,
                      });
                    }}
                    options={{
                      types: ["address"],
                      componentRestrictions: { country: "us" },
                    }}
                    value={homeAddress.address}
                  />
                </Row>
                <Row style={{ padding: "10px", fontSize: 14 }}>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="City"
                      value={homeAddress.city}
                      onInput={(e) =>
                        setHomeaddress({
                          address: homeAddress.address,
                          city: e.target.value,
                          state: homeAddress.state,
                          zip: homeAddress.zip,
                        })
                      }
                    />
                    <Form.Control
                      type="text"
                      placeholder="State"
                      value={homeAddress.state}
                      onInput={(e) =>
                        setHomeaddress({
                          address: homeAddress.address,
                          city: homeAddress.city,
                          state: e.target.value,
                          zip: homeAddress.zip,
                        })
                      }
                      style={{ marginTop: "5px" }}
                    />
                  </Col>
                  <Col>
                    <Form.Control
                      type="text"
                      placeholder="Zip Code"
                      value={homeAddress.zip}
                      onInput={(e) =>
                        setHomeaddress({
                          address: homeAddress.address,
                          city: homeAddress.city,
                          state: homeAddress.state,
                          zip: e.target.value,
                        })
                      }
                    />
                  </Col>
                </Row>
              </Col>
              <Button onClick={(e) => setDisplay("")}>Next</Button>
              {/* Form Progression (new options added) */}
            </Row>
            <Row
              style={{
                fontSize: ".9rem",
                marginTop: "10%",
                display: `${display}`,
              }}
            >
              <Col style={{ width: "100%" }} >
                <select
                  id="DisType"
                  className="select"
                  value={reasons.value}
                  onChange={(e) => setIndex(e.target.value)}
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
                    return <option value={index}>{reason.text}</option>;
                  })}
                </select>
                <Row style={{ width: "60%", display: `${reasons[index].date}` }}>
                  <Form.Label className="label">{reasons[index].label}</Form.Label>
                  <InputGroup
                    className="mb-3"
                    id="DOI"
                    onInput={(e) => setDoi(e.target.value)}
                    value={doi}
                  >
                    <FormControl
                      type="date"
                      placeholder=""
                      aria-label="DOI"
                      aria-describedby="basic-addon1"
                    />
                  </InputGroup>
                </Row>
              </Col>
              {/* Plan Data */}
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
        {/* ---- PDF DOWNLOAD ---- */}
        <PDFDownloadLink
          document={<PdfDocument data={data} />}
          fileName={planData.tpaID + " - " + name + " " + date + ".pdf"}
          style={{
            padding: "10px",
            color: "#4a4a4a",
            backgroundColor: "#f2f2f2",
            border: "1px solid #4a4a4a",
          }}
        >
          {({ blob, url, loading, error }) =>
            loading ? "Download Pdf" : "Download Pdf"
          }
        </PDFDownloadLink>
      </div>
    </form>
  );
}
