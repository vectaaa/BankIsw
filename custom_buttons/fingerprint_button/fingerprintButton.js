import { View, Text, StyleSheet, Pressable, Image} from 'react-native'
import React from 'react'
import Icon from '../../assets/fingerprint.png'

const fingerprintbutton = ({onPress, text}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
     <Image source={Icon}></Image>
    </Pressable>
  )
}
const styles =  StyleSheet.create({
    container: {
        backgroundColor: '#9ea6b7',
        height: 60,
        width: '15%',
        padding: 15,
        marginVertical: 5,
        alignItems: 'center',
        borderRadius: 5,
    },
    text: {
     color:'white',
     fontWeight: 'bold'
    },
});
export default fingerprintbutton