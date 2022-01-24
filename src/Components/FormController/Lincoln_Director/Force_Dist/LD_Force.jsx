// ---- React Components and StyleSheets ---- //
import React from "react";
// ---- Assets ---- //
import P1 from "../../../../Assets/LD_Force/P1.png"; // Page 1 LD Form
import P2 from "../../../../Assets/LD_Force/P2.png"; // Page 2 LD Form
import P3 from "../../../../Assets/LD_Force/P3.png"; // Page 2 LD Form
import P4 from "../../../../Assets/LD_Force/P4.png"; // Page 2 LD Form
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
const currentdate = Moment().format("MM - DD - YYYY");

export function PdfDocument(props) {
  // Props check ************Remove before publishing***************
  console.log(props.data[0]);

  return (
    <Document>
      {/*---------------------------------- Page 1 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={P1} alt="images" />
          {/* ---- Input Group 1 ---- */}
          <View
            style={{
              position: "absolute",
              top: 236,
              left: 90,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[2] ? props.data[2] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 236,
              left: 480,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[5] ? props.data[5] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 255,
              left: 440,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[4] ? props.data[4] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 255,
              left: 105,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[7] ? props.data[7] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 276,
              left: 198,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data[8] ? props.data[8] + " " + props.data[10] : ""}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 295,
              left: 78,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[12] ? props.data[12] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 295,
              left: 200,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[12] ? props.data[13] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 315,
              left: 68,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[14] ? props.data[14] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 315,
              left: 350,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[15] ? props.data[15] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 315,
              left: 485,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[16] ? props.data[16] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 352,
              left: 175,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[6] ? props.data[6] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 352,
              left: 395,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[11] ? props.data[11] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 375,
              left: 395,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[12] ? props.data[12] : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 443,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data[0] === "y" ? "X" : props.data[0] === "Y" ? "X" : " "}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 486.5,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data[1] === "y" ? "X" : props.data[1] === "Y" ? "X" : " "}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 2 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={P2} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 50,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[1] === "Y" ? "x" : " "} </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 77,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[0] === "Y" ? "x" : " "} </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 103,
              left: 24,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data[19] === "Y" ? "x" : " "} </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 73,
              left: 170,
              right: 0,
              bottom: 0,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 185,
              left: 235,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X</Text>
          </View>
          {/* discretionary */}
          <View
            style={{
              position: "absolute",
              top: 264,
              left: 190,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>100</Text>
          </View>
          {/* match */}
          <View
            style={{
              position: "absolute",
              top: 277,
              left: 190,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>100</Text>
          </View>
          {/* Roth */}
          <View
            style={{
              position: "absolute",
              top: 346,
              left: 225,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 359,
              left: 194,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>Lincoln Calcs</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 356,
              left: 385,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>Lincoln Calcs</Text>
          </View>
          {/* Loans */}
          <View
            style={{
              position: "absolute",
              top: 375,
              left: 167,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 375,
              left: 440,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>Balance</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 297,
              left: 340,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>Other</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 315,
              left: 240,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 442,
              left: 315,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 534,
              left: 23,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data[1] === "y" ? "X" : props.data[1] === "Y" ? "X" : " "}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 3 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={P3} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 62,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data[0] === "y" ? "X" : props.data[0] === "Y" ? "X" : " "}
            </Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 4 ----------------------------------------------------- */}
      <Page object-fit="fill" style={(styles.page, { fontSize: 13 })} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={P4} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 63,
              left: 120,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>RetireWell Administartors Inc.</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 84,
              left: 140,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              ClientServices@retirewelltpa.com
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 132,
              left: 120,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>(856)-396-0499</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 132,
              left: 425,
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
    </Document>
  );
}
