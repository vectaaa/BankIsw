import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
// import New from './assets/buyairtime.png'

const CirlceCard = (props) => {
  return (
    <View style={styles.parentview}>
 <View style={styles.CirlceCard}>
     
     {props.children}
        </View>
        <View style={styles.textArrange}>
        <Text style={styles.text}>{props.textImage}</Text>
        </View>
       
    </View>
   
  )
}

const styles = StyleSheet.create({
    CirlceCard: {
        width: 60,
        height: 60,
        border: '',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 150/2,
        backgroundColor: 'white',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3, 
        elevation: 8
    },
    parentview:{
      display: 'flex',
      flexDirection: 'column',
    },
    text:{
      color: 'black',
      fontSize: 12,
      justifyContent: 'center',
      alignItems: 'center'
      
    },
    textArrange:{
      justifyContent: 'space-evenly',
      alignItems: 'center',
      paddingTop: 8 
      
    }
})

export default CirlceCard