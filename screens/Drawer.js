import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DetailScreen from "./DetailScreen";
import HelpScreen from "./HelpScreen";
import MainTabScreen from "./MainTabScreen";
import RootStackScreen from "./RootStackScreen";
import SignUpScreen from "./SignUpScreen";
import LoginScreen from "./LoginScreen";
import { DetailsStackScreen } from "./MainTabScreen";
import SplashScreen from "./SplashScreen";
export const Drawer =()=>{
    const Drawer = createDrawerNavigator();
    return(
        <Drawer.Navigator initialRouteName={RootStackScreen} screenOptions={{
            drawerStyle: {
            backgroundColor: '#dc2d2d',
            width: 240,
            },
            drawerLabelStyle: {
            color: 'white',
            }}}
            >
            
           <Drawer.Screen name="SplashScreen" component={SplashScreen} options={{title:'', headerShown:false,   color: 'white', fontSize: 14}} />
            <Drawer.Screen name="Signup" component={SignUpScreen} options={{title:'', headerShown:false,   color: 'white', fontSize: 14}} screenOptions={{headerShown:false,  tabBarLabelStyle: {
               color: 'white', fontSize: 14
             }} }
             
             />
             <Drawer.Screen name="LoginScreen" component={LoginScreen} options={{title:'', headerShown:false,   color: 'white', fontSize: 14}} screenOptions={{headerShown:false,  tabBarLabelStyle: {
               color: 'white', fontSize: 14
             }} }
             
             />
            <Drawer.Screen name="HomeScreen" component={MainTabScreen} options={{headerShown:true, title:"HomeScreen", tabBarLabelStyle: {
               color: 'white', fontSize: 14
             }} }
             />
             <Drawer.Screen name="Details" component={DetailsStackScreen} onPress={() => navigation.navigate("Details")} />
             <Drawer.Screen name="Help" component={HelpScreen} />
           </Drawer.Navigator>
    )
}
