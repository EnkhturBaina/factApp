import React from "react";
import { StyleSheet, Text, View, StatusBar, Platform, SafeAreaView } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "./src/screens/Home";
import Login from "./src/screens/Login";
import Reminder from "./src/screens/Reminder";
import { AnimatedTabBarNavigator } from "react-native-animated-nav-tab-bar";
import Icon from "react-native-vector-icons/Feather";

import { Ionicons } from "@expo/vector-icons";
import Categories from "./src/screens/Categories";
const STATUS_BAR_HEIGHT = Platform.OS === "ios" ? 10 : StatusBar.currentight;

function StatusBarPlaceHolder() {
  return (
    <View
      style={{
        width: "100%",
        height: STATUS_BAR_HEIGHT,
      }}
    >
      <StatusBar
        barStyle="dark-content"
        // dark-content, light-content and default
        hidden={false}
        //To hide statusBar
        backgroundColor="#fff"
        //Background color of statusBar only works for Android
        translucent={false}
        //allowing light, but not detailed shapes
        networkActivityIndicatorVisible={true}
      />
    </View>
  );
}

const Tabs = AnimatedTabBarNavigator();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }} forceInset={{ top: "never" }}>
      <NavigationContainer>
        <StatusBarPlaceHolder />
        {/* <Stack.Navigator initialRouteName="Home"> */}
        {/* <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} /> */}
        {/* <Tabs.Navigator
        tabBarOptions={{
          activeTintColor: "#2F7C6E",
          inactiveTintColor: "#222222",
        }}
      >
        <Tabs.Screen name="Home" component={Home} />
        <Tabs.Screen name="Login" component={Login} />
        <Tabs.Screen name="Reminder" component={Reminder} />
      </Tabs.Navigator> */}
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === "Home") {
                iconName = focused ? "ios-home" : "ios-home";
              } else if (route.name === "Login") {
                iconName = focused ? "ios-list-box" : "ios-list";
              } else if (route.name === "Reminder") {
                iconName = focused ? "ios-help-circle" : "ios-help-circle-outline";
              } else if (route.name === "Categories") {
                iconName = focused ? "ios-grid" : "md-grid";
              }
              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "tomato",
            inactiveTintColor: "gray",
          }}
        >
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Login" component={Login} />
          <Tab.Screen name="Reminder" component={Reminder} />
          <Tab.Screen name="Categories" component={Categories} />
        </Tab.Navigator>
        {/* </Stack.Navigator> */}
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
});
