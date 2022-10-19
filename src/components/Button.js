import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Button(props) {
    return (
        <View style={styles.primaryBtn}>
            <Text style={styles.primaryBtnTxt}>{props.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    primaryBtn: {
        backgroundColor: '#11afe5',
        borderRadius: 100,
    },
    primaryBtnTxt: {
        color: '#FFFFFF',
        fontSize: 20,
        fontFamily: 'Inter-Regular',
        fontWeight: '600',
        paddingVertical: 16,
        textAlign: 'center'
    }
})