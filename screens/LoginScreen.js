
import React, { useState, useEffect } from "react";
import Logo from "../assets/grafik1.png";
import {
  StyleSheet,
  Text,
  View,
  Image,
  useWindowDimensions,
  Platform,
  Pressable,
  TouchableOpacity,
  Alert
} from "react-native";
import { StatusBar } from "expo-status-bar";
import Feather from 'react-native-vector-icons/Feather';
import * as LocalAuthentication from 'expo-local-authentication';
import axios from "axios";
import FingerPrintButton from "../custom_buttons/fingerprint_button";
import LoginButton from "../custom_buttons/login_button";
import CustomInput from "../extras/custominput";
// import AccountScreen from "./Accounts"
import SignUpButton from "../custom_buttons/signup_button"
// import actions from './Redux/actions';
// import {NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from "@react-navigation/stack";
// import SignUp from "./SignUpScreen";
import HomeScreen from "./HomeScreen";
import MainTabScreen from "./MainTabScreen";
import SignUpScreen from "./SignUpScreen";
import CustomInputUsername from "../extras/custominputusername";
import { ScrollView } from "react-native-gesture-handler";


function LoginScreen(props, onAuthenticate) {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false);
  const { height } = useWindowDimensions();
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");


   const [users, setUsers] = useState("")

   //Creating an object for 
    React.useEffect(()=>{
     console.log(props.params, "params")
     console.log(props, "props")
     const {params} = props;
     console.log(params, "des")
     axios.get("https://63ecdf8b31ef61473b2b100b.mockapi.io/Signup")
     .then((res)=>{
       setUsers(res)
     })
     console.log(users, "eeeee");
    },[])

  //Button for signin
  const onSignInPressed = async() => {
    const user={
      username:username,
      password:password
    }
    try{
      console.log(user, "login user")
      axios.get("https://63ecdf8b31ef61473b2b100b.mockapi.io/Signup")
      .then((res)=>{
      console.log(res.data, "detail");
      const theUser = res.data.find((user)=>user.username === username && user.password === password)
      console.log(theUser, "the user")
      if(theUser){
          console.log("logged in")
          props.navigation.navigate("HomeScreen", res)
      }else{
          Alert.alert('Wrong Credentials', 'Input the correct credentials', [
           {
              text: 'Cancel',
              onPress: () => console.log('Cancel Pressed'),
              style: 'cancel',
            },
            {text: 'OK', onPress: () => console.log('OK Pressed')},
          ]);
          console.log("Invalid credentials")
          return false
        }
      })
      .catch(err=>console.log(err, "The error"))
    }
    catch(err){
     console.log(err, "error")
    }   
  };

  //SignUpTextPressed
  const onSignUpPressed = () => {
    console.warn("Signup Now");
    props.navigation.navigate("SignUpScreen");
  };

 
  //For face detection or fingerprintscan
  useEffect(() => {
    (async () => {
      const compatible = await LocalAuthentication.hasHardwareAsync();
      setIsBiometricSupported(compatible);
    })();
  });

  const alertComponent = (title, mess, btnTxt, btnFunc) => {
    return Alert.alert(title, mess, [
      {
        text: btnTxt,
        onPress: btnFunc,
      }
    ]);
  };

  const TwoButtonAlert = () =>
  Alert.alert('Welcome',[
    {
      text: 'Back',
      onPress: () => console.log('Cancel'),
      style: 'cancel'
    },
    {
      text: 'Ok', onPress: () => console.log('Ok Pressed')
    },
  ]);

  const handleBiometricAuth = async () => {
    //Check if hardware supports biometric
    const isBiometricAvailable = await LocalAuthentication.hasHardwareAsync();

    //fall back to default authentication method (password) if biometric is not available
    if(isBiometricAvailable)
    return alertComponent(
      'Please enter your password',
      'Biometric Auth not supported',
      'Ok',
      () => LoginScreen
    );

    //Check biometric types available (fingerprint, facial recognition, iris recognition)
    let supportedBiomtrics;
    if (isBiometricAvailable)
       supportedBiomtrics = await LocalAuthentication.supportedAuthenticationTypesAsync();
    
       //check if biometrics are saved locally in user's device
       const savedBiometrics = await LocalAuthentication.isEnrolledAsync();
       if(!savedBiometrics)
       return alertComponent(
        'Biometric record not found',
        'Please Login with passowrd',
        'Ok',
        () => LoginScreen
       );

      //authenticate with biometrics
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        cancelLabel: 'cancel',
        disableDeviceFallback: true,
      });

      //Log the user in success
      if(biometricAuth) {TwoButtonAlert()};
      console.log({isBiometricAvailable});
      console.log({supportedBiomtrics});
      console.log({savedBiometrics});
      console.log({biometricAuth});
      props.navigation.navigate("AccountScreen");
  };


  //Username Handling
  const handleUsername=(value)=>{
  console.log("stuff");
  console.log(value, "val");
  setUsername(value)
  };

  //Password handling
  const handlePassword=(value)=>{
    console.log(value, "pass")
    setPassword(value)
  }

 
  // const [data, setData] = React.useState({
  //   username: '',
  //   password: '',
  //   check_textInputChange: false,
  //   secureTextEntry: true
  // });
return (
    <View style={styles.root}>
      <ScrollView showsVerticalScrollIndicator={false}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.wlcm}>Welcome Back {username}</Text>
      <Text>Username</Text>
      <CustomInputUsername
        placeholder="Username"
        value={username}
        autoCapitalize="none"
        setValue={handleUsername}
      />

      <Text>Password</Text>
      <CustomInput
        placeholder="Password"
        value={password}
        setValue={handlePassword}
        secureTextEntry={true}
      />
      
      {/* The button and onPressed */}
     
     <View style={styles.arrSignUpBtn}>
      <View style={styles.arrangebtn}>
        <LoginButton text="Login" onPress={onSignInPressed} component={MainTabScreen} />
        <FingerPrintButton onPress={handleBiometricAuth} />
      </View>
      <TouchableOpacity style={styles.sub} onPress={() => {}}>
       <SignUpButton text="Create Account" component={SignUpScreen} style={
        styles.subB} onPress={()=>props.navigation.navigate('Signup')}/></TouchableOpacity>
       </View>
       </ScrollView>
      </View>
    
  );
}

const styles = StyleSheet.create({
  root: {
    backgroundColor: "#fff",
    padding: 20,
    paddingTop: Platform.OS === "android" ? 60 : 0,
  },
  subB: {
    
  },
  logo: {
    resizeMode: "contain",
    alignSelf: "center",
    width: "60%",
    maxWidth: 200,
    maxHeight: 80,
    marginTop: 40,
    marginBottom: 20,
  },

  arrangebtn: {
    height: 30,
    justifyContent: "space-between",
    flex: 1,
    flexDirection: "row",
  },
  wlcm: {
    paddingTop: 20,
    paddingBottom: 20,
    fontSize: 20,
  },
  arrSignUpBtn: {
    flex: 1,
    flexDirection: 'column',
  },
  sub: {
    marginBottom: 60
  }
});

export default LoginScreen;
