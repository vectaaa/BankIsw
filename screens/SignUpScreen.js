
import React, { useState } from "react";
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
} from "react-native";

import { StatusBar } from "expo-status-bar";
import Feather from 'react-native-vector-icons/Feather';
import axios from "axios";
// import { useSelector, useDispatch } from "react-redux";
// import { loginUser, setPassword } from "./Redux/actions";
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
import LoginScreen from "./LoginScreen";
import CustomInputUsername from "../extras/custominputusername";



function SignUpScreen(props) {
  const { height } = useWindowDimensions();
     const [password, setPassword] = useState("");
     const [username, setUsername] = useState("");

    React.useEffect(()=>{

    },[])

 //Button for signin
  const onSignInPressed = async() => {
    try{
        const user={
        username:username,
        password:password
      }
      console.log(user, "login user")
      axios.post("https://63ecdf8b31ef61473b2b100b.mockapi.io/login", user).then((res) => console.log(res, "detail")).then(props.navigation.navigate("HomeScreen"))
      console.log(res, "detail")
      const {data} = res;
      console.log(data, "user data")
      // dispatch(loginUser(user))
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

  //FingerPrintButton
  const onFingerPrintPressed = () => {
    console.warn("Finger Biometric");
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

return (
    <View style={styles.root}>
      <Image
        source={Logo}
        style={[styles.logo, { height: height * 0.3 }]}
        resizeMode="contain"
      />
      <Text style={styles.wlcm}>Create Account{username}</Text>
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
      >
      </CustomInput>

      <Text>Confirm Password</Text>
      <CustomInput
        placeholder="Confirm Password"
        value={password}
        setValue={handlePassword}
        secureTextEntry={true}
      />
      
      {/* The button and onPressed */}
     
     <View style={styles.arrSignUpBtn}>
      <View style={styles.arrangebtn}>
        <LoginButton text="Create Account" onPress={onSignInPressed} component={LoginScreen}/>
        <FingerPrintButton onPress={onFingerPrintPressed}/>
      </View>
      <TouchableOpacity style={styles.sub} onPress={() => {}}>
       <SignUpButton text="Login" component={LoginScreen} style={
        styles.subB} onPress={()=>props.navigation.navigate('LoginScreen')}/></TouchableOpacity>
       </View>
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

export default SignUpScreen;
