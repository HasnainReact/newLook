import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function PageName(props) {
    return (
        <View>
            <Text style={styles.pageName}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    pageName: {
        fontFamily: "Inter-Light",
        fontWeight: 'bold',
        fontSize: 30,
        color:'black',
        alignSelf:'center'
    }
})