import React from 'react';
import {View, Text, StyleSheet,Button, StatusBar} from 'react-native';

const HelpScreen = ({ navigation }) => {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <Text>Help Screen</Text>
        {/* <Button
          title="Go to details screen again"
          onPress={() => navigation.push("Details")}
        /> */}
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


export default HelpScreen;

