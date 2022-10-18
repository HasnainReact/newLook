import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React from 'react'

const Button = (props) => {
  return (
<View style={[styles.center, styles.loginBtnCon]}>
        <TouchableOpacity
          style={[styles.loginbtn, styles.center]}
          >
          <Text style={styles.btnTxt}>{props.heading}</Text>
        </TouchableOpacity>
      </View>
  )
}

export default Button
const styles=StyleSheet.create({
    loginBtnCon: {
        height: '5%',
        backgroundColor: '#FFFFFFaa',
        // paddingTop: 10,
        justifyContent: 'flex-start',
        justifyContent: 'center',
    alignItems: 'center',
      },
      loginbtn:{
        width: "40%",
    height: "85%",
    borderRadius: 8,
    backgroundColor: '#E8E8E8',
    justifyContent: 'center',
    alignItems: 'center',

      },
      btnTxt: {
        fontSize: 22,
        color: '#030303',
        fontWeight:'bold',
      },
})