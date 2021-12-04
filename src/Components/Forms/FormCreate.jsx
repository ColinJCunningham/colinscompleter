// --- Form Creation --- //
import React, { useState, useRef } from "react";
// --- NPM Imports --- //
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useForm, Controller } from "react-hook-form";
import Moment from "moment";
import Addautocomplete from "react-google-autocomplete";
// --- CMS Imports --- //
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import NumberFormat from "react-number-format";
import "../../Assets/App.css";
// --- Component/Data Imports --- //
import { PdfDocument } from "./Lincoln_Director/LincolnDirector";
import masterlist from "../../Data/Planlist";
import reasons from "../../Data/dists";
import {
  Row,
  Container,
  Col,
  Button,
  FormControl,
  InputGroup,
  Form,
} from "react-bootstrap/";

// --- Api Key --- //
const key = process.env.REACT_APP_API_KEY;

export default function FormCreate() {
  const {
    register,
    handleSubmit,
    control,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) =>
    setData({
      dist: reasons[index].value,
      name: data.name,
      dob: Moment(data.dob).format("MM - DD - YYYY"),
      data: planData,
      address: homeAddress,
      doi: Moment(data.doi).format("MM - DD - YYYY"),
      date: reasons[index].yvalue,
      ssn: data.ssn,
      doh: Moment(data.doh).format("MM - DD - YYYY"),
    });

  const [data, setData] = useState([
    {
      dist: "",
      name: "",
      dob: "",
      data: "",
      address: "",
      doi: "",
      date: "",
      ssn: "",
      doh: "",
    },
  ]);

  //----- Form Inputs ----//
  const [index, setIndex] = useState(9);
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]); // Plan Data Autocomplete
  const [homeAddress, setHomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);

  const [curinput, setCurinput] = "";
  //----- Form Inputs ----//

  const [display, setDisplay] = useState("");

  const inputStyle = {
    color: "black",
    padding: "2%",
    paddingLeft: "4%",
    fontSize: "1.2rem",
    textAlign: "justify",
    fontFamily: "webfont",
    marginBottom: "2%",
  };

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  return (
    <div>
      {/* ---- PDF DOWNLOAD ---- */}

      <div style={{ textAlign: "center" }}>
        <div style={{ margin: "1%", marginBottom: 200, textAlign: "center" }}>
          <PDFDownloadLink
            document={<PdfDocument data={data} />}
            fileName={planData.tpaID + " - " + data.name + " " + date + ".pdf"}
            style={{
              fontFamily: "webfont",
              fontWeight: "800",
              position: "fixed",
              right: "4%",
              padding: ".5%",
              borderRadius: "5px",
              color: "#4a4a4a",
              backgroundColor: "#f2f2f2",
              border: "1px solid #4a4a4a",
              fontSize: "1.2rem",
            }}
          >
            {({ blob, url, loading, error }) =>
              loading ? "Download PDF" : "Download PDF"
            }
          </PDFDownloadLink>
          <Container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row>
                <h1
                  onClick={console.log("hello", data)}
                  style={{ marginTop: "3%", textAlign: "left" }}
                >
                  Personal Information
                </h1>
                <Col md style={{ padding: "4rem" }}>
                  <Row>
                    <Form.Label className="label">Name</Form.Label>
                    <input
                      style={inputStyle}
                      defaultValue=""
                      {...register("name")}
                    />
                  </Row>
                  <Row>
                    <Form.Label className="label">Date of Birth</Form.Label>
                    <input
                      style={inputStyle}
                      type="date"
                      defaultValue=""
                      {...register("Date of Birth")}
                    />
                  </Row>
                  <Row>
                    <Form.Label className="label">
                      Social Security Number
                    </Form.Label>
                    <Controller
                      control={control}
                      name="ssn"
                      render={({ field: { onChange, name, value } }) => (
                        <NumberFormat
                          format="### ## ####"
                          name={name}
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </Row>
                </Col>
                {/* --- Address Input --- */}
                <Col
                  md
                  style={{
                    marginTop: "4rem",
                    padding: "2rem",
                  }}
                >
                  <Row>
                    <Addautocomplete
                      style={{ ...inputStyle, ...{ marginBottom: "5%" } }}
                      apiKey={key}
                      onPlaceSelected={(place) => {
                        setHomeaddress({
                          address:
                            place.address_components[0].long_name +
                            " " +
                            place.address_components[1].long_name,
                          city: place.address_components[3].long_name,
                          state: place.address_components[5].short_name,
                          zip: place.address_components[7].long_name,
                        });
                      }}
                      options={{
                        types: ["address"],
                        componentRestrictions: { country: "us" },
                      }}
                    />
                    <Row>
                      <input
                        style={{ ...inputStyle, ...{ width: "100%" } }}
                        type="text"
                        placeholder={
                          homeAddress.address ? homeAddress.address : "Address"
                        }
                        onInput={(e) =>
                          setHomeaddress({
                            address: e.target.value,
                            city: homeAddress.city,
                            state: homeAddress.state,
                            zip: homeAddress.zip,
                          })
                        }
                      />
                    </Row>
                  </Row>
                  <Row>
                    <Form.Control
                      style={{ ...inputStyle, ...{ width: "70%" } }}
                      type="text"
                      placeholder={homeAddress.city ? homeAddress.city : "City"}
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
                      style={{ ...inputStyle, ...{ width: "70%" } }}
                      type="text"
                      placeholder={
                        homeAddress.state ? homeAddress.state : "State"
                      }
                      onInput={(e) =>
                        setHomeaddress({
                          address: homeAddress.address,
                          city: homeAddress.city,
                          state: e.target.value,
                          zip: homeAddress.zip,
                        })
                      }
                    />

                    <Form.Control
                      style={{ ...inputStyle, ...{ width: "50%" } }}
                      type="text"
                      placeholder={
                        homeAddress.zip ? homeAddress.zip : "Zip Code"
                      }
                      onInput={(e) =>
                        setHomeaddress({
                          address: homeAddress.address,
                          city: homeAddress.city,
                          state: homeAddress.state,
                          zip: e.target.value,
                        })
                      }
                    />
                  </Row>
                </Col>
              </Row>
              {/* -------------- (Form Progression (new options added) ------------------ */}
              <Row
                style={{
                  fontSize: ".9rem",
                  marginTop: "5%",
                  display: `${display}`,
                }}
              >
                {/* Plan Data */}
                <Col style={{ width: "100%" }}>
                  <Autocomplete
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
                <Col>
                  <Form.Label className="label">Date of Hire</Form.Label>
                  <input
                    style={inputStyle}
                    type="date"
                    defaultValue=""
                    {...register("DOH")}
                  />
                </Col>
              </Row>
              <Col style={{ width: "100%", marginTop: "100px" }}>
                <select
                  id="DisType"
                  className="select"
                  value={reasons.value}
                  onChange={(e) => setIndex(e.target.value)}
                  style={inputStyle}
                >
                  <option value={"Distribution due to Termination"}>
                    Select your Option
                  </option>
                  {reasons.map((reason, index) => {
                    return <option value={index}>{reason.text}</option>;
                  })}
                </select>
                <Row
                  style={{ width: "60%", display: `${reasons[index].date}` }}
                >
                  <Form.Label className="label">
                    {reasons[index].label}
                  </Form.Label>
                  <input
                    style={inputStyle}
                    type="date"
                    defaultValue=""
                    {...register("DOI")}
                  />
                </Row>
              </Col>
              <input
                style={{ width: "50%" }}
                onClick={(e) => setDisplay("none")}
                type="submit"
                placeholder="Next Section"
              />
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
}
