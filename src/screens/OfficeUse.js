import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Header from './Header'
import SubHeading from './SubHeading'



const OfficeUse = () => {
    return (
        <ScrollView>
            <View>
                <View>
                    <Header heading='Office Use' />
                </View>
                <View>
                    <SubHeading heading='Fee Plan ' />
                </View>
                <View style={styles.regView}>
                    <Text style={styles.txt2}>
                        Registration :
                    </Text>
                    <TextInput style={styles.txtinput1}
                        placeholder='reg.no'
                        place keyboardType='number-pad'
                        textAlign='center' />
                </View>
                <View style={styles.FeeView}>
                    <Text style={styles.txt2}>
                        Total Fee
                    </Text>
                    <TextInput style={styles.txtinput2}
                        placeholder='Total amount'
                        place keyboardType='number-pad'
                        textAlign='center' />
                    <Text style={styles.txt2}>
                        Discount
                    </Text>
                    <TextInput style={styles.txtinput3}
                        placeholder='Disc amount'
                        place keyboardType='number-pad'
                        textAlign='center' />
                </View>
                <View style={styles.refView}>
                    <Text style={styles.txt4}>Reference By: </Text>
                    <TextInput style={styles.txtInput4}
                        placeholder='reference'
                        textAlign='center' />
                </View>
                <View>
                    <SubHeading heading='Installment Plan ' />
                </View>
                <View style={styles.installmentView}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.txt3}>1st Installment</Text>
                        <TextInput style={styles.txtInput3}
                            placeholder='1st'
                            place keyboardType='number-pad'
                            textAlign='center' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.txt3}>2nd Installment</Text>
                        <TextInput style={styles.txtInput3}
                            placeholder='2nd'
                            place keyboardType='number-pad'
                            textAlign='center' />
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={styles.txt3}>3rd Installment</Text>
                        <TextInput style={styles.txtInput3}
                            placeholder='3rd'
                            place keyboardType='number-pad'
                            textAlign='center' />
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

export default OfficeUse

const styles = StyleSheet.create({

    txt1: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#030303',
        marginLeft: 15,
        marginTop: 10
    },
    regView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '9.5%',
        width: '50%',
        // backgroundColor:'red'
    },
    FeeView: {
        flexDirection: 'row',
        alignItems: 'center',
        height: '9.5%',
        width: '95%',
        // backgroundColor:'pink',
        justifyContent: 'space-evenly',
        marginLeft: 8,
    },
    txt2: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#030303',
        marginLeft: 15,
        marginTop: 10,
        textAlign: 'center'
    },
    txtinput1: {
        height: "80%",
        width: "80%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: 'grey',
    },
    txtinput2: {
        height: "80%",
        width: "30%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: 'grey'
    },
    txtinput3: {
        height: "80%",
        width: "30%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: 'grey'
    },
    instxt: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#030303',
        marginLeft: 15,
        marginTop: 10
    },
    installmentView: {
        height: '30%',
        width: '40%',
        // backgroundColor: 'red',
        marginHorizontal: 20,
        marginTop: 10,
    },
    txt3: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#030303',
    },
    txtInput3: {
        height: "80%",
        width: "100%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: 'grey'
    },
    txt4: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#030303',
        marginLeft: 8,
        marginTop: 10,
    },
    refView: {
        height: '8%',
        width: '100%',
        // backgroundColor:'pink',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 25

    },
    txtInput4: {
        height: "85%",
        width: "60%",
        backgroundColor: 'white',
        borderBottomWidth: 1,
        paddingLeft: 10,
        borderBottomColor: 'grey'
    }
})