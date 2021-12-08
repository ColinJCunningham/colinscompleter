// --- Form Creation --- //
import React, { useState } from "react";
// --- Images & Icons --- //
import confused from "../../Assets/Confused.jpg";
import question from "../../Assets/qmark.png";
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
import "../..//Assets/AtkinsonHyperlegible-Regular.ttf";
// --- Component/Data Imports --- //
import { PdfDocument } from "./Lincoln_Director/LincolnDirector";
import masterlist from "../../Data/Planlist";
import reasons from "../../Data/dists";
import options from "../../Data/withdrawlopt";
import RMD from "../../Data/RMD";
import {
  Row,
  Container,
  Col,
  Button,
  Image,
  Form,
  Card,
  Alert,
  ListGroup,
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
      dob: data.dob,
      data: planData,
      address: homeAddress,
      doi: data.doi,
      date: reasons[index].yvalue,
      ssn: data.ssn,
      doh: data.doh,
      accNum: data.accNum,
      bDob: data.bDob,
      bname: data.bname,
      baddress: bhomeAddress,
      bssn: data.bssn,
      relate: data.relate,
      share: data.share,
      rmdcalc: calc,
    });
  // Moment(data.bDob).format("MM - DD - YYYY")
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
      accNum: "",
      bname: "",
      bDob: "",
      baddress: "",
      bssn: "",
      relate: "",
      share: "",
      rmdcalc: "",
    },
  ]);

  //----- Form Inputs ----//
  const [index, setIndex] = useState(9);
  const [oindex, setOindex] = useState(0);
  const [aindex, setAindex] = useState(0);
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]); // Plan Data Autocomplete
  const [homeAddress, setHomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);

  const [bhomeAddress, setBhomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);

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

  const sinputStyle = {
    color: "black",
    paddingLeft: "4%",
    fontSize: "1rem",
    textAlign: "justify",
    fontFamily: "webfont",
    marginBottom: "5px",
  };

  const header = {
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    marginBottom: "3%",
    paddingLeft: 0,
    color: "#01172F",
    marginTop: "2%",
  };

  const right = {
    direction: "rtl",
    unicodeBidi: "bidi-override",
  };

  const [show, setShow] = useState("none");

  const current = new Date();

  const watchAge = watch(["dob"]);

  const curAge = Moment(watchAge).diff({ watchAge }, "years", true);

  const [accbal, setAccbal] = useState("");

  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  const num = +accbal.replace(/,/g, "");

  const calc = Math.round((num / RMD[aindex].factor) * 100) / 100;

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* ---- PDF DOWNLOAD ---- */}

      <button onClick={console.log(calc)}> h </button>

      <div style={{}}>
        <div style={{ margin: "1%", marginBottom: 200 }}>
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
          <Container
            style={{ fontFamily: "webfont", color: "#01172F", height: "100%" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row
                style={{
                  marginTop: "2%",
                  paddingTop: "3%",
                  paddingBottom: "3%",
                }}
              >
                <h1 style={header}>
                  Let start by telling us a little bit about yourself...
                </h1>
                <Col
                  md
                  style={{
                    padding: "1.5rem",
                    height: "29rem",
                  }}
                >
                  <Row>
                    <h5>Name</h5>
                    <input
                      style={{ ...inputStyle, ...{ width: "80%" } }}
                      defaultValue=""
                      {...register("name")}
                    />
                  </Row>
                  <Row>
                    <h5>
                      Social Security Number{" "}
                      <span>
                        <Image
                          style={{
                            width: "20px",
                            paddingBottom: "4px",
                            marginLeft: "4px",
                          }}
                          src={question}
                          roundedCircle
                        />
                      </span>
                    </h5>
                    <Controller
                      control={control}
                      name="ssn"
                      render={({ field: { onChange, name, value } }) => (
                        <NumberFormat
                          style={{ ...inputStyle, ...{ width: "60%" } }}
                          format="### - ## - ####"
                          name={name}
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </Row>
                  <Row>
                    <h5>Date of Birth</h5>
                    <input
                      style={{ ...inputStyle, ...{ width: "40%" } }}
                      type="date"
                      defaultValue="12/31/1999"
                      {...register("dob")}
                    />
                  </Row>
                </Col>
                {/* --- Address Input --- */}
                <Col
                  md
                  style={{
                    padding: "1.5rem 1.5rem 1.5rem 2rem",
                    backgroundColor: "#01172F",
                    height: "29rem",
                  }}
                >
                  <Row>
                    <h5
                      style={{
                        textAlign: "left",
                        fontSize: "1.2rem",
                        color: "whitesmoke",
                      }}
                    >
                      Try our Auto-Complete Feature!
                    </h5>
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
                    <h5
                      style={{
                        textAlign: "left",
                        fontSize: "1.2rem",
                        color: "whitesmoke",
                      }}
                    >
                      Or just type it in yourself!
                    </h5>
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
              <h1 style={header}>Plan Information/Employment Status</h1>
              <Row
                style={{
                  fontSize: ".9rem",
                  marginTop: "5%",
                  display: `${display}`,
                }}
              >
                {/* Plan Data */}
                <Col md style={{ width: "100%" }}>
                  <Row>
                    <h5>Plan Name</h5>
                    <Autocomplete
                      style={{ paddingLeft: "0" }}
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
                  </Row>
                  <Row style={{ marginTop: "3%" }}>
                    <h5>
                      Account Number of Current 401(k)
                      <span>
                        <Image
                          style={{
                            width: "20px",
                            paddingBottom: "4px",
                            marginLeft: "4px",
                          }}
                          src={question}
                          roundedCircle
                        />
                      </span>
                    </h5>
                    <Controller
                      control={control}
                      name="accNum"
                      render={({ field: { onChange, name, value } }) => (
                        <NumberFormat
                          style={{ ...inputStyle, ...{ width: "60%" } }}
                          isNumericString
                          name={name}
                          value={value}
                          onChange={onChange}
                        />
                      )}
                    />
                  </Row>
                  <Row style={{ marginTop: "1%" }}>
                    <h5>Date of Hire</h5>
                    <input
                      style={{ ...inputStyle, ...{ width: "40%" } }}
                      type="date"
                      defaultValue=""
                      {...register("doh")}
                    />
                  </Row>
                </Col>
                <Col md>
                  <Card
                    style={{
                      marginLeft: "10%",
                      width: "80%",
                      marginTop: "15px",
                    }}
                  >
                    <Card.Img variant="top" src={confused} />
                    <Card.Body>
                      <Card.Title>Not Quite Sure?</Card.Title>
                      <Card.Text>
                        If you're not sure of something check your online
                        account, reach out to your employer, or just leave it
                        blank! We will work with you to gather any information
                        you may be confused about!
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              </Row>
              <h1 style={header}>Type of Distribution</h1>
              <Row style={{ paddingLeft: "0" }}>
                <Col md style={{ width: "100%", marginTop: "50px" }}>
                  <select
                    id="DisType"
                    className="select"
                    value={reasons.value}
                    onChange={(e) => setIndex(e.target.value)}
                    style={{
                      ...inputStyle,
                      ...{
                        paddingTop: "1%",
                        paddingBottom: "1%",
                        paddingRight: "1%",
                        width: "80%",
                      },
                    }}
                  >
                    <option value={index}></option>
                    {reasons.map((reason, index) => {
                      return <option value={index}>{reason.text}</option>;
                    })}
                  </select>
                  <Row
                    style={{
                      width: "70",
                      display: `${reasons[index].date}`,
                      marginLeft: "5%",
                    }}
                  >
                    <h5 style={{ fontSize: "1rem", marginBottom: "0" }}>
                      {reasons[index].label}
                    </h5>
                    <input
                      style={{ ...inputStyle, ...{ marginTop: "2%" } }}
                      type="date"
                      defaultValue=""
                      {...register("doi")}
                    />
                  </Row>
                </Col>
                <Col>
                  {(() => {
                    switch (reasons[index].value) {
                      case "489":
                        return (
                          <Alert>
                            <Col
                              md
                              style={{
                                padding: "1.5rem",
                              }}
                            >
                              <h3>
                                {" "}
                                <em>
                                  In order to process this request we will need
                                  a copy of the Original Death Certificate
                                </em>
                              </h3>
                              <h3>
                                {" "}
                                Beneficary or Alternate Payee Information
                              </h3>
                              <h5 style={{ fontSize: "14px" }}>
                                If multiple, you will need a form for each one,
                                so after you complete this one commplete another
                                one
                              </h5>
                              <Row>
                                <h5>Relationship</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "80%" },
                                  }}
                                  defaultValue=""
                                  {...register("relate")}
                                />
                              </Row>
                              <Row>
                                <h5>Share</h5>
                                <Controller
                                  control={control}
                                  name="share"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        ...sinputStyle,
                                        ...{ width: "60%" },
                                      }}
                                      format="###%"
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </Row>
                              <Row>
                                <h5>Name</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "80%" },
                                  }}
                                  defaultValue=""
                                  {...register("bname")}
                                />
                              </Row>
                              <Row>
                                <h5>
                                  Social Security Number{" "}
                                  <span>
                                    <Image
                                      style={{
                                        width: "20px",
                                        paddingBottom: "4px",
                                        marginLeft: "4px",
                                      }}
                                      src={question}
                                      roundedCircle
                                    />
                                  </span>
                                </h5>
                                <Controller
                                  control={control}
                                  name="bssn"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        ...sinputStyle,
                                        ...{ width: "60%" },
                                      }}
                                      format="### - ## - ####"
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </Row>
                              <Row>
                                <h5>Date of Birth</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "40%" },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("bDob")}
                                />
                              </Row>
                              <Row>
                                <h5
                                  style={{
                                    textAlign: "left",
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  Try our Auto-Complete Feature!
                                </h5>
                                <Addautocomplete
                                  style={{
                                    ...sinputStyle,
                                    ...{ marginBottom: "5px" },
                                  }}
                                  apiKey={key}
                                  onPlaceSelected={(place) => {
                                    setBhomeaddress({
                                      address:
                                        place.address_components[0].long_name +
                                        " " +
                                        place.address_components[1].long_name,
                                      city: place.address_components[3]
                                        .long_name,
                                      state:
                                        place.address_components[5].short_name,
                                      zip: place.address_components[7]
                                        .long_name,
                                    });
                                  }}
                                  options={{
                                    types: ["address"],
                                    componentRestrictions: { country: "us" },
                                  }}
                                />
                                <h5
                                  style={{
                                    textAlign: "left",
                                    fontSize: "1.2rem",
                                  }}
                                >
                                  Or just type it in yourself!
                                </h5>
                                <Row>
                                  <input
                                    style={{
                                      ...sinputStyle,
                                      ...{ width: "100%" },
                                    }}
                                    type="text"
                                    placeholder={
                                      bhomeAddress.address
                                        ? bhomeAddress.address
                                        : "Address"
                                    }
                                    onInput={(e) =>
                                      setBhomeaddress({
                                        address: e.target.value,
                                        city: bhomeAddress.city,
                                        state: bhomeAddress.state,
                                        zip: bhomeAddress.zip,
                                      })
                                    }
                                  />
                                </Row>
                              </Row>
                              <Row>
                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "70%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.city
                                      ? bhomeAddress.city
                                      : "City"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: e.target.value,
                                      state: bhomeAddress.state,
                                      zip: bhomeAddress.zip,
                                    })
                                  }
                                />
                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "70%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.state
                                      ? bhomeAddress.state
                                      : "State"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: bhomeAddress.city,
                                      state: e.target.value,
                                      zip: bhomeAddress.zip,
                                    })
                                  }
                                />

                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "50%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.zip
                                      ? bhomeAddress.zip
                                      : "Zip Code"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: bhomeAddress.city,
                                      state: bhomeAddress.state,
                                      zip: e.target.value,
                                    })
                                  }
                                />
                              </Row>
                            </Col>
                          </Alert>
                        );
                      case "626.5":
                        return (
                          <Alert>
                            <Col
                              md
                              style={{
                                padding: "1.5rem",
                              }}
                            >
                              <h2>
                                {" "}
                                Beneficary or Alternate Payee Information
                              </h2>
                              <h5 style={{ fontSize: "14px" }}>
                                If multiple, you will need a form for each one,
                                so after you complete this one commplete another
                                one
                              </h5>
                              <Row>
                                <h5>Relationship</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "80%" },
                                  }}
                                  defaultValue=""
                                  {...register("relate")}
                                />
                              </Row>
                              <Row>
                                <h5>Share</h5>
                                <Controller
                                  control={control}
                                  name="share"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        ...sinputStyle,
                                        ...{ width: "60%" },
                                      }}
                                      format="###%"
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </Row>
                              <Row>
                                <h5>Name</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "80%" },
                                  }}
                                  defaultValue=""
                                  {...register("bname")}
                                />
                              </Row>
                              <Row>
                                <h5>
                                  Social Security Number{" "}
                                  <span>
                                    <Image
                                      style={{
                                        width: "20px",
                                        paddingBottom: "4px",
                                        marginLeft: "4px",
                                      }}
                                      src={question}
                                      roundedCircle
                                    />
                                  </span>
                                </h5>
                                <Controller
                                  control={control}
                                  name="bssn"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        ...sinputStyle,
                                        ...{ width: "60%" },
                                      }}
                                      format="### - ## - ####"
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </Row>
                              <Row>
                                <h5>Date of Birth</h5>
                                <input
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "40%" },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("bDob")}
                                />
                              </Row>
                              <Row>
                                <h5
                                  style={{
                                    textAlign: "left",
                                    fontSize: "1.2rem",
                                    color: "whitesmoke",
                                  }}
                                >
                                  Try our Auto-Complete Feature!
                                </h5>
                                <Addautocomplete
                                  style={{
                                    ...sinputStyle,
                                    ...{ marginBottom: "5px" },
                                  }}
                                  apiKey={key}
                                  onPlaceSelected={(place) => {
                                    setBhomeaddress({
                                      address:
                                        place.address_components[0].long_name +
                                        " " +
                                        place.address_components[1].long_name,
                                      city: place.address_components[3]
                                        .long_name,
                                      state:
                                        place.address_components[5].short_name,
                                      zip: place.address_components[7]
                                        .long_name,
                                    });
                                  }}
                                  options={{
                                    types: ["address"],
                                    componentRestrictions: { country: "us" },
                                  }}
                                />
                                <h5
                                  style={{
                                    textAlign: "left",
                                    fontSize: "1.2rem",
                                    color: "whitesmoke",
                                  }}
                                >
                                  Or just type it in yourself!
                                </h5>
                                <Row>
                                  <input
                                    style={{
                                      ...sinputStyle,
                                      ...{ width: "100%" },
                                    }}
                                    type="text"
                                    placeholder={
                                      bhomeAddress.address
                                        ? bhomeAddress.address
                                        : "Address"
                                    }
                                    onInput={(e) =>
                                      setBhomeaddress({
                                        address: e.target.value,
                                        city: bhomeAddress.city,
                                        state: bhomeAddress.state,
                                        zip: bhomeAddress.zip,
                                      })
                                    }
                                  />
                                </Row>
                              </Row>
                              <Row>
                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "70%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.city
                                      ? bhomeAddress.city
                                      : "City"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: e.target.value,
                                      state: bhomeAddress.state,
                                      zip: bhomeAddress.zip,
                                    })
                                  }
                                />
                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "70%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.state
                                      ? bhomeAddress.state
                                      : "State"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: bhomeAddress.city,
                                      state: e.target.value,
                                      zip: bhomeAddress.zip,
                                    })
                                  }
                                />

                                <Form.Control
                                  style={{
                                    ...sinputStyle,
                                    ...{ width: "50%" },
                                  }}
                                  type="text"
                                  placeholder={
                                    bhomeAddress.zip
                                      ? bhomeAddress.zip
                                      : "Zip Code"
                                  }
                                  onInput={(e) =>
                                    setBhomeaddress({
                                      address: bhomeAddress.address,
                                      city: bhomeAddress.city,
                                      state: bhomeAddress.state,
                                      zip: e.target.value,
                                    })
                                  }
                                />
                              </Row>
                            </Col>
                          </Alert>
                        );

                      case "430":
                        return (
                          <Col
                            style={{
                              marginLeft: "30px",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <Alert.Heading>
                                Can you check something for me?
                              </Alert.Heading>
                              <p>
                                Please ensure that you submit your form{" "}
                                <em>after</em> your final contribution date
                                (final payroll date), to avoid any residual
                                monies being deposited into your account!
                              </p>
                            </Alert>
                          </Col>
                        );
                      case "447":
                        return (
                          <Col
                            style={{
                              marginLeft: "30px",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <Alert.Heading>
                                Can you check something for me?
                              </Alert.Heading>
                              <p>
                                Please ensure that you submit your form{" "}
                                <em>after</em> your final contribution date
                                (final payroll date), to avoid any residual
                                monies being deposited into your account!
                              </p>
                            </Alert>
                          </Col>
                        );

                      case "462":
                        return (
                          <Col
                            style={{
                              marginLeft: "30px",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <Alert.Heading>
                                You will need to provide your social security
                                award letter with your form upon submisson to
                                RetireWell.
                              </Alert.Heading>
                              <p style={{ textAlign: "center" }}>
                                What's that?{" "}
                                <a
                                  href="https://www.ssa.gov/myaccount/proof-of-benefits.html"
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  Click here to learn more
                                </a>
                              </p>
                            </Alert>
                          </Col>
                        );

                      case "525":
                        return (
                          <Col
                            style={{
                              marginLeft: "30px",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <h4>Did you know?</h4>
                              <p>
                                Most plans do not allow for in-service
                                distributions under the age of 59
                                <span style={{ fontSize: "10px" }}>
                                  1/2
                                </span>{" "}
                                years old, other than from Rollover Sources?
                              </p>
                              <p>
                                You may want to look into othe options for
                                withdrawing from your 401(k), click here to
                                learn more
                              </p>
                            </Alert>
                          </Col>
                        );

                      case "550":
                        return (
                          <Col>
                            {curAge > -59.5 && (
                              <Alert variant="danger">
                                Based on your Date of Birth you are not over the
                                age of 59 1/2 years old!
                              </Alert>
                            )}
                          </Col>
                        );

                      case "575":
                        return (
                          <Col
                            style={{
                              marginLeft: "30px",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <Alert.Heading>
                                Important Information!
                              </Alert.Heading>
                              <p>
                                Taking a hardship withdrawl requires additonal
                                documentation, please ensure the documentation
                                lists the amount needed as well as the reason.
                              </p>
                              <p>
                                Please see what qualifies for a "hardship"
                                below, or read more: 
                                <a
                                  href="https://www.irs.gov/retirement-plans/plan-participant-employee/retirement-topics-hardship-distributions"
                                  target="_blank"
                                  rel="noreferrer noopener"
                                >
                                  Here
                                </a>
                              </p>
                              <ListGroup style={{fontSize:"1.2rem"}}>
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Medical care expenses for the employee, the
                                  employee’s spouse, dependents or beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Costs directly related to the purchase of an
                                  employee’s principal residence (excluding
                                  mortgage payments).
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Tuition, related educational fees and room and
                                  board expenses for the next 12 months of
                                  postsecondary education for the employee or
                                  the employee’s spouse, children, dependents or
                                  beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Payments necessary to prevent the eviction of
                                  the employee from the employee’s principal
                                  residence or foreclosure on the mortgage on
                                  that residence.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Funeral expenses for the employee, the
                                  employee’s spouse, children, dependents, or
                                  beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item style={{backgroundColor: "transparent"}}>
                                  Certain expenses to repair damage to the
                                  employee’s principal residence.
                                </ListGroup.Item>
                              </ListGroup>
                            </Alert>
                          </Col>
                        );
                      case "601":
                        return (
                          <Col>
                            <h3>Calculate your RMD here!</h3>
                            <Row>
                              <Col lg>
                                <Row>
                                  <label>Age as of 12/31/2021</label>
                                  <br />
                                  <select
                                    id="rmd"
                                    className="select"
                                    value={RMD.value}
                                    onChange={(e) => setAindex(e.target.value)}
                                    style={{
                                      ...inputStyle,
                                      ...{ width: "45%" },
                                    }}
                                  >
                                    {RMD.map((rmd, index) => {
                                      return (
                                        <option value={index}>{rmd.age}</option>
                                      );
                                    })}
                                  </select>
                                </Row>
                                <Row>
                                  <label>
                                    Account Balance as of <em>12/31/2020</em>
                                  </label>
                                  <br />
                                  <NumberFormat
                                    style={inputStyle}
                                    thousandsGroupStyle="thousand"
                                    value={2456981}
                                    decimalSeparator="."
                                    displayType="input"
                                    type="text"
                                    thousandSeparator={true}
                                    value={accbal}
                                    onChange={(e) => setAccbal(e.target.value)}
                                  />
                                </Row>
                              </Col>
                              <Col
                                md
                                style={{
                                  margin: "10%",
                                  backgroundColor: "#01172Faa",
                                  color: "whitesmoke",
                                  padding: "3%",
                                }}
                              >
                                <fieldset disabled>
                                  <input
                                    value={"$" + calc}
                                    {...register("rmdcalc")}
                                    placeholder={"$" + {calc}}
                                  />
                                </fieldset>
                              </Col>
                            </Row>
                          </Col>
                        );
                      default:
                        return <div></div>;
                    }
                  })()}
                </Col>
              </Row>
              <Col md style={{ width: "100%", marginTop: "50px" }}>
                <select
                  id="options"
                  className="select"
                  value={options.value}
                  onChange={(e) => setOindex(e.target.value)}
                  style={{ ...inputStyle, ...{ padding: "1%" } }}
                >
                  {options.map((option, index) => {
                    return <option value={index}>{option.text}</option>;
                  })}
                </select>
                <Row
                  style={{
                    width: "60%",
                    marginLeft: 0,
                    display: `${options[oindex].date}`,
                  }}
                >
                  <h5>{options[oindex].label}</h5>
                  <input
                    style={{ ...inputStyle, ...{ marginTop: "2%" } }}
                    type=""
                    defaultValue=""
                    {...register("wamount")}
                  />
                </Row>
              </Col>
              <input
                style={{ width: "50%" }}
                onClick={(e) => setDisplay("")}
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
