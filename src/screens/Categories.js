import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import CategoryCard from "./components/CategoryCard";
import cusData from "./json/cardJson.json";

export default function Categories(props) {
  // console.log("returnArray", returnArray);
  return (
    <ScrollView>
      <View style={styles.cardContainer}>
        <CategoryCard style={styles.categoryCard}></CategoryCard>
        {/* {cusData.map((prop) => {
          return <CategoryCard key={prop.id} mydata={returnArray} style={styles.categoryCard}></CategoryCard>;
        })} */}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  cardContainer: {},
  categoryCard: {},
});
