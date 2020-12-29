import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, ImageBackground } from "react-native";
const image = { uri: "https://reactjs.org/logo-og.png" };
import { db } from "../Firbase";

export default function CategoryCard(props) {
  var returnArray = [];
  const [storedData, setStoredData] = useState({});
  db.ref(`categories/`).on("value", function (data) {
    console.log("aa", data.val());

    data.forEach(function (snap) {
      var item = snap.val();
      item.key = snap.key;

      returnArray.push(item);
    });

    // this.setState({ dataArray: returnArray })
    return returnArray;
    // setStoredData(data.val());
  });
  return (
    <View style={styles.containerStyle}>
      {returnArray.map((prop, index) => {
        return (
          <View key={prop.index} style={styles.content}>
            <ImageBackground source={{ uri: prop.imageURL }} style={styles.image} imageStyle={{ borderRadius: 10 }}>
              <Text style={styles.textStyle}>{prop.title}</Text>
            </ImageBackground>
          </View>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "flex-start",
    alignItems: "center",
    marginHorizontal: 20,
  },
  content: {
    backgroundColor: "white",
    borderColor: "#808080",
    width: "45%",
    margin: 8,
  },
  image: {
    resizeMode: "cover",
    borderRadius: 10,
    elevation: 5,
    height: 150,
    padding: 10,
  },
  textView: {
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
  },
  textStyle: {
    color: "#deb887",
    fontWeight: "bold",
    fontSize: 16,
  },
});
