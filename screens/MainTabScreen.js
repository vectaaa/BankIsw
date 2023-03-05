import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
// import { StyleSheet, Text, View, Button } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import  Icon from "react-native-vector-icons/Ionicons";
// import  Icon from "@expo/vector-icons";
import HomeScreen from "./HomeScreen";
import DetailScreen from "./DetailScreen";


const BottomTab = createMaterialBottomTabNavigator();
const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const MainTabScreen = () => (
    <BottomTab.Navigator
      initialRouteName="Home"
      activeColor="#fff"
      barStyle={{ backgroundColor: '#dc2d2d' }}
    >
      <BottomTab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#dc2d2d',
          tabBarIcon: ({ color }) => (
            <Icon name="home"  color={color} size={24} onPress={() => navigation.navigate("Home")}/>
          ),
        }}
      />
      <BottomTab.Screen
        name="Details"
        component={DetailScreen}
        options={{
          tabBarLabel: 'Details',
          tabBarColor: '#dc2d2d',
          tabBarIcon: ({ color }) => (
            <Icon name="settings"  color={color} size={24} onPress={() => navigation.navigate("Details")}/>
          ), 
        }}
        />
     </BottomTab.Navigator>
);


export default MainTabScreen;


const HomeStackScreen = ({navigation}) => {
    <HomeStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#009287',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
    }}>
      <HomeStack.Screen name="Home" component={HomeStackScreen} options={{
        title: 'Overview',
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.openDrawer()}></Icon.Button>
        )
      }}/>
    </HomeStack.Navigator>
  };
  
  const DetailsStackScreen = ({navigation}) => {
    <DetailsStack.Navigator screenOptions={{
      headerStyle: {
          backgroundColor: '#009287'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold'
        }
    }}>
      <DetailsStack.Screen name="Details" component={DetailsStackScreen} options={{
        // title: 'Overview'
        headerLeft: () => (
            <Icon.Button name="ios-menu" size={25} backgroundColor="#009387" onPress={() => navigation.navigate("Details")}></Icon.Button>
        )
      }}/>
    </DetailsStack.Navigator>
  };
  

  
  
  