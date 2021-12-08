// ---- React Components and StyleSheets ---- //
import React, { useState } from "react";
// ---- Assets ---- //
import LD from "../../../Assets/LD_DistForm/LD.png"; // Page 1 LD Form
import LD2 from "../../../Assets/LD_DistForm/LD2.png"; // Page 2 LD Form
import LD3 from "../../../Assets/LD_DistForm/LD3.png"; // Page 2 LD Form
import LD4 from "../../../Assets/LD_DistForm/LD4.png"; // Page 2 LD Form
import LD5 from "../../../Assets/LD_DistForm/LD5.png"; // Page 2 LD Form
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
  // ---- Addtional Functions ---- //
  console.log(props.data);
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  } // Limit character function

  const dob = props.data.dob
    ? Moment(props.data.dob).format("MM - DD - YYYY")
    : "";
  const bDob = props.data.bDob
    ? Moment(props.data.bDob).format("MM - DD - YYYY")
    : "";
  const doh = props.data.doh
    ? Moment(props.data.doh).format("MM - DD - YYYY")
    : "";
  const doi = props.data.doi
    ? Moment(props.data.doi).format("MM - DD - YYYY")
    : "";

  console.log(props.data.file);

  const [display, setDisplay] = ("none")

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
              top: 200,
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
              top: 224,
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
              top: 248,
              left: 180,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.name}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 224,
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
              top: 198,
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
              top: 270,
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
              top: 293,
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
              top: 294,
              left: 343,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.address ? props.data.address.state : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 292,
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
              top: 338,
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
              top: 338,
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
              top: 362,
              left: 380,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{doh} </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 358,
              left: 375,
              right: 0,
              bottom: 0,
            }}
          >
            <Text></Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: `${props.data.dist ? props.data.dist : 0.1}` - 2,
              left: `${props.data.date ? props.data.date : 0.1}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{doi}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: `${props.data.dist ? props.data.dist : 0.1}`,
              left: 25,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
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
              top: 78,
              left: 115,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.bname ? props.data.bname : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 78,
              left: 450,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.relate ? props.data.relate : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 94,
              left: 84,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>
              {props.data.baddress ? props.data.baddress.address : " "}
            </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 110,
              left: 80,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.baddress ? props.data.baddress.city : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 110,
              left: 320,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.baddress ? props.data.baddress.state : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 110,
              left: 480,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.baddress ? props.data.baddress.zip : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 142,
              left: 130,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.bssn ? props.data.bssn : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 142,
              left: 360,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{bDob}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 160,
              left: 65,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.share ? props.data.share : " "}</Text>
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
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
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
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
          </View>
        </View>
      </Page>
      {/*---------------------------------- Page 5 ----------------------------------------------------- */}
      <Page object-fit="fill" style={styles.page} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD5} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
