import React from "react";
import { StyleSheet, View, Text } from "react-native";
import Swiper from "react-native-swiper";

export default function Home(props) {
  return (
    <Swiper style={styles.wrapper} horizontal={false} showsPagination={false} loop={false}>
      <View style={styles.slide1}>
        <Text style={styles.text}>1 - Hello Swiper</Text>
      </View>
      <View style={styles.slide2}>
        <Text style={styles.text}>2 - Beautiful</Text>
      </View>
      <View style={styles.slide3}>
        <Text style={styles.text}>3 - And simple</Text>
      </View>
    </Swiper>
    // <View>
    //   <Text>Home Screen</Text>
    // </View>
  );
}
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6666ff",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6666ff",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#6666ff",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
});
