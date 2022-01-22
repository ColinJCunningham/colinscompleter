// ---- React Components and StyleSheets ---- //
import React, { useState } from "react";
// ---- Assets ---- //
import LD from "../../../../Assets/LD_Loan/LD_Loan1.png"; // Page 1 LD Form
import LD2 from "../../../../Assets/LD_Loan/LD_Loan2.png"; // Page 2 LD Form
import LD3 from "../../../../Assets/LD_Loan/LD_Loan3.png"; // Page 2 LD Form
import LD4 from "../../../../Assets/LD_Loan/LD_Loan4.png"; // Page 2 LD Form
import Moment from "moment"; //Moment

// ---- NPM Components ---- //
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer"; // PDFReact-Renderer (npm package)
import moment from "moment";

// Needed for PDF Styling
const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    width: "100%",
    orientation: "portrait",
  },
  view: {
    width: "100%",
    padding: 0,
    backgroundColor: "white",
    marginTop: "3%",
  },
  image: {
    objectFit: "cover",
    position: "fixed",
  },
  section: {
    padding: 10,
    flexGrow: 1,
  },
  DDT: {
    position: "absolute",
    left: 25,
    right: 0,
    bottom: 0,
  },
});

export function PdfDocument(props) {
  // Props check ************Remove before publishing***************
  console.log(props ? props : "hello");
  // ---- Addtional Functions ---- //
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  } // Limit character function

  const dob = props.data.dob
    ? Moment(props.data.dob).format("MM - DD - YYYY")
    : "";
  const doh = props.data.doh
    ? Moment(props.data.doh).format("MM - DD - YYYY")
    : "";
  const doi = props.data.doi
    ? Moment(props.data.doi).format("MM - DD - YYYY")
    : "";
  const currentdate = Moment().format("MM - DD - YYYY");

  const term =
    props.data.term === "1"
      ? 127
      : props.data.term === "2"
      ? 180
      : props.data.term === "3"
      ? 235
      : props.data.term === "4"
      ? 293
      : props.data.term === "5"
      ? 347
      : props.data.term
      ? ""
      : false;

  const freq =
    props.data.pfreq === "1"
      ? 147
      : props.data.pfreq === "2"
      ? 203
      : props.data.pfreq === "3"
      ? 266
      : props.data.pfreq === "4"
      ? 349
      : props.data.pfreq
      ? ""
      : false;

  return (
    <Document>
      {/*---------------------------------- Page 1 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD} alt="images" />
          {/* ---- Input Group 1 ---- */}
          <View
            id="planname"
            style={{
              position: "absolute",
              top: 242,
              left: 74,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {limit(
                `${props.data.data ? props.data.data.planName : ""}  `,
                52
              )}
            </Text>
            {/* Limit to 51 Characters */}
          </View>
          <View
            style={{
              position: "absolute",
              top: 265,
              left: 98,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.accNum}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 285,
              left: 184,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.name}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 265,
              left: 455,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.data ? props.data.data.planID : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 242,
              left: 472,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.data ? props.data.data.contract : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 312,
              left: 70,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.address ? props.data.address.address : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 333,
              left: 70,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.address ? props.data.address.city : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 333,
              left: 348,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.address ? props.data.address.state : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 333,
              left: 490,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.address ? props.data.address.zip : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 379,
              left: 145,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.ssn}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 379,
              left: 380,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{dob}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 398,
              left: 380,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{doh}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 449,
              left: 141,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.loan ? props.data.loan : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 489,
              left: 42,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.gen ? props.data.gen : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 502,
              left: 42,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.prim ? props.data.prim : " "}</Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 2 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD2} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 198,
              left: 24,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.chk ? props.data.chk : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 216,
              left: 24,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.ach ? props.data.ach : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 278,
              left: 200,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.aba ? props.data.aba : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 278,
              left: 450,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.diracc ? props.data.diracc : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 298,
              left: 200,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.accnam ? props.data.accnam : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 324,
              left: 160,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.bankname ? props.data.bankname : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 345,
              left: 83,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.bankadd ? props.data.bankadd : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 368,
              left: 63,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.bankcity ? props.data.bankcity : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 368,
              left: 365,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.bankstate ? props.data.bankstate : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 368,
              left: 495,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.bankzip ? props.data.bankzip : ""}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 3 ----------------------------------------------------- */}
      <Page object-fit="fill" style={styles.page} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD3} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 442,
              left: 148,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 12, color: "red", fontWeight: "800" }}>
              Sign Here{" "}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 4 ----------------------------------------------------- */}
      <Page object-fit="fill" style={styles.page} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD4} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 77,
              left: `${term ? term : ""}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: `${freq ? "black" : "transparent"}`,
              }}
            >
              X
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 183,
              left: `${freq ? freq : ""}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text
              style={{
                fontSize: 10,
                color: `${freq ? "black" : "transparent"}`,
              }}
            >
              X
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 412,
              left: 80,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>RetireWell Administartors Inc.</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 438,
              left: 85,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>(856)-396-0499</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 458,
              left: 470,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data ? currentdate : " "}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 5 ----------------------------------------------------- */}
      <Page object-fit="fill" style={styles.page} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 200,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>Next Payroll Date:</Text>
            <Text style={{ fontSize: 10 }}>
              {doi}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 200,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>Participant Notes:</Text>
            <Text style={{ fontSize: 10 }}>
              {props.data.notes ? props.data.notes : " "}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
