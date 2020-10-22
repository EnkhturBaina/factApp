import React from "react";
import { StyleSheet, Text, View, Button, StatusBar } from "react-native";
export default function Home(props) {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button onPress={() => props.navigation.navigate("Login")} title="Click"></Button>
    </View>
  );
}
