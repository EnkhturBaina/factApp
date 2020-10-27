import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Reminder from "./src/screens/Reminder";
import More from "./src/screens/More";
import Saved from "./src/screens/Saved";
import Categories from "./src/screens/Categories";

import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/Foundation";

const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 10 : StatusBar.currentight;

function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: "100%",
        height: STATUS_BAR_HEIGHT,
      }}
    >
      <StatusBar barStyle="dark-content" hidden={false} backgroundColor="#fff" translucent={false} networkActivityIndicatorVisible={true} />
    </View>
  );
}

const Tabs = AnimatedTabBarNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
      <NavigationContainer>
        <StatusBarPlaceHolder />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Reminder" component={Reminder} />
        <Stack.Screen name="Saved" component={Saved} />
        <Tabs.Navigator
          tabBarOptions={{
            activeTintColor: "#6666ff",
            inactiveTintColor: "#000",
            activeBackgroundColor: "#ccccff",
          }}
        >
          <Tabs.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused, color, size }) => <Icon name="home" size={size ? size : 24} color={focused ? color : "red"} focused={focused} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Categories"
            component={Categories}
            options={{
              tabBarIcon: ({ focused, color, size }) => <Icon name="thumbnails" size={size ? size : 24} color={focused ? color : "red"} focused={focused} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Reminder"
            component={Reminder}
            options={{
              tabBarIcon: ({ focused, color, size }) => <Icon name="clipboard-pencil" size={size ? size : 24} color={focused ? color : "red"} focused={focused} color={color} />,
            }}
          />
          <Tabs.Screen
            name="Saved"
            component={Saved}
            options={{
              tabBarIcon: ({ focused, color, size }) => <Icon name="heart" size={size ? size : 24} color={focused ? color : "red"} focused={focused} color={color} />,
            }}
          />
        </Tabs.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
    marginTop: "20px",
  },
  safeArea: {
    flex: 1,
  },
  asdasd: {
    flex: 1,
    backgroundColor: "red",
    justifyContent: "center",
    alignItems: "center",
  },
});
