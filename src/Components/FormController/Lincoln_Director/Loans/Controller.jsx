// --- Form Creation --- //
import React, { useState } from "react";
// --- Images & Icons --- //
import confused from "../../../../Assets/Confused.jpg";
import question from "../../../../Assets/qmark.png";
import dollas from "../../../../Assets/dolla.png";
import signhere from "../../../../Assets/sign2.png";
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
import { PdfDocument } from "./LDloan";
import masterlist from "../../../../Data/Planlist";
import "./controller.css";
import {
  Row,
  Container,
  Col,
  Image,
  Form,
  Card,
  Button,
  Modal,
  ListGroup,
  ListGroupItem,
  ButtonGroup,
} from "react-bootstrap/";
import { Alert } from "@mui/material";
// --- Api Key --- //
const key = process.env.REACT_APP_API_KEY;

export default function FormCreate() {
  // ------------------------------------- React-Hook-Form Register ------------------------------------- //
  const { register, handleSubmit, control, watch } = useForm();
  const onSubmit = (data) =>
    setData({
      name: data.name,
      dob: data.dob,
      data: planData,
      address: homeAddress,
      doi: data.doi,
      ssn: data.ssn,
      doh: data.doh,
      doi: data.doi,
      accNum: data.accNum,
      loan: data.loan,
      gen: gen === true ? "X" : "",
      res: res === true ? "X" : "",
      term: data.term,
      pfreq: pfreq,
      chk: display === "2" ? "X" : "",
      ach: display === "3" ? "X" : "",
      bankadd: data.bankadd,
      bankcity: data.bankcity,
      bankstate: data.bankstate,
      bankzip: data.bankzip,
      diracc: data.diracc,
      aba: data.aba,
      bankname: data.bankname,
      accnam: data.accname,
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
      loan: "",
      gen: "",
      res: "",
      term: "",
      pfreq: "",
      chk: "",
      ach: "",
      bankadd: "",
      bankcity: "",
      bankstate: "",
      bankzip: "",
      diracc: "",
      aba: "",
      bankname: "",
      accnam: "",
    },
  ]);

  // ------------------------------------- Use Params, TPAID ------------------------------------- //
  const { tpaid } = useParams();

  const stuff = masterlist.find((list) => {
    return list.TPAID === tpaid;
  });

  // ------------------------------------- Form Inputs ------------------------------------- //

  const [pfreq, setPfreq] = useState("");
  const [res, setRes] = useState(false);
  const [gen, setGen] = useState(false);
  const [planData, setPlanData] = useState([
    { planName: "", planID: "", contract: "", vendor: "", tpaID: "" },
  ]);
  const [homeAddress, setHomeaddress] = useState([
    { address: "", city: "", state: "", zip: "" },
  ]);
  //----- Form Inputs ----//

  const [display, setDisplay] = useState("1");

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

  // --------- Modal ---------  //

  const [mshow, setMshow] = useState(false);

  const handleClose = () => setMshow(false);
  const handleShow = () => setMshow(true);

  const current = new Date();

  const watchAge = watch(["dob"]);

  const disable1 = display === "2" ? true : false;

  const disable2 = display === "3" ? true : false;

  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

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
                This must be signed with black or blue pen 
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
    ) : (
      <div></div>
    );

  const primary =
    res === true ? (
      <Alert>
        You may be able to request an extended loan term, if this is something
        you are interested in leave the next section blank and reach out to us
      </Alert>
    ) : (
      <div></div>
    );

  // style={{ backgroundColor: "#94bbd2", color:"#20265c"}}

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
                    color:"black"
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
              <Row>
                <h1 style={header}>Loan Request Information</h1>
                <Row style={{ marginTop: "5%" }}>
                  <Col xs="12" xl="6">
                    <Row>
                      <h3
                        style={{
                          textDecoration: "underline",
                          marginBottom: "5%",
                        }}
                      >
                        Requested Loan Amount
                      </h3>
                      <Controller
                        control={control}
                        name="loan"
                        render={({ field: { onChange, name, value } }) => (
                          <NumberFormat
                            style={{
                              ...inputStyle,
                              ...dolla,
                              ...{
                                width: "55%",
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
                    <Row>
                      <h3
                        style={{
                          textDecoration: "underline",
                          marginBottom: "5%",
                          marginTop: "10%",
                        }}
                      >
                        Type of Loan
                      </h3>
                      <ButtonGroup
                        style={{ width: "80%" }}
                        aria-label="Loan Reason"
                      >
                        <Button
                          active={gen}
                          onClick={(e) => {
                            setGen(true);
                            setRes(false);
                          }}
                          variant="outline-dark"
                        >
                          General Purpose
                        </Button>
                        <Button
                          active={res}
                          onClick={(e) => {
                            setGen(false);
                            setRes(true);
                          }}
                          variant="outline-dark"
                        >
                          Purchase of Primary Residence
                        </Button>
                      </ButtonGroup>
                      <div style={{ marginTop: "5%", width: "80%" }}>
                        {primary}
                      </div>
                    </Row>
                    <Row>
                      <h3
                        style={{
                          textDecoration: "underline",
                          marginTop: "10%",
                        }}
                      >
                        Loan Term
                      </h3>
                      <p>The amount of time you have to pay back the loan</p>
                      <div style={{ textAlign: "justify", marginTop: "4%" }}>
                        <h5>1-5 Years</h5>
                        <input
                          type="number"
                          min="0"
                          max="5"
                          {...register("term")}
                          style={{
                            ...inputStyle,
                            ...{
                              minWidth: "fit-content",
                              width: "40%",
                            },
                          }}
                        />
                      </div>
                    </Row>
                    <Row style={{marginBottom:"10%"}}>
                      <h3
                        style={{
                          textDecoration: "underline",
                          marginTop: "10%",
                     
                        }}
                      >
                        Payroll Information
                      </h3>
                      <p>Needed to set up the amoritization schedule</p>
                      <Row style={{ textAlign: "justify", marginTop: "4%" }}>
                        <Col sm="12" lg="6">
                          <p>Next Payroll Date</p>
                          <input
                            style={inputStyle}
                            type="date"
                            defaultValue="12/31/1999"
                            {...register("doi")}
                          />
                        </Col>
                        <Col sm="12" lg="6">
                          <p>Payroll Frequency</p>
                          <select
                            onChange={(e) => setPfreq(e.target.value)}
                            style={{ ...inputStyle, ...{ width: "100%" } }}
                          >
                            <option value="0">Pay Schedule</option>
                            <option value="1">Weekly</option>
                            <option value="2">Bi-Weekly</option>
                            <option value="3">Semi-Monthly</option>
                            <option value="4">Monthly</option>
                          </select>
                        </Col>
                      </Row>
                    </Row>
                  </Col>
                  <Col xs="12" xl="6">
                    <Card
                      style={{ backgroundColor: "#93bbd280", maxWidth:"45rem" }}
                      className="text-center"
                    >
                      <Card.Header
                        style={{
                          backgroundColor: "#20265c",
                          color: "whitesmoke",
                        }}
                        as="h4"
                      >
                        How much do I qualify for?
                      </Card.Header>
                      <Card.Body
                        style={{
                          fontWeight: "700",
                          backgroundColor: "transparent",
                        }}
                      >
                        <Card.Title
                          style={{
                            borderBottom: "3px solid #20265c",
                            textAlign: "left",
                            fontWeight: "700",
                            marginBottom: "2rem",
                          }}
                        >
                          You are permitted to loan up to 50% of your total
                          vested account balance up to $50,000
                        </Card.Title>
                        <ListGroup
                          style={{
                            textAlign: "left",
                            width: "80%",
                            fontSize: "1.1rem",
                          }}
                          className="list-group-flush"
                        >
                          <h5 style={{ textDecoration: "underline" }}>
                            Additonal Rules that may apply*
                          </h5>
                          <ListGroupItem
                            style={{ backgroundColor: "transparent" }}
                          >
                            Minimum Loan Amount of $1,000
                          </ListGroupItem>
                          <ListGroupItem
                            style={{ backgroundColor: "transparent" }}
                          >
                            Loan Amount may be limited to Deferall Accounts
                          </ListGroupItem>
                          <ListGroupItem
                            style={{ backgroundColor: "transparent" }}
                          >
                            Active loans may impact loan eligibility and amount
                          </ListGroupItem>
                        </ListGroup>
                        <Card.Body>
                          <Card.Link
                            style={{ color: "#20265c" }}
                            href="tel:8563960499"
                          >
                            856-396-0499
                          </Card.Link>
                          <Card.Link
                            style={{ color: "#20265c" }}
                            href="mailto: clientservices@retirewelltpa.com"
                          >
                            clientservices@retirewelltpa.com
                          </Card.Link>
                        </Card.Body>
                      </Card.Body>
                      <Card.Footer
                        style={{
                          backgroundColor: "#20265c",
                          color: "whitesmoke",
                        }}
                      >
                        *Reach out to your TPA to learn more about addiotnal
                        loan rules
                      </Card.Footer>
                    </Card>
                  </Col>
                </Row>
              </Row>
              <Row>
                <>
                  <h1 style={header}>
                    Withdrawl Options
                  </h1>
                  <div
                    style={{
                      textAlign: "center",
                    }}
                  >
                    <Button
                      active={disable1}
                      className="lobut"
                      onClick={(e) => setDisplay("2")}
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
                      onClick={(e) => setDisplay("3")}
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
              </Row>
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
                        fontSize: "1.2rem",
                        margin: "4%",
                        width: "100%",
                      }}
                    >
                      {({ blob, url, loading, error }) =>
                        loading ? "Loading..." : "Download PDF"
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
