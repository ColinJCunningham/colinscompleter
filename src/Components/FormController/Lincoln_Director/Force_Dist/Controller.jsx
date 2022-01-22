import React, { useState } from "react";
import reasons from "../../../../Data/dists";
import { usePDF, pdf, Page, Text, Document } from "@react-pdf/renderer";
import { PDFDownloadLink } from "@react-pdf/renderer";
import { PdfDocument } from "./LD_Force";
import XLSX from "xlsx";
import { Link } from "react-router-dom";
import Template from "./template.csv";

import { Table, Container, Row, Col, Button, Alert } from "react-bootstrap/";

// With Blob

function Test() {
  const [element, setElement] = useState("");
  const [display, setDisplay] = useState("");

  //----------- Excel Import ----------------//
  const [data, setData] = React.useState([]);
  const [cols, setCols] = React.useState([]);
  const [label, setLabel] = React.useState("");

  const filData = data[0];

  const current = new Date();
  const date = `${
    current.getMonth() + 1
  }${current.getDate()}${current.getFullYear()}`;

  const SheetJSFT = [
    "xlsx",
    "xlsb",
    "xlsm",
    "xls",
    "xml",
    "csv",
    "txt",
    "ods",
    "fods",
    "uos",
    "sylk",
    "dif",
    "dbf",
    "prn",
    "qpw",
    "123",
    "wb*",
    "wq*",
    "html",
    "htm",
  ]
    .map((x) => `.${x}`)
    .join(",");

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
      setData(data);
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
    marginTop: "10%",
  };

  return (
    <Container style={{ paddingTop: "5%", marginBottom: "5%" }}>
      <button
        style={{ backgroundColor: "#6aacf8fd" }}
        onClick={() => console.log(filData)}
      >
        Test
      </button>
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
                  Download One Here!
                </Button>
              </Link>
            </div>
          </div>
        </Col>
      </Row>
      <div>
        <Table
          striped
          bordered
          hover
          style={{ marginTop: "3%", marginBottom: "8%" }}
        >
          <thead>
            <tr>
              <th>Plan ID</th>
              <th>Full Name</th>
              <th>Date of Birth</th>
              <th>Date of Hire</th>
              <th>Date of Termination</th>
              <th>Download Link</th>
            </tr>
          </thead>
          <tbody style={{ marginBottom: "8%" }}>
            {element === ""
              ? ""
              : data.map((datab, i) => {
                  console.log(datab);
                  return i === 0 ? (
                    <div></div>
                  ) : (
                    <tr key={i}>
                      <td>{datab[5]}</td>
                      <td>{datab[3]}</td>
                      <td>{datab[8] + " " + datab[10]} </td>
                      <td>{datab[11]} </td>
                      <td>{datab[17]} </td>
                      <td>{datab[18]}</td>
                      <td>
                        <PDFDownloadLink
                          document={<PdfDocument data={datab} />}
                          fileName={
                            datab[2] +
                            " - " +
                            datab[7] +
                            " " +
                            datab[9] +
                            " - " +
                            date +
                            ".pdf"
                          }
                          style={pageStyle}
                        >
                          {({ blob, url, loading, error }) =>
                            loading ? "Loading" : "Download File!"
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

export default Test;
