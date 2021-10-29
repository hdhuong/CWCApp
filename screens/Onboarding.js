import React from "react";
import { Alert, Button, Image, StyleSheet, Text, View } from "react-native";
import Onboarding from "react-native-onboarding-swiper";
const OnboardingScreen = ({ navigation }) => {
  return (
    <Onboarding
      onSkip={() => navigation.replace("Login")}
      onDone={() => navigation.navigate("Login")}
      pages={[
        {
          backgroundColor: "#a6e4d0",
          image: (
            <Image
              source={require("../assets/images/car.png")}
              style={styles.imageOnboard}
            />
          ),
          title: "Car Connect",
          subtitle: "Ứng dụng kết nối thông tin xe nhanh nhất ",
        },
        {
          backgroundColor: "#fdeb93",
          image: (
            <Image
              source={require("../assets/images/toy-car.png")}
              style={styles.imageOnboard}
            />
          ),
          title: "CWC Forums",
          subtitle: "Diễn đàn trao đổi thông tin xe hơi ",
        },
        {
          backgroundColor: "#e9bcbe",
          image: (
            <Image
              source={require("../assets/images/vehicle.png")}
              style={styles.imageOnboard}
            />
          ),
          title: "Car Community",
          subtitle: "Cộng đồng dành cho những tài xế ",
        },
      ]}
    />
  );
};
export default OnboardingScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageOnboard: {
    width: 160,
    height: 160,
  },
});
