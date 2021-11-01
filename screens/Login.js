import React, { useState, useContext } from "react";

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
} from "react-native";
import FormInput from "../components/FormInput";
import FormButton from "../components/FormButton";
const LoginScreen = ({ navigation }) => {
  const [lisencePlates, setLisencePlates] = useState();
  const [password, setPassword] = useState();
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/login.png")}
        style={styles.logo}
      />
      <Text style={styles.text}>Đăng nhập</Text>
      <FormInput
        value={lisencePlates}
        placeholderText="Biển số xe"
        iconType="calendar"
        onChangeText={(licensePlates) => setLisencePlates(licensePlates)}
      />

      <FormInput
        labelValue={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
        placeholderText="Mật khẩu"
        iconType="lock"
        secureTextEntry={true}
      />

      <FormButton
        buttonTitle="Đăng nhập"
        onPress={() => login(licensePlates, password)}
      />
      <TouchableOpacity style={styles.forgotButton} onPress={() => {}}>
        <Text style={styles.navButtonText}>Quên mật khẩu ?</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate("SignUp")}
      >
        <Text style={styles.navButtonText}>
          Bạn chưa có tài khoản ? Đăng ký
        </Text>
      </TouchableOpacity>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    paddingTop: 120,
  },
  logo: {
    height: 150,
    width: 150,
    resizeMode: "cover",
  },
  text: {
    fontFamily: "Kufam-SemiBoldItalic",
    fontSize: 28,
    marginBottom: 10,
    color: "#051d5f",
  },
  navButton: {
    marginTop: 15,
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#2e64e5",
    fontFamily: "Lato-Regular",
  },
});
