import React, { useState, useContext } from 'react';

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Platform,
  StyleSheet,
  ScrollView,
  Dimensions,
  TextInput,
} from 'react-native';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import FormInput from '../components/FormInput';
import FormButton from '../components/FormButton';
import { auth } from '../firebase/config';
const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    email: '',
    password: '',
    confirm_password: '',
    check_textInputChange: false,
    secureTextEntry: true,
    confirm_secureTextEntry: true,
  });

  const textInputChange = (val) => {
    if (val.length !== 0) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true,
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false,
      });
    }
  };

  const handlePasswordChange = (val) => {
    setData({
      ...data,
      password: val,
    });
  };

  const handleConfirmPasswordChange = (val) => {
    setData({
      ...data,
      confirm_password: val,
    });
  };

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const updateConfirmSecureTextEntry = () => {
    setData({
      ...data,
      confirm_secureTextEntry: !data.confirm_secureTextEntry,
    });
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome !</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <View style={styles.logoView}>
          <Image
            source={require('../assets/images/vehicle.png')}
            style={styles.logo}
          />
        </View>
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
          <FontAwesome name="calendar-minus-o" size={20} color="#05375a" />
          <TextInput
            placeholder="Nh???p bi???n s??? xe "
            style={styles.textInput}
            autoCapitalize="none"
            onChangeText={(val) => textInputChange(val)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        <Text style={[styles.text_footer, { marginTop: 35 }]}>M???t kh???u</Text>
        <View style={styles.action}>
          <Feather name="lock" size={20} color="#05375a" />
          <TextInput
            placeholder="Nh???p m???t kh???u"
            style={styles.textInput}
            autoCapitalize="none"
            secureTextEntry={data.secureTextEntry ? true : false}
            onChangeText={(val) => handlePasswordChange(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        <TouchableOpacity>
          <Text style={{ color: '#009387', marginTop: 15 }}>
            Qu??n m???t kh???u?
          </Text>
        </TouchableOpacity>
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
              loginHandle(data.email, data.password);
            }}
          >
            <LinearGradient
              colors={['#08d4c4', '#01ab9d']}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: '#fff',
                  },
                ]}
              >
                ????ng nh???p
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.forgotButton}
            onPress={() => navigation.navigate('SignUp')}
          >
            <Text>
              B???n ch??a c?? t??i kho???n ?{' '}
              <Text style={styles.navButtonText}>????ng k??</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
    </View>
  );
};
export default LoginScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a6e4d0',
  },
  logo: {
    height: 120,
    width: 120,
    resizeMode: 'cover',
  },
  logoView: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: Platform.OS === 'ios' ? 3 : 5,
    backgroundColor: '#fff',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 30,
  },
  text_footer: {
    color: '#05375a',
    fontSize: 18,
  },
  action: {
    flexDirection: 'row',
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f2f2f2',
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: '#05375a',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
  },
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  textSign: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  textPrivate: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 20,
  },
  color_textPrivate: {
    color: 'grey',
  },
  forgotButton: {
    marginVertical: 35,
  },
  navButtonText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#009387',
  },
});
