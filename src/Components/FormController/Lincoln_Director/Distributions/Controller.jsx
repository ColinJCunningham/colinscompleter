// --- Form Creation --- //
import React, { useState } from "react";
// --- Images & Icons --- //
import confused from "../../../../Assets/Confused.jpg";
import question from "../../../../Assets/qmark.png";
import dollas from "../../../../Assets/dolla.png";
import signhere from "../../../../Assets/Sign.png";
// --- NPM Imports --- //
import { useParams } from "react-router-dom";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { useForm, Controller } from "react-hook-form";
import Moment from "moment";
import Addautocomplete from "react-google-autocomplete";
import { Link } from "react-router-dom";
// --- CMS Imports --- //
import NumberFormat from "react-number-format";
import "../../../../Assets/atkinson.ttf";
import TextField from "@mui/material/TextField";
// --- Component/Data Imports --- //
import { PdfDocument } from "./LincolnDirector";
import masterlist from "../../../../Data/Planlist";
import reasons from "../../../../Data/dists";
import options from "../../../../Data/withdrawlopt";
import RMD from "../../../../Data/RMD";
import "./controller.css";
import {
  Row,
  Container,
  Col,
  Image,
  Form,
  Card,
  Alert,
  ListGroup,
  Button,
  Modal,
} from "react-bootstrap/";
// --- Api Key --- //
const key = process.env.REACT_APP_API_KEY;

export default function FormCreate() {
  // ------------------------------------- React-Hook-Form Register ------------------------------------- //
  const { register, handleSubmit, control, watch } = useForm();
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
      rmdcalc: calc === 0 ? "" : calc,
      wy: options[oindex].y,
      wx: options[oindex].x,
      partial: data.partial,
      rols: data.ro_ls,
      lsro: data.ls_ro,
      proll: data.prol,
      rmd: data.rmd,
      tax: data.tax,
      top: displays.top,
      left: displays.left,
      mtop: method.top,
      mleft: method.left,
      bankadd: data.bankadd,
      bankcity: data.bankcity,
      bankstate: data.bankstate,
      bankzip: data.bankzip,
      diracc: data.diracc,
      aba: data.aba,
      bankname: data.bankname,
      accnam: data.accname,
      rollcom: data.rollcom,
      rollacc: data.rollacc,
      rollrothacc: data.rollrothacc,
      rollad: data.rolladd,
      rollcity: data.rollcity,
      rollstate: data.rollstate,
      rollzip: data.rollzip,
      rollname: data.rollname,
      notes: data.notes,
    });
  // ------------------------------------- Form Data Submit ------------------------------------- //
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
      wy: "",
      wx: "",
      partial: "",
      rols: "",
      lsro: "",
      proll: "",
      rmd: "",
      tax: "",
      top: "",
      left: "",
      mtop: "",
      mleft: "",
      bankname: "",
      bankadd: "",
      bankcity: "",
      bankstate: "",
      bankzip: "",
      diracc: "",
      aba: "",
      accnam: "",
      rollcom: "",
      rollacc: "",
      rollrothacc: "",
      rollad: "",
      rollcity: "",
      rollstate: "",
      rollzip: "",
      rollname: "",
      notes: "",
    },
  ]);

  // ------------------------------------- Use Params, TPAID ------------------------------------- //
  const { tpaid } = useParams();

  const stuff = masterlist.find((list) => {
    return list.TPAID === tpaid;
  });

  // ------------------------------------- Form Inputs ------------------------------------- //
  const [index, setIndex] = useState(9);
  const [oindex, setOindex] = useState(8);
  const [aindex, setAindex] = useState(0);
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]);
  const [homeAddress, setHomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);

  const [bhomeAddress, setBhomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);

  const [method, setMethod] = useState([{ top: "", left: "", next: "none" }]);

  //----- Form Inputs ----//

  const [display, setDisplay] = useState("1");

  const [displays, setDisplays] = useState([{ top: "", left: "" }]);

  const [rothinput, setRothinput] = useState("none");

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
    marginTop: "10%",
  };

  const dolla = {
    backgroundImage: `url(${dollas})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "left",
    marginLeft: "3%",
    border: "none",
  };

  const [show, setShow] = useState("none");

  // --------- Modal ---------  //

  const [mshow, setMshow] = useState(false);

  const handleClose = () => setMshow(false);
  const handleShow = () => setMshow(true);

  const current = new Date();

  const watchAge = watch(["dob"]);

  const curAge = Moment(watchAge).diff({ watchAge }, "years", true);

  const [accbal, setAccbal] = useState("");

  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  const num = +accbal.replace(/,/g, "");

  const calc = Math.round((num / RMD[aindex].factor) * 100) / 100;

  const disable1 = display === "2" ? true : false;

  const disable2 = display === "3" ? true : false;

  const disable3 = display === "4" ? true : false;

  const disable4 = display === "5" ? true : false;

  const enteramount =
    oindex === "1" ? (
      <>
        <h4>Enter the Amount of your Distribution</h4>
        <Controller
          control={control}
          name="partial"
          render={({ field: { onChange, name, value } }) => (
            <NumberFormat
              style={{
                ...inputStyle,
                ...dolla,
                ...{
                  width: "70%",
                  paddingLeft: "2.5rem",
                },
              }}
              thousandsGroupStyle="thousand"
              name={name}
              value={value}
              decimalSeparator="."
              displayType="input"
              type="text"
              thousandSeparator={true}
              onChange={onChange}
            />
          )}
        />
      </>
    ) : oindex === "4" ? (
      <>
        <h4>Enter the amount of money you want Rolled Over</h4>
        <p>The rest will be paid out directly to you</p>
        <Controller
          control={control}
          name="ro_ls"
          render={({ field: { onChange, name, value } }) => (
            <NumberFormat
              style={{
                ...inputStyle,
                ...dolla,
                ...{
                  width: "70%",
                  paddingLeft: "2.5rem",
                },
              }}
              thousandsGroupStyle="thousand"
              name={name}
              value={value}
              decimalSeparator="."
              displayType="input"
              type="text"
              thousandSeparator={true}
              onChange={onChange}
            />
          )}
        />
      </>
    ) : oindex === "6" ? (
      <>
        <div
          style={{
            marginTop: "6rem",
          }}
        >
          <Button
            id="22.8"
            value="90.5"
            className="lobut"
            onClick={(e) => {
              setMethod({
                top: e.target.value,
                left: e.target.id,
              });
              setDisplay("4");
            }}
            style={{
              padding: "0.2%",
              fontSize: "1.5rem",
              width: "90%",
              margin: "1rem",
            }}
            variant="outline-dark"
          >
            Rollover Check Mailed to Me
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              (Using the Address Entered Above)
            </span>
          </Button>
          <Button
            onClick={(e) => {
              setMethod({
                top: e.target.value,
                left: e.target.id,
              });

              setDisplay("5");
              console.log(display);
            }}
            className="lobut"
            id="22.8"
            value="103.2"
            style={{
              padding: "0.2%",
              fontSize: "1.5rem",
              width: "90%",
              margin: "1rem",
            }}
            variant="outline-dark"
          >
            Rollover Check Mailed Directly to the Rollover Company
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              (You will need the Receving Companies Address)
            </span>
          </Button>
          <Button
            className="lobut"
            id="90.5"
            value="343.4"
            onClick={(e) => {
              setMethod({
                top: e.target.value,
                left: e.target.id,
              });
              setDisplay("6");
            }}
            style={{
              padding: "0.2%",
              fontSize: "1.5rem",
              width: "90%",
              margin: "1rem",
            }}
            variant="outline-dark"
          >
            Rollover Check Mailed Directly to your Plan Sponsor
            <br />
            <span style={{ fontSize: "0.8rem" }}>
              (Meaning the check will be sent to your employer)
            </span>
          </Button>
        </div>
      </>
    ) : oindex === "5" ? (
      <>
        <h4>Enter the amount of money payable diectly to you</h4>
        <p>The remainder of your balance will be Rolled Over</p>
        <Controller
          control={control}
          name="ls_ro"
          render={({ field: { onChange, name, value } }) => (
            <NumberFormat
              style={{
                ...inputStyle,
                ...dolla,
                ...{
                  width: "70%",
                  paddingLeft: "2.5rem",
                },
              }}
              thousandsGroupStyle="thousand"
              name={name}
              value={value}
              decimalSeparator="."
              displayType="input"
              type="text"
              thousandSeparator={true}
              onChange={onChange}
            />
          )}
        />
      </>
    ) : oindex === "7" ? (
      <>
        <h4>Enter the Amount you want rolled over</h4>
        <Controller
          control={control}
          name="prol"
          render={({ field: { onChange, name, value } }) => (
            <NumberFormat
              style={{
                ...inputStyle,
                ...dolla,
                ...{
                  width: "70%",
                  paddingLeft: "2.5rem",
                },
              }}
              thousandsGroupStyle="thousand"
              name={name}
              value={value}
              decimalSeparator="."
              displayType="input"
              type="text"
              thousandSeparator={true}
              onChange={onChange}
            />
          )}
        />
      </>
    ) : (
      <div></div>
    );

  const End = (
    <Container>
      <h1 style={header}>Final things that need to be completed</h1>
      <Row>
        <Col xs="12" lg="6">
          <h3>Additonal Notes For TPA</h3>
          <TextField
            style={{ width: "75%", padding: "2%" }}
            id="filled-multiline-flexible"
            multiline
            rows={3}
            variant="filled"
            {...register("notes")}
          />
        </Col>
        <Col xs="12" lg="6">
          <h3>Where Do I Sign??</h3>
          <Card>
            <Card.Body>
              <Card.Text>
                <p>This must be signed with black or blue pen </p>
                <a href="/sig">Or Try our online signature feature</a>
              </Card.Text>
            </Card.Body>
            <Card.Img variant="bottom" src={signhere} />
          </Card>
        </Col>
      </Row>
    </Container>
  );

  const bankinfo =
    display === "1" ? (
      <>
        <div style={{ minHeight: "15rem" }}></div>
      </>
    ) : display === "2" ? (
      <>
        <Row>{End}</Row>
      </>
    ) : display === "3" ? (
      <Container style={{ padding: "1%", marginTop: "5rem" }}>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>
              <h4>
                ABA Number{" "}
                <span style={{ fontSize: "0.95rem" }}>
                  (Nine Digit Routing Number)
                </span>
              </h4>
            </Form.Label>
            <Controller
              control={control}
              name="aba"
              render={({ field: { onChange, name, value } }) => (
                <NumberFormat
                  style={{
                    ...inputStyle,
                    ...{
                      width: "100%",
                      paddingLeft: "2.5rem",
                    },
                  }}
                  format="#########"
                  name={name}
                  value={value}
                  displayType="input"
                  type="text"
                  onChange={onChange}
                />
              )}
            />
          </Form.Group>

          <Form.Group as={Col}>
            <Form.Label>
              <h4>Account Number</h4>
            </Form.Label>
            <Controller
              control={control}
              name="diracc"
              render={({ field: { onChange, name, value } }) => (
                <NumberFormat
                  style={{
                    ...inputStyle,
                    ...{
                      width: "100%",
                      paddingLeft: "2.5rem",
                    },
                  }}
                  format="###################"
                  name={name}
                  value={value}
                  displayType="input"
                  type="text"
                  onChange={onChange}
                />
              )}
            />
          </Form.Group>
          <Form.Group
            style={{ marginTop: "3%" }}
            className="mb-3"
            controlId="formGridAddress1"
          >
            <Form.Label>Account Holders Name</Form.Label>
            <Form.Control {...register("accname")} placeholder="John Smith" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Financial Instituion Name</Form.Label>
            <Form.Control
              {...register("bankname")}
              placeholder="Big Heart Bank Corp."
            />
          </Form.Group>
        </Row>
        <Row>
          <h3 style={{ textAlign: "center", marginTop: "2rem" }}>
            Financial Institution's Address
          </h3>
          <h5 style={{ textAlign: "center" }}>Optional</h5>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control {...register("bankadd")} placeholder="1234 Main St" />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control placeholder="Marlton" {...register("bankcity")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control placeholder="NJ" {...register("bankstate")} />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control placeholder="08053" {...register("bankzip")} />
            </Form.Group>
          </Row>
        </Row>
        <Row>{End}</Row>
      </Container>
    ) : display === "5" ? (
      <Container style={{ padding: "1%", marginTop: "5rem" }}>
        <h2 style={{ marginBottom: "4rem", borderBottom: "4px solid black" }}>
          Rollover Company Information
        </h2>
        <Row style={{ fontSize: "1.3rem" }} className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Rollover Company's Name</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollcom")}
              placeholder="New Civil Trust"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Account Number (Required)</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollacc")}
              placeholder="11000-3456"
            />
          </Form.Group>
          <p style={{ textAlign: "center" }}>
            If you are Rolling into an IRA and have a Roth account,{" "}
            <Button
              variant="outline-light"
              style={{
                padding: "none",
                fontSize: "1.2rem",
                border: "none",
                textDecoration: "underline",
                color: "black",
              }}
              onClick={(e) => setRothinput("")}
            >
              Click Here
            </Button>
          </p>
        </Row>
        <Row className="mb-3" style={{ display: `${rothinput}` }}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Roth Account Number (Required)</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollrothacc")}
              placeholder="11000-3456"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Address</Form.Label>
            <Form.Control
              size="lg"
              {...register("rolladd")}
              placeholder="1002 Lincoln Drive"
            />
          </Form.Group>

          <Row className="mb-3">
            <Form.Group as={Col} controlId="formGridCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                size="lg"
                placeholder="Marlton"
                {...register("rollcity")}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridState">
              <Form.Label>State</Form.Label>
              <Form.Control
                size="lg"
                placeholder="NJ"
                {...register("rollstate")}
              />
            </Form.Group>

            <Form.Group as={Col} controlId="formGridZip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                size="lg"
                placeholder="08053"
                {...register("rollzip")}
              />
            </Form.Group>
          </Row>
          <Form.Group
            style={{ marginTop: "3%" }}
            className="mb-3"
            controlId="formGridAddress1"
          >
            <Form.Label>Name of Plan/Memo</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollname")}
              placeholder="FBO John"
            />
          </Form.Group>
        </Row>
        <Row>{End}</Row>
      </Container>
    ) : display === "4" ? (
      <Container style={{ padding: "1%", marginTop: "5rem" }}>
        <h2 style={{ padding: "1rem", borderBottom: "4px solid black" }}>
          Rollover Company Information
        </h2>
        <p>Still required even if being sent directly to you</p>

        <Row className="mb-3" style={{ fontSize: "1.3rem" }}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Rollover Company's Name</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollcom")}
              placeholder="First Choice Credit Union"
            />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Account Number (Required)</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollacc")}
              placeholder="1234-00123"
            />
          </Form.Group>
          <p tyle={{ textAlign: "center" }}>
            If you are Rolling into an IRA and have a Roth account,{" "}
            <Button
              variant="outline-light"
              style={{
                padding: "none",
                fontSize: "1.2rem",
                border: "none",
                textDecoration: "underline",
                color: "black",
              }}
              onClick={(e) => setRothinput("")}
            >
              Click Here
            </Button>
          </p>
        </Row>
        <Row className="mb-3" style={{ display: `${rothinput}` }}>
          <Form.Group className="mb-3" controlId="formGridAddress1">
            <Form.Label>Roth Account Number (Required)</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollrothacc")}
              placeholder="000-1234"
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group
            style={{ marginTop: "3%" }}
            className="mb-3"
            controlId="formGridAddress1"
          >
            <Form.Label>Name of Plan/Memo</Form.Label>
            <Form.Control
              size="lg"
              {...register("rollname")}
              placeholder="FBO John Smith"
            />
          </Form.Group>
        </Row>
        <Row>{End}</Row>
      </Container>
    ) : (
      <div></div>
    );

  return (
    <div style={{ backgroundColor: "#F5F5F5" }}>
      {/* ---- PDF DOWNLOAD ---- */}
      <div style={{}}>
        <div style={{ margin: "1%" }}>
          <Container
            style={{ fontFamily: "webfont", color: "#01172F", height: "100%" }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <Row id="sec1-info">
                <h1 style={header}>
                  Let start by telling us a little bit about yourself...
                </h1>
                <Col
                  md
                  style={{
                    marginTop: "3%",
                    padding: "1.5rem",
                    height: "29rem",
                  }}
                >
                  <div style={{ width: "80%" }}>
                    <Row>
                      <h5>Name</h5>
                      <input
                        style={inputStyle}
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
                            style={inputStyle}
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
                        style={inputStyle}
                        type="date"
                        defaultValue="12/31/1999"
                        {...register("dob")}
                      />
                    </Row>
                  </div>
                </Col>
                {/* --- Address Input --- */}
                <Col
                  md
                  style={{
                    padding: "1.5rem 1.5rem 1.5rem 2rem",
                    backgroundColor: "#242a57",
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
                  <div style={{ width: "80%" }}>
                    <Row>
                      <Form.Control
                        style={inputStyle}
                        type="text"
                        placeholder={
                          homeAddress.city ? homeAddress.city : "City"
                        }
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
                        style={inputStyle}
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
                        style={inputStyle}
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
                  </div>
                </Col>
              </Row>
              {/* -------------- (Form Progression (new options added) ------------------ */}
              <h1 style={header}>Plan Information/Employment Status</h1>
              <Row
                style={{
                  fontSize: ".9rem",
                  marginTop: "5%",
                }}
              >
                {/* Plan Data */}
                <Col md style={{ width: "100%" }}>
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
                          style={inputStyle}
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
                      style={inputStyle}
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
              <Row style={{ paddingLeft: "0", marginBottom: "15vw" }}>
                <Col md style={{ width: "100%", marginTop: "50px" }}>
                  <select
                    id="DisType"
                    className="select"
                    value={reasons.value}
                    onChange={(e) => setIndex(e.target.value)}
                  >
                    <option value={10}>Choose Your Distribution Reason</option>
                    {reasons.map((reason, index) => {
                      return (
                        <option key={index} value={index}>
                          {reason.text}
                        </option>
                      );
                    })}
                  </select>
                  <Row
                    style={{
                      width: "100",
                    }}
                  >
                    {(() => {
                      switch (reasons[index].value) {
                        case "0":
                          return (
                            <Alert variant="danger">
                              <span>Distribution Reason is Required</span>
                            </Alert>
                          );
                        case "489":
                          return (
                            <Col>
                              <Row>
                                <h5
                                  style={{
                                    fontSize: "1rem",
                                    marginBottom: "0",
                                    marginTop: "10px",
                                  }}
                                >
                                  {reasons[index].label}
                                </h5>
                                <input
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      marginTop: "2%",
                                      width: "60%",
                                      marginLeft: "2rem",
                                    },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("doi")}
                                />
                              </Row>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "2vw",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );
                        case "626.5":
                          return (
                            <Col
                              md
                              style={{
                                marginTop: "3%",
                              }}
                            >
                              <Row>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={1}>
                                    Partial Cash Withdrawl
                                  </option>
                                  <option value={7}>Partial Rollover</option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );

                        case "430":
                          return (
                            <Col>
                              <Row>
                                <h5
                                  style={{
                                    fontSize: "1rem",
                                    marginBottom: "0",
                                    marginTop: "10px",
                                  }}
                                >
                                  {reasons[index].label}
                                </h5>
                                <input
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      marginTop: "2%",
                                      width: "60%",
                                      marginLeft: "2rem",
                                    },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("doi")}
                                />
                              </Row>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "1.3rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );
                        case "447":
                          return (
                            <Col>
                              <Row>
                                <h5
                                  style={{
                                    fontSize: "1rem",
                                    marginBottom: "0",
                                    marginTop: "10px",
                                  }}
                                >
                                  {reasons[index].label}
                                </h5>
                                <input
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      marginTop: "2%",
                                      width: "60%",
                                      marginLeft: "2rem",
                                    },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("doi")}
                                />
                              </Row>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "1.3rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );

                        case "462":
                          return (
                            <Col>
                              <Row>
                                <h5
                                  style={{
                                    fontSize: "1rem",
                                    marginBottom: "0",
                                    marginTop: "10px",
                                  }}
                                >
                                  {reasons[index].label}
                                </h5>
                                <input
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      marginTop: "2%",
                                      width: "60%",
                                      marginLeft: "2rem",
                                    },
                                  }}
                                  type="date"
                                  defaultValue=""
                                  {...register("doi")}
                                />
                              </Row>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "1.3rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={1}>
                                    Partial Cash Withdrawl
                                  </option>
                                  <option value={7}>Partial Rollover</option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );

                        case "525":
                          return (
                            <Col>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "1.3rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={1}>
                                    Partial Cash Withdrawl
                                  </option>
                                  <option value={7}>Partial Rollover</option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );

                        case "550":
                          return (
                            <Col>
                              <Row style={{ marginTop: "10%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddingTop: "3%",
                                      paddingBottom: "3%",
                                      paddingRight: "1%",
                                      paddinLeft: "0",
                                      width: "40rem",
                                      fontSize: "1.3rem",
                                      marginLeft: "none",
                                    },
                                  }}
                                >
                                  <option value={8}>Withdrawl Options</option>
                                  <option value={0}>
                                    Total Lump Sum Distribution (Cash Out)
                                  </option>
                                  <option value={6}>
                                    Direct Rollover (Total Vested Balance)
                                  </option>
                                  <option value={1}>
                                    Partial Cash Withdrawl
                                  </option>
                                  <option value={7}>Partial Rollover</option>
                                  <option value={5}>
                                    A lump sum payable to myself and the
                                    remainder payable as a direct rollover
                                  </option>
                                  <option value={4}>
                                    Direct Rollover as a Portion of my Vested
                                    Account Balance and the remainder as a lump
                                    sum payable to myself
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );

                        case "575":
                          return (
                            <Col style={{ marginTop: "5%" }}>
                              <h4>Enter the amount of your Hardship </h4>
                              <Row>
                                <Controller
                                  control={control}
                                  name="hship"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        ...inputStyle,
                                        ...dolla,
                                        ...{
                                          width: "70%",
                                          paddingLeft: "2.5rem",
                                        },
                                      }}
                                      thousandsGroupStyle="thousand"
                                      name={name}
                                      value={value}
                                      decimalSeparator="."
                                      displayType="input"
                                      type="text"
                                      thousandSeparator={true}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );
                        case "601":
                          return (
                            <Col>
                              <Row style={{ marginTop: "0.5%" }}>
                                <select
                                  id="termOptions"
                                  className="select"
                                  value={oindex}
                                  onChange={(e) => setOindex(e.target.value)}
                                  style={{
                                    ...inputStyle,
                                    ...{
                                      paddinLeft: "0",
                                      width: "16rem",
                                      fontSize: "1rem",
                                      marginLeft: "1rem",
                                    },
                                  }}
                                >
                                  <option value={8}>
                                    Withdrawl Amount Options
                                  </option>
                                  <option value={2}>
                                    Stick with my calculated RMD Below
                                  </option>
                                  <option value={9}>
                                    Elect to take additonal funds
                                  </option>
                                </select>
                              </Row>
                              <Row>{enteramount}</Row>
                            </Col>
                          );
                        default:
                          return <div></div>;
                      }
                    })()}
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
                                marginTop: "3%",
                                padding: "1.5rem",
                              }}
                            >
                              <h3>
                                <em>
                                  In order to process this request we will need
                                  a copy of the Original Death Certificate
                                </em>
                              </h3>
                              <h3>Beneficary or Alternate Payee Information</h3>
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
                                <h5>Share of Assets (1-100%)</h5>
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
                                marginTop: "3%",
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
                              marginTop: "3%",
                              marginLeft: "3%",
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
                              marginTop: "3%",
                              marginLeft: "3%",
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
                              marginTop: "3%",
                              marginLeft: "3%",
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
                              marginTop: "3%",
                              marginLeft: "3%",
                              backgroundColor: "#01172F",
                            }}
                          >
                            <Alert>
                              <h4>Did you know?</h4>
                              <p style={{ fontSize: "1.3rem" }}>
                                Most plans do not allow for in-service
                                distributions under the age of 59
                                <span style={{ fontSize: "10px" }}>1/2</span>
                                years old?*
                              </p>
                              <p>
                                You may want to look into other options for
                                withdrawing from your 401(k), click here to
                                learn more
                              </p>
                              <p style={{ fontSize: ".8rem" }}>
                                *This does not include previous money rolled
                                into the plan
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
                              marginTop: "3%",
                              marginLeft: "3%",
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
                              <ListGroup style={{ fontSize: "1.2rem" }}>
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Medical care expenses for the employee, the
                                  employee’s spouse, dependents or beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Costs directly related to the purchase of an
                                  employee’s principal residence (excluding
                                  mortgage payments).
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Tuition, related educational fees and room and
                                  board expenses for the next 12 months of
                                  postsecondary education for the employee or
                                  the employee’s spouse, children, dependents or
                                  beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Payments necessary to prevent the eviction of
                                  the employee from the employee’s principal
                                  residence or foreclosure on the mortgage on
                                  that residence.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Funeral expenses for the employee, the
                                  employee’s spouse, children, dependents, or
                                  beneficiary.
                                </ListGroup.Item>
                                <hr />
                                <ListGroup.Item
                                  style={{ backgroundColor: "transparent" }}
                                >
                                  Certain expenses to repair damage to the
                                  employee’s principal residence.
                                </ListGroup.Item>
                              </ListGroup>
                            </Alert>
                          </Col>
                        );
                      case "601":
                        return (
                          <Alert>
                            <Col
                              style={{ marginTop: "3%", marginLeft: "1.5%" }}
                            >
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
                                      onChange={(e) =>
                                        setAindex(e.target.value)
                                      }
                                      style={{
                                        ...inputStyle,
                                        ...{ width: "45%" },
                                      }}
                                    >
                                      {RMD.map((rmd, index) => {
                                        return (
                                          <option value={index}>
                                            {rmd.age}
                                          </option>
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
                                      style={{
                                        ...inputStyle,
                                        ...{ width: "70%" },
                                      }}
                                      thousandsGroupStyle="thousand"
                                      decimalSeparator="."
                                      displayType="input"
                                      type="text"
                                      thousandSeparator={true}
                                      value={accbal}
                                      onChange={(e) =>
                                        setAccbal(e.target.value)
                                      }
                                    />
                                  </Row>
                                </Col>
                                <Col
                                  md
                                  style={{
                                    marginTop: "5%",
                                    marginBottom: "5%",
                                    color: "whitesmoke",
                                    padding: "3%",
                                  }}
                                >
                                  <fieldset
                                    disabled
                                    style={{ backgroundColor: "transparent" }}
                                  >
                                    <h5
                                      style={{
                                        color: "#01172F",
                                        textAlign: "center",
                                      }}
                                    >
                                      Your RMD Amount!
                                    </h5>
                                    <input
                                      style={{
                                        ...inputStyle,
                                        ...{ width: "100%", color: "#01172F" },
                                      }}
                                      value={"$" + calc}
                                      {...register("rmdcalc")}
                                      placeholder={"$" + { calc }}
                                      onChange={() => console.log("hl")}
                                    />
                                  </fieldset>
                                </Col>
                              </Row>
                            </Col>
                          </Alert>
                        );
                      default:
                        return <div></div>;
                    }
                  })()}
                </Col>
              </Row>

              {oindex === "6" ? (
                <></>
              ) : (
                <>
                  <h1 style={header}>Important Tax Information</h1>
                  <Row style={{ margin: "0 auto" }}>
                    <Container
                      id="taxcon"
                      style={{
                        width: "90%",
                        border: "4px double #1f2a47",
                        padding: "1rem",
                        marginBottom: "5%",
                      }}
                    >
                      <h5>
                        Lincoln will withhold taxes from your distribution at
                        the rates detailed below and automatically send the
                        withholding to the IRS on your behalf. The total amount
                        of taxes withheld from your distribution will depend on
                        the federal and state taxes withheld. Please refer to
                        the Special Tax Notice for more information.
                      </h5>
                      <div style={{ textAlign: "center" }}>
                        <Link to="/">Download the special tax notice here</Link>
                        <p>
                          *It will also appended to the end of the completed
                          form*
                        </p>
                      </div>
                    </Container>
                    <Container
                      style={{ width: "92%", backgroundColor: "transparent" }}
                    >
                      <h5>
                        Taxes Withheld From your distribution will indclude:
                      </h5>
                      <ListGroup variant="flush">
                        <div
                          style={{
                            marginLeft: "10%",
                            width: "75%",
                            marginBottom: "2%",
                          }}
                        >
                          <ListGroup.Item
                            style={{ backgroundColor: "transparent" }}
                          >
                            • State tax (if applicable; the rate is based on
                            your state of residence on file and will be
                            automatically calculated)
                          </ListGroup.Item>
                          <ListGroup.Item
                            style={{ backgroundColor: "transparent" }}
                          >
                            • Federal tax: 20% mandatory federal tax (if
                            applicable; mandatory for distributions that are
                            eligible for rollover). Hardship and RMD only: 10%
                            mandatory federal tax or opt out below
                          </ListGroup.Item>
                        </div>
                        <div
                          style={{
                            backgroundColor: "#242a57",
                            color: "#fbf5f3",
                          }}
                        >
                          <ListGroup.Item
                            style={{
                              backgroundColor: "transparent",
                              width: "100%",
                              color: "#fbf5f3",
                              border: "2px double #fbf5f3",
                              padding: "0",
                            }}
                          >
                            <div
                              style={{
                                border: "5px double #fbf5f3",
                                margin: "1rem",
                                padding: "2%",
                              }}
                            >
                              <h5
                                style={{
                                  backgroundColor: "#fbf5f3",
                                  padding: "1%",
                                  color: "#1f2a47",
                                  fontWeight: "800",
                                }}
                              >
                                Indicate here if you would like to withhold
                                federal taxes at a higher rate than the
                                mandatory 20% for distributions or 10% for RMD
                                or Hardships.
                              </h5>
                              <h5 style={{ marginTop: "15px" }}>
                                <input
                                  onClick={(e) =>
                                    setDisplays({ top: "568", left: "42" })
                                  }
                                  style={{
                                    marginRight: "1.3%",
                                    transform: "scale(1.6, 1.6)",
                                  }}
                                  onChange={(e) => setShow("")}
                                  type="checkbox"
                                />{" "}
                                Withhold federal taxes at the rate of %{" "}
                                <Controller
                                  control={control}
                                  name="tax"
                                  render={({
                                    field: { onChange, name, value },
                                  }) => (
                                    <NumberFormat
                                      style={{
                                        display: `${show}`,
                                        border: "none",
                                        borderBottom: "2px solid black",
                                      }}
                                      format="###"
                                      name={name}
                                      value={value}
                                      onChange={onChange}
                                    />
                                  )}
                                />
                              </h5>
                              <h5>
                                <input
                                  style={{
                                    marginRight: "1.3%",
                                    transform: "scale(1.6, 1.6)",
                                  }}
                                  onClick={(e) =>
                                    setDisplays({ top: "586", left: "42" })
                                  }
                                  type="checkbox"
                                />
                                RMD/Hardship Only: Do not withhold taxes. I
                                understand I am responsible for any payment of
                                federal taxes due on my distribution.
                              </h5>
                            </div>
                          </ListGroup.Item>
                        </div>
                        <ListGroup.Item
                          style={{
                            backgroundColor: "transparent",
                            marginTop: "3rem",
                          }}
                        >
                          Federal tax withholding election: If you do not
                          provide a rate, or if you provide a federal tax
                          withholding rate that is less than 20% for standard
                          distributions or 10% for RMD or Hardship
                          distributions, we are still required to withhold the
                          minimum.
                        </ListGroup.Item>
                        <ListGroup.Item
                          style={{ backgroundColor: "transparent" }}
                        >
                          Please note: Your distribution may be subject to an
                          additional 10% early distribution penalty tax. This
                          penalty tax will be assessed when you file your tax
                          returns as a part of your tax liablity and it is not
                          automatically included in your tax withholding for
                          this distirbution
                        </ListGroup.Item>
                      </ListGroup>
                    </Container>
                    <h1 style={header}>Distirbution Method</h1>
                    <Container
                      id="butdiv"
                      style={{
                        textAlign: "center",
                        marginTop: "3rem",
                        fontWeight: "800",
                      }}
                    >
                      {(() => {
                        switch (options[oindex].y) {
                          case "362.5":
                          case "375":
                          case "390":
                          case "480":
                            return (
                              <>
                                <h3 style={{ marginBottom: "1rem" }}>
                                  Please Choose From the Options below
                                </h3>
                                <div
                                  style={{
                                    textAlign: "center",
                                  }}
                                >
                                  <Button
                                    active={disable1}
                                    className="lobut"
                                    id="23"
                                    value="76.5"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("2");
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: ".2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    Check Mailed To Me
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Using the Address Entered Above)
                                    </span>
                                  </Button>
                                  <Button
                                    active={disable2}
                                    className="lobut"
                                    id="22"
                                    value="230"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("3");
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    ACH Deposit
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Please have your banking information)
                                    </span>
                                  </Button>
                                </div>
                              </>
                            );

                          case "650.5":
                          case "662.5":
                            return (
                              <>
                                <h3 style={{ marginBottom: "1rem" }}>
                                  How would you like the <em>Cash Portion</em>{" "}
                                  of your check to be sent to you?
                                </h3>
                                <div
                                  style={{
                                    marginTop: "3rem",
                                    textAlign: "center",
                                  }}
                                >
                                  <Button
                                    active={disable1}
                                    className="lobut"
                                    id="76.5"
                                    value="23"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("2");
                                      console.log(disable1);
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    Check Mailed To Me
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Using the Address Entered Above)
                                    </span>
                                  </Button>
                                  <Button
                                    active={disable2}
                                    className="lobut"
                                    id="22"
                                    value="230"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("3");
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    ACH Deposit
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Please have your banking information)
                                    </span>
                                  </Button>
                                </div>
                              </>
                            );

                          case "702":
                            return (
                              <>
                                <div
                                  style={{
                                    marginTop: "3rem",
                                    textAlign: "center",
                                  }}
                                >
                                  <Button
                                    active={disable3}
                                    className="lobut"
                                    id="22.8"
                                    value="90.5"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("4");
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    Rollover Check Mailed to Me
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Using the Address Entered Above)
                                    </span>
                                  </Button>
                                  <Button
                                    active={disable4}
                                    className="lobut"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("5");
                                    }}
                                    id="22.8"
                                    value="103.2"
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    Rollover Check Mailed Directly to the
                                    Rollover Company
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (You will need the Receving Companies
                                      Address)
                                    </span>
                                  </Button>
                                </div>
                              </>
                            );

                          case "715":
                            return (
                              <>
                                <div
                                  style={{
                                    marginTop: "3rem",
                                    textAlign: "center",
                                  }}
                                >
                                  <Button
                                    active={disable3}
                                    className="lobut"
                                    id="22.8"
                                    value="90.5"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("4");
                                    }}
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                      backgroundColor: "#e9f1f7",
                                    }}
                                  >
                                    Rollover Check Mailed to Me
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (Using the Address Entered Above)
                                    </span>
                                  </Button>
                                  <Button
                                    active={disable4}
                                    className="lobut"
                                    onClick={(e) => {
                                      setMethod({
                                        top: e.target.value,
                                        left: e.target.id,
                                      });
                                      setDisplay("5");
                                    }}
                                    id="22.8"
                                    value="103.2"
                                    style={{
                                      width: "50%",
                                      padding: "0.2%",
                                      fontSize: "1.5rem",
                                      margin: "1rem",
                                    }}
                                    variant="outline-dark"
                                  >
                                    Rollover Check Mailed Directly to the
                                    Rollover Company
                                    <br />
                                    <span style={{ fontSize: "0.8rem" }}>
                                      (You will need the Receving Companies
                                      Address)
                                    </span>
                                  </Button>
                                </div>
                              </>
                            );

                          default:
                            return (
                              <div style={{ height: "5rem" }}>
                                <h3>Please Complete the form as directed to reveal this section</h3>
                              </div>
                            );
                        }
                      })()}
                    </Container>
                  </Row>
                </>
              )}
              <Row>{bankinfo}</Row>
              <Row style={{ marginBottom: "5%", marginTop: "5rem" }}>
                <input
                  id="subdata"
                  style={{
                    width: "100%",
                    marginBottom: "5rem",
                    padding: "none",
                    fontSize: "3vw",
                    backgroundColor: "#242a57",
                    color: "#f1f4e4",
                  }}
                  onClick={(e) => {
                    setPlanData({
                      planName: stuff.label,
                      planID: stuff.planID,
                      contract: stuff.contract_num,
                      vendor: stuff.vendor,
                      tpaID: stuff.TPAID,
                    });
                    handleShow();
                  }}
                  readOnly
                  type="Submit"
                  value="Submit Your Data"
                />
                <Modal
                  centered
                  show={mshow}
                  onHide={handleClose}
                  animation={false}
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Form Complete!</Modal.Title>
                  </Modal.Header>

                  <Modal.Body style={{ textAlign: "center", display: "" }}>
                    <Button
                      style={{ fontSize: ".9rem" }}
                      variant="secondary"
                      onClick={handleClose}
                    >
                      Back to Editing!
                    </Button>
                    <PDFDownloadLink
                      document={<PdfDocument data={data} />}
                      fileName={
                        planData.tpaID + " - " + data.name + " " + date + ".pdf"
                      }
                      style={{
                        fontFamily: "webfont",
                        fontWeight: "800",
                        padding: "1.8%",
                        borderRadius: "5px",
                        color: "#f7f7f7",
                        backgroundColor: "#20265c",
                        border: "1px solid #4a4a4a",
                        fontSize: "1.2rem",
                        margin: "4%",
                        width: "100%",
                      }}
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Download PDF" : "Download PDF"
                      }
                    </PDFDownloadLink>
                  </Modal.Body>
                </Modal>
              </Row>
            </form>
          </Container>
        </div>
      </div>
    </div>
  );
}
