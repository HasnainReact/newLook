import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function SubHeading(props) {
  return (
    <View>
        <View style={{paddingVertical: 5, justifyContent:'center',alignItems:'center'}}>
      <Text style={styles.contactName}>{props.heading}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    contactName:{
        fontSize:20,
        color:'black',
        fontWeight:'bold',
     },
})