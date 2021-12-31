// ---- React Components and StyleSheets ---- //
import React, { useState } from "react";
// ---- Assets ---- //
import LD from "../../../../Assets/LD_DistForm/LD.png"; // Page 1 LD Form
import LD2 from "../../../../Assets/LD_DistForm/LD2.png"; // Page 2 LD Form
import LD3 from "../../../../Assets/LD_DistForm/LD3.png"; // Page 2 LD Form
import LD4 from "../../../../Assets/LD_DistForm/LD4.png"; // Page 2 LD Form
import LD5 from "../../../../Assets/LD_DistForm/LD5.png"; // Page 2 LD Form
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
  // ---- Addtional Functions ---- //
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



  const currentdate = Moment().format("MM - DD - YYYY")

  const [display, setDisplay] = "none";

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
          <View
            style={{
              position: "absolute",
              top: `${props.data.wy ? props.data.wy : 0.1}`,
              left: `${props.data.wx ? props.data.wx : 0.1}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 373,
              left: 270,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data ? props.data.partial : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 650.5,
              left: 275,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data ? props.data.rols : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 662.5,
              left: 295,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data ? props.data.lsro : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 710,
              left: 300,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data ? props.data.proll : ""}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 389,
              left: 300,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.rmndcalc === 0 ? "" : props.data.rmdcalc}</Text>
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
              top: `${props.data.top ? props.data.top : "0.1"}`,
              left: `${props.data.left ? props.data.left : "0.1"}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 568,
              left: 222,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>
              {props.data.tax ? props.data.tax : ""}
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
              top: `${props.data.mtop ? props.data.mtop : "0.1"}`,
              left: `${props.data.mleft ? props.data.mleft : "0.1"}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>X</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 160,
              left: 165,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.rollcom ? props.data.rollcom : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 178,
              left: 100,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.rollad ? props.data.rollad + "      ,       " + props.data.rollcity + "     ,      " + props.data.rollstate + "    ,    " + props.data.rollzip : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 175,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.rollacc ? props.data.rollacc : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 400,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.rollrothacc ? props.data.rollrothacc : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 273,
              left: 205,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.aba? props.data.aba: " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 273,
              left: 465,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.diracc ? props.data.diracc : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 293,
              left: 245,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.accnam? props.data.accnam: " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 310,
              left: 180,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.bankname ? props.data.bankname : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 325,
              left: 80,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.bankadd? props.data.bankadd: " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 345,
              left: 60,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.bankcity ? props.data.bankcity : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 345,
              left: 365,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.bankstate ? props.data.bankstate : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 345,
              left: 495,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data.bankzip ? props.data.bankzip : " "}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 542,
              left: 148,
              right: 0,
              bottom: 0,
            }}
          >
          <Text style={{ fontSize: 12, color:"red", fontWeight:"800"}}> Sign Here </Text> 
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
              top: 212,
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
              top: 236,
              left: 80,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>ClientServices@retirewelltpa.com</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 258,
              left: 80,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>(856)-396-0499</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 285,
              left: 460,
              right: 0,
              bottom: 0,
            }}
          >
            <Text style={{ fontSize: 10 }}>{props.data? currentdate : " "}</Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
