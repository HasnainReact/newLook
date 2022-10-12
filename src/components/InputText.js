import { View, Text,StyleSheet,TextInput } from 'react-native'
import React from 'react'

const InputText = (props) => {
  return (
    <View style={styles.inputView}>
            <Text style={styles.subTxt}>{props.heading}</Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Name' place keyboardType='name-phone-pad' textAlign='center'>

            </TextInput>

            </View>
  )
}

export default InputText
const styles = StyleSheet.create({
    inputView:{
        backgroundColor:'white',
        justifyContent:'center',
        flexDirection:"row",
        alignItems:"center",

    },
    inputTxt:{
        height:"90%",
        width:"60%",
        backgroundColor:'white',
        borderBottomWidth:1,
        paddingLeft:10,
        borderBottomColor:'grey',
    },
    subTxt:{
        fontSize:17,
        fontWeight:'bold',
        color:'#030303'
      },
})