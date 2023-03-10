import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function card(props) {
  return (
    <View style={styles.card}>
    <View style={styles.cardContent}>
        {props.children}
    </View>
    </View>
  )
}
const styles = StyleSheet.create({
    card: {
        borderRadius: 6,
        elevation: 3,
        backgroundColor: '#fff',
        shadowOffset: {width: 1, height: 1},
        shadowColor: '#333',
        shadowOpacity: 0.3
    },
    cardContent: {
        
    }
});

