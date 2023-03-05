import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import React from 'react';
import { Touchable } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import { LinearGradient } from 'expo-linear-gradient';
// import  Icon from "react-native-vector-icons/Ionicons";
// import materialIconsReact from 'material-icons-react';



const SplashScreen = () => {
  return (
    <View style={styles.container}>
    <View style={styles.header}>
    <Image source={require('../assets/iswlogo.png')}
           style={styles.logo}
           resizeMode="stretch"
    />
     
      </View>
    <View style={styles.footer}>
        <Text style={styles.title}>Stay connected to everyone</Text>
        <Text style={styles.text}>Login with account</Text>
        <View  style={styles.button}>
        <TouchableOpacity onPress={()=>alert('Click')}>
            <LinearGradient
              colors={['#08d4c4', '#01ab9b']}
              style={styles.signIn}
            >
                <Text style={styles.textSign}>Get Started</Text>
                
            </LinearGradient>
        </TouchableOpacity>
        </View>
    </View>
    </View>
  )
}

export default SplashScreen

const {height, width} = Dimensions.get("screen");
const height_logo = height * 0.085;
const width_logo = width * 0.68;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: 'white'
      },
      header: {
          flex: 2,
          justifyContent: 'center',
          alignItems: 'center'
      },
      footer: {
          flex: 1,
          backgroundColor: '#dc2d2d',
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          paddingVertical: 50,
          paddingHorizontal: 30
      },
      logo: {
          width: width_logo,
          height: height_logo
      },
      title: {
          color: 'white',
          fontSize: 30,
          fontWeight: 'bold'
      },
      text: {
          color: 'white',
          marginTop:5
      },
      button: {
          alignItems: 'flex-end',
          marginTop: 30,


      },
      signIn: {
          width: 150,
          height: 40,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 50,
          flexDirection: 'row'
      },
      textSign: {
          color: 'white',
          fontWeight: 'bold'
          
      }
});