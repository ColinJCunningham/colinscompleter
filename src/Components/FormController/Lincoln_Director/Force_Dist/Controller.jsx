import React, { useState, useEffect } from "react";
import reasons from "../../../../Data/dists";
import { usePDF, pdf, Page, Text, Document } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./LD_Force";
import XLSX from "xlsx";
import { Link } from "react-router-dom";
import Template from "./template.csv";
import Mock from "./Test_Data.csv";
import "./controller.css";

import { Table, Container, Row, Col, Button, Alert } from "react-bootstrap/";

// With Blob

function Multi() {
  const [element, setElement] = useState("");
  const [display, setDisplay] = useState("");
  const [showtable, setShowtable] = useState("none");
  const [id, setId] = useState(0);
  const [load, setLoad] = useState("none");

  //----------- Excel Import ----------------//
  const [data, setData] = React.useState([]);
  const [cols, setCols] = React.useState([]);
  const [label, setLabel] = React.useState("");

  useEffect(() => {
    if (id === 0) {
      console.log("Waiting");
    } else {
      const timer = setTimeout(() => {
        console.log("worked");
        setLoad("none");
        setShowtable(" ");
      }, id * 1000);
    }
  }, [id]);

  const filData = data[0];

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  function DataInput({ handleFile }) {
    const handleChange = (e) => {
      const files = e.target.files;
      setDisplay("none");
      setElement("hello");
      setLabel("File Uploaded Succsessfully");
      if (files && files[0]) handleFile(files[0]);
    };

    return (
      <form className="form-inline" style={{ textAlign: "center" }}>
        <h4>Only for use with Template</h4>
        <p>The upload file must be .csv to avoid errors in formatting</p>
        <div style={{ margin: "0 auto" }} className="form-group">
          <input
            style={{ display: `${display}` }}
            type="file"
            className="form-control"
            id="file"
            accept={".csv"}
            onChange={handleChange}
          />
        </div>
        <div style={{ marginTop: "5%", textAlign: "center" }}>
          <h4 style={{ color: "green" }}>{label}</h4>
        </div>
      </form>
    );
  }

  const handleFile = (file) => {
    const reader = new FileReader();
    reader.onload = (e) => {
      /* Parse data */
      const ab = e.target.result;
      const wb = XLSX.read(ab, { type: "array" });
      /* Get first worksheet */
      const wsname = wb.SheetNames[0];
      const ws = wb.Sheets[wsname];
      /* Convert array of arrays */
      const data = XLSX.utils.sheet_to_json(ws, { header: 1 });
      /* Update state */
      setLoad(" ");
      setData(data);
      setId(data.length + 2);
    };
    reader.readAsArrayBuffer(file);
  };

  //----------- Excel Import ----------------//
  const pageStyle = {
    fontFamily: "webfont",
    fontWeight: "800",
    color: "#01172F",
    fontSize: "1rem",
    width: "fit-content",
  };

  const header = {
    borderBottomStyle: "solid",
    borderBottomWidth: 4,
    paddingLeft: 0,
    color: "#01172F",
    marginTop: "6%",
  };

  // EXPORT ------------------------------------------------------------------------------------------------ EXPORT //
  // EXPORT ------------------------------------------------------------------------------------------------ EXPORT //
  // EXPORT ------------------------------------------------------------------------------------------------ EXPORT //
  // EXPORT ------------------------------------------------------------------------------------------------ EXPORT //

  return (
    <Container style={{ paddingTop: "5%", paddingBottom: "5%" }}>
      <div style={{ textAlign: "center" }}>
        <h1 style={{ textDecoration: "underline" }}>
          Multi-Participant Download
        </h1>
        <p>
          Allows the ability to use a template to generate multiple files at
          <br />
          once and list their download links along with some prelimnary data
        </p>
      </div>
      <Row>
        <h3 style={header}> Upload Your Template Below </h3>
        <Col style={{ minHeight: "10rem", paddingTop: "5%" }}>
          <div
            style={{
              width: "80%",
            }}
          >
            <div className="col-xs-12">
              <DataInput handleFile={handleFile} />
            </div>
          </div>
        </Col>
        <Col
          style={{
            minHeight: "10rem",
            paddingTop: "5%",
            textAlign: "center",
          }}
        >
          <div
            style={{
              width: "fit-content",
              margin: "0 auto",
              backgroundColor: "#12113A",
              padding: "4%",
              borderRadius: "20px",
              color: "whitesmoke",
            }}
          >
            <h4 style={{ textDecoration: "underline" }}>
              Dont have a template file?
            </h4>
            <div>
              <Link to={Template} target="_blank" download>
                <Button
                  style={{
                    width: "100%",
                    color: "#12113A",
                    backgroundColor: "whitesmoke",
                    marginTop: "5%",
                  }}
                >
                  Blank Template
                </Button>
              </Link>
              <Link to={Mock} target="_blank" download>
                <Button
                  style={{
                    width: "100%",
                    color: "#12113A",
                    backgroundColor: "whitesmoke",
                    marginTop: "5%",
                  }}
                >
                  Mock Data (For Testing)
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <div style={{ paddingBottom: "3%", paddingTop: "5%" }}>
        <div style={{ textAlign: "center", display: `${load}` }}>
          <h3>The PDF's are generating, please wait!</h3>
          <br />
          <p>This generally takes 2-5 seconds per entry</p>
          <br />
          <div className="loader"> </div>
        </div>

        <Table
          striped
          bordered
          hover
          style={{
            marginTop: "3%",
            marginBottom: "8%",
            display: `${showtable}`,
          }}
        >
          <thead>
            <tr>
              <th>SSN</th>
              <th>Full Name</th>
              <th>Date of Termination </th>
              <th>Plan Name</th>
              <th>Contract Number</th>
              <th>TPA Plan ID</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody style={{ marginBottom: "8%" }}>
            {element === ""
              ? "Error"
              : data.map((datab, i) => {
                  return i === 0 ? (
                    <tr key={i}></tr>
                  ) : (
                    <tr key={i}>
                      <td key={i + 2}>{datab[6]}</td>
                      <td key={i + 3}>{datab[8] + " " + datab[10]} </td>
                      <td key={i + 4}>{datab[18]}</td>
                      <td key={i + 5}>{datab[2]} </td>
                      <td key={i + 6}>{datab[5]} </td>
                      <td key={i + 7}>{datab[3]}</td>
                      <td value={datab[3]} key={i + 8}>
                        <PDFDownloadLink
                          document={<PdfDocument data={datab} />}
                          fileName={
                            datab[3] +
                            " - " +
                            datab[8] +
                            " " +
                            datab[10] +
                            " - " +
                            date +
                            ".pdf"
                          }
                          style={pageStyle}
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? "Loading" : "Download"
                          }
                        </PDFDownloadLink>
                      </td>
                    </tr>
                  );
                })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
}

export default Multi;
