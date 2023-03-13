import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import SignUpScreen from './SignUpScreen';
import HomeScreen from './HomeScreen';
import { Drawer } from './Drawer';
import MainTabScreen from './MainTabScreen';


const RootStackScreen  = ()=>{
    const RootStack = createStackNavigator();
    return(
        <RootStack.Navigator screenOptions={{headerShown: false}}>
        <RootStack.Screen name='SplashScreen' component={SplashScreen} />
        <RootStack.Screen name='LoginScreen' component={LoginScreen}/>
        <RootStack.Screen name='SignUpScreen' component={SignUpScreen}/>
        <RootStack.Screen name='HomeScreen' component={HomeScreen}/>

        
    </RootStack.Navigator>
    )
}

export default RootStackScreen;