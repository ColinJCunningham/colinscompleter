// ---- React Components and StyleSheets ---- //
import React from "react";
// ---- Assets ---- //
import LD from "../../../Assets/LD_DistForm/LD.png"; // Page 1 LD Form
import LD2 from "../../../Assets/LD_DistForm/LD2.png"; // Page 2 LD Form
// import LD3 from "../../../Assets/LD_DistForm/LD3.png"; // Page 2 LD Form
// import LD4 from "../../../Assets/LD_DistForm/LD4.png"; // Page 2 LD Form
// import LD5 from "../../../Assets/LD_DistForm/LD5.png"; // Page 2 LD Form
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
    backgroundColor: "aqua",
  },
  view: {
    width: "100%",
    height: "100%",
    padding: 0,
    backgroundColor: "black",
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
  console.log(props.data.data)
  function limit(string = "", limit = 0) {
    return string.substring(0, limit);
  } // Limit character function

  

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
            <Text>{limit(`${props.data.data ? props.data.data.planName: ""}  `, 52)}</Text>
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
            <Text>121314516171818</Text>
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
            <Text>{props.data.data ? props.data.data.contract: ""}</Text>
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
            <Text>{props.data.address ? props.data.address.address:" "}</Text>
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
            <Text>{props.data.address ? props.data.address.city: " "}</Text>
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
            <Text>{props.data.address ? props.data.address.state: " "}</Text>
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
            <Text>{props.data.address ? props.data.address.zip: " "}</Text>
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
            <Text>{props.data.dob} </Text>
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
              top: `${props.data.dist ? props.data.dist : .1}` - 2,
              left: `${props.data.date ? props.data.date  : .1}`,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>{props.data.doi}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: `${props.data.dist ? props.data.dist : .1}`,
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
      <Page object-fit="fill" style={styles.page} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD2} alt="images" />
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
