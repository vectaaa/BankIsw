
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button } from "react-native";
import  React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Drawer } from "./screens/Drawer";
// const Drawer = createDrawerNavigator();
import RootStackScreen from "./screens/RootStackScreen";
import {useState, useEffect}   from 'react';
import TouchID from 'react-native-touch-id';

export default function App() {
  // const [authenticated, setAuthenticated] = useState(false);
  // const handleAuthentication = () => {
  //   TouchID.authenticate('Authenticate with your fingerprint')
  //     .then(() => {
  //       setAuthenticated(true);
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     });
  // };
  return (
    <NavigationContainer>
    <Drawer/>
     
    {/* <RootStackScreen /> */}
     </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
