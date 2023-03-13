import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const  CustomInputUsername = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput value={value} 
              onChangeText={setValue}
              placeholder={placeholder} 
              style={styles.input}
              name='username'
              autoCaptalize="none"
              /* This is for passwords */
              secureTextEntry={secureTextEntry}
              >
                
              </TextInput>
              
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F4F4',
        width: '100%',
        height: '7%',
        borderColor: '#f5f4f4',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10
    },

    input: {},

});
export default CustomInputUsername;