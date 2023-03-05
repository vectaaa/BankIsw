import React from 'react';
import {View, Text, StyleSheet,Button, StatusBar} from 'react-native';

const DetailScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Detail Screen</Text>
        <Button
          title="Go to details screen again"
          onPress={() => navigation.push("Details")}
        />
        <Button title="Go to home" onPress={() => navigation.navigate("Home")} />
        <Button title="Go to back" onPress={() => navigation.goBack()} />
        <Button
          title="Go to details screen"
          onPress={() => navigation.popToTop()}
        />
      </View>
    );
  };


  const styles = StyleSheet.create({
    container: {
      flex: 1, 
      alignItems: 'center', 
      justifyContent: 'center'
    },
  });


export default DetailScreen;

