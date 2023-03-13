import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';



const  CustomInput = ({value, setValue, placeholder, secureTextEntry}) => {
    //This is for the toggling between revealing  password for correction.
    const [data, setData] = React.useState({
        email: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true
     });

     const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
     }
    return (
        <View style={styles.container}>
            <TextInput value={value} 
              onChangeText={setValue}
              name='password'
              placeholder={placeholder} 
              style={styles.input}
              autoCaptalize="none"
              /* This is for passwords */
              secureTextEntry={data.secureTextEntry ? true : false}
              >
            </TextInput>
           
            <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ?
              <Feather
                name="eye-off"
                color="grey"
                size={20}
                marginVertical={13}
                /> : 
                <Feather
                name="eye"
                color="grey"
                size={20} 
                marginVertical={13}
                /> 
                }
                </TouchableOpacity>
                
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
        marginVertical: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
        input: {},
    });
export default CustomInput;