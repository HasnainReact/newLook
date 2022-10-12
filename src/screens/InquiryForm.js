import { View, Text,SafeAreaView,TextInput,Image,ScrollView } from 'react-native'
import SelectDropdown from 'react-native-select-dropdown';
import {styles} from '../components/CustomStyle';
import SubHeading from '../components/SubHeading';


import React from 'react'
import Button from '../components/Button';

const InquiryForm = () => {
    const courses = [
        'Web Development',
        'App Development',
        'Graphic Designing',
        'WordPress Development',
        'Digital Marketing',
        'Software Quality Assurance',
      ];
      const batches = [
        'Batch# 1',
        'Batch# 2',
        'Batch# 3',
        'Batch# 4',
        'Batch# 5',
        'Batch# 6',
        'Batch# 7',
        'Batch# 8',
        'Batch# 9',
        'Batch# 10',
        'Batch# 11',
        'Batch# 12',
      ];
      const shifts = [
        'Morning',
        'Afternoon',
        'Evening',
      ];
      const genders = [
        'Male',
        'Female',
    
      ];
  return (
    <SafeAreaView style={{backgroundColor:'white'}}>
        <View style={styles.formHeader}>
        <Image
          source={require('../Images/icrLogo.png')}
          style={styles.icrLogo}></Image>
        <SubHeading heading="Inquiry Form"/>
      </View>
            <ScrollView>
            <View style={styles.listView}>
            <View>
              <SubHeading heading="Course Details:"/>
            </View>
              
                <View style={{marginLeft:10}}>
                  <Text style={styles.subTxt}>Course Name:</Text>
                </View>
                <View style={{height:"8%",width:"100%",alignItems:'center',paddingBottom:10}} >
              <SelectDropdown
                buttonStyle={styles.courseButton}
                defaultButtonText={'Select Course'}
                data={courses}
                onSelect={(selectedItem, index) => {
                  console.log(selectedItem, index);
                }}
                buttonTextAfterSelection={(selectedItem, index) => {
                  // text represented after item is selected
                  // if data array is an array of objects then return selectedItem.property to render after item is selected
                  return selectedItem;
                }}
                rowTextForSelection={(item, index) => {
                  // text represented for each item in dropdown
                  // if data array is an array of objects then return item.property to represent item in dropdown
                  return item;
                }}
              />
              </View>
              <View style={styles.shiftView}>
            <Text style={styles.subTxt}>Batch# </Text>
            <SelectDropdown
            buttonStyle={styles.bachButton}
            defaultButtonText={'Batch #'}
	data={batches}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
           />
           <Text style={styles.subTxt}> Shift: </Text>
           <SelectDropdown
            buttonStyle={styles.bachButton}
            defaultButtonText={'Shift'}
	data={shifts}
	onSelect={(selectedItem, index) => {
		console.log(selectedItem, index)
	}}
	buttonTextAfterSelection={(selectedItem, index) => {
		// text represented after item is selected
		// if data array is an array of objects then return selectedItem.property to render after item is selected
		return selectedItem
	}}
	rowTextForSelection={(item, index) => {
		// text represented for each item in dropdown
		// if data array is an array of objects then return item.property to represent item in dropdown
		return item
	}}
           />

          </View>
          <SubHeading heading="Personal Details:"/>
          <View style={styles.inputView}>
            <Text style={styles.subTxt}>Name(Mr./Ms.):</Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Name' place keyboardType='name-phone-pad' textAlign='center'>
            </TextInput>
            </View>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Mobile No: </Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Mobile No' place keyboardType='number-pad' textAlign='center'>
            </TextInput>
            </View>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Email ID: </Text>
            <TextInput style={styles.inputTxt} placeholder='example@email.com' place keyboardType='email-address' textAlign='center'>
            </TextInput>
            </View>
            <SubHeading heading="Educational Details:"/>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Degree Name:</Text>
            <TextInput style={styles.inputTxt} placeholder='Last Degree Name' place keyboardType='name-phone-pad' textAlign='center'>
            </TextInput>
            </View>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Institute Name:</Text>
            <TextInput style={styles.inputTxt} placeholder='Institute Name' place keyboardType='name-phone-pad' textAlign='center'>
            </TextInput>
            </View>
            <Button heading="Save"/>
              </View>
            
            </ScrollView>
    </SafeAreaView>
  )
}

export default InquiryForm