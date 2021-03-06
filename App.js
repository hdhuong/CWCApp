import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthStackScreen from "./navigation/AuthStack";
const AppStack = createStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <AuthStackScreen />
    </NavigationContainer>
  );
}
