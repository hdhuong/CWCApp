import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import OnboardingScreen from "../screens/Onboarding";
import LoginScreen from "../screens/Login";
import SignUp from "../screens/SignUp";

const AuthStack = createStackNavigator();

const AuthStackScreen = ({ navigation }) => {
  return (
    <AuthStack.Navigator headerMode="none">
      <AuthStack.Screen
        name="Onboarding"
        component={OnboardingScreen}
      ></AuthStack.Screen>
      <AuthStack.Screen name="Login" component={LoginScreen}></AuthStack.Screen>
      <AuthStack.Screen name="SignUp" component={SignUp}></AuthStack.Screen>
    </AuthStack.Navigator>
  );
};

export default AuthStackScreen;
