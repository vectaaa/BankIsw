import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';


const  CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    return (
        <View style={styles.container}>
            <TextInput value={value} 
              onChangeText={setValue}
              placeholder={placeholder} 
              style={styles.input}
              autoCaptalize="none"
              /* This is for passwords */
              secureTextEntry={secureTextEntry}
              >
                
              </TextInput>
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                marginVertical={13}
                />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F5F4F4',
        width: '100%',
        height: '9%',
        borderColor: '#f5f4f4',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between'

    
       
    },

    input: {},

});
export default CustomInput;