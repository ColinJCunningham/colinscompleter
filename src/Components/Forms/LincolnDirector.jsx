import React from "react";
import LD from "../../Assets/LD.png";
import LD2 from "../../Assets/LD2.png";

import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  Image,
} from "@react-pdf/renderer";

const POSTER_PATH = "https://image.tmdb.org/t/p/w154";

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
  console.log(props)
  const type = props.data[0].dist;
  //DDT = 430
  //Ret = 447
  // Disabilty = 462
  //Death = 489
  //in-serv (under 59) = 525
  //in -serv (over) = 550
  //hardsh = 575
  //RMD = 601
  //QDRO = 626.5
  //Plan Term = 662

  const wopTop = 715;
  const woLeft = 23.5;

  //Total Lump Sum T: 364, L: 24
  //Partial Withdrawl T: 377, L: 24
  //RMD T: 390, L: 24
  //Hardship T: 520, L: 24
  //Direct rollover (rest cash) T: 652, L: 23.5
  //Cash (rest direct rollover) T: 665, L: 23.5
  //Toal Vested Account Balance T: 703, L: 23.5
  //Rollover (partial) T: 352, L: 24

  // limit characters
  function limit (string = '', limit = 0) {  
    return string.substring(0, limit)
  } 


  return (
    <Document>
{/*---------------------------------- Page 1 ----------------------------------------------------- */}
   <Page object-fit="fill" style={styles.page,{fontSize: 13}} size="A4">
        <View style={styles.view}>
          <Image style={styles.image} src={LD} alt="images" />
          <View
            style={{
              position: "absolute",
              top: 200,
              left: 74,
              right: 0,
              bottom: 0,
            }}
          >
            {/* Limit to 48 Characters */}
            <Text>{limit(`${props.data[3].data.planName}`, 52)}</Text>
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
            <Text>{props.data[1].name}</Text>
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
            <Text>{props.data[3].data.planID}</Text>
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
            <Text>{props.data[3].data.contract}</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 288,
              left: 70,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>cccccc</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 288,
              left: 380,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>xxxxx</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 288,
              left: 500,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>Zip</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 335,
              left: 137,
              right: 0,
              bottom: 0,
            }}
          >
            <Text>xxx - xx - xxxx</Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 335,
              left: 377,
              right: 0,
              bottom: 0,
            }}
          >
            <Text> {} </Text>
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
            <Text> xx / xx / xxxx </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 425,
              left: 230,
              right: 0,
              bottom: 0,
            }}
          >
            <Text> xx / xx /xxxx </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 425,
              left: 410,
              right: 0,
              bottom: 0,
            }}
          >
            <Text> xx </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 440,
              left: 110,
              right: 0,
              bottom: 0,
            }}
          >
            <Text> ll/ ll /llll </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: 482,
              left: 143,
              right: 0,
              bottom: 0,
            }}
          >
            <Text> xx / xx /xxxx </Text>
          </View>
          <View
            style={{
              position: "absolute",
              top: type,
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
              top: wopTop,
              left: woLeft,
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






