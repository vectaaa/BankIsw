
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StyleSheet, Text, View, Button } from "react-native";
import  React from "react";
// import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
// import HomeScreen from './screens/HomeScreen';
import MainTabScreen from './screens/MainTabScreen';
import DetailScreen from "./screens/DetailScreen";
import { DrawerContent } from "./screens/DrawerContent";
import HelpScreen from "./screens/HelpScreen";
import LoginScreen from "./screens/LoginScreen";
import RootStackScreen from "./screens/RootStackScreen";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName='LoginScreen'>
    <RootStackScreen />
      {/* <Drawer.Navigator initialRouteName='Home' screenOptions={{
       drawerStyle: {
       backgroundColor: '#dc2d2d',
       width: 240,
       },
       drawerLabelStyle: {
       color: 'white'
      }}}>
       <Drawer.Screen name="Home" component={MainTabScreen} screenOptions={{headerShown:true,  tabBarLabelStyle: {
          color: 'white', fontSize: 14
        }} }
        />
        <Drawer.Screen name="Details" component={DetailScreen} />
        <Drawer.Screen name="Help" component={HelpScreen} />
      </Drawer.Navigator> */}
      
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
