import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Category = ({account, balance}) => {
  return (
    <View>
      <View style={{padding: 20}}>
        <View style={{height: 90, width: 200, backgroundColor: '#f5f4f4', shadowOffset: {width: 1, height: 1}, shadowColor: '#333',
        shadowOpacity: 0.3 }}>
        <Text style={{paddingLeft: 20, paddingTop: 20, fontSize: 15, color: '#989797'}}>{account}</Text>
        <Text style={{paddingLeft: 20, fontSize: 15, color: '#989797'}}>{balance}</Text>
        </View>
        </View>

    </View>
    
  )
}

export default Category