import { View, Text, StyleSheet, Pressable } from 'react-native'
import React from 'react'

const signupbutton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{text}</Text>
    </Pressable>
  )
}
const styles =  StyleSheet.create({
  container: {
      backgroundColor: 'transparent',
      height: 60,
      width: '80%',
      padding: 15,
      marginVertical: 5,
      alignItems: 'center',
      borderRadius: 5,
      borderColor: '#9ea6b7',
      borderWidth: 1
  },
  text: {
   color:'#9ea6b7',
   fontWeight: 'bold'
  },
});
export default signupbutton