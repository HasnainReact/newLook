import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput
} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../components/CustomStyle';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import SubHeading from '../components/SubHeading';
import InputText from '../components/InputText';

const AdmissionForm = () => {

  setDate = (event, date) => {};

  // const [date, setDate] = useState('12-10-2022');

  //     const [imgy,setImgy] = useState('')
  //   const accessGallary=()=>{
  //     request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  //     ImagePicker.openPicker({
  //       compressImageMaxWidth: 300,
  //       compressImageMaxHeight: 300,
  //       cropping: true
  //     }).then(image => {
  //       console.log(image);
  //       setImgy(image.path)
  //     });
  //   }

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
  const religion = [
    'Islam',
    'Christian',
    'Hindu',
    'Sikh',
    'Others',

  ];


  return (
    <SafeAreaView style={{backgroundColor:"white"}}>
      <View style={styles.formHeader}>
        <Image
          source={require('../Images/icrLogo.png')}
          style={styles.icrLogo}></Image>
        <SubHeading heading="Admission Form"/>
      </View>
      <ScrollView >
        <View style={styles.listView}>
          <View style={styles.formView}>
            <TouchableOpacity>
              <View style={styles.imgForm}>
                <Image
                  style={styles.imgForm}
                  source={require('../Images/test.jpeg')}></Image>
              </View>
            </TouchableOpacity>
            <View style={styles.formTop}>
              <View>
                <Text style={styles.contactName}>Course Details:</Text>
              </View>
              <View style={styles.tagView}>
                <View>
                  <Text style={styles.subTxt}>Course Name:</Text>
                </View>
              </View>
              <SelectDropdown
                buttonStyle={styles.dropButton}
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
          <View style={styles.pesonalView}>
            <View>
              <SubHeading heading="Personal Details:"/>
            </View>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Name(Mr./Ms.):</Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Name' place keyboardType='name-phone-pad' textAlign='center'>
            </TextInput>
            </View>
            <View style={styles.shiftView}>
            <Text style={styles.subTxt}> Gender:</Text>
            <SelectDropdown
            buttonStyle={styles.bachButton}
            defaultButtonText={'Select'}
	data={genders}
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
           <Text style={styles.subTxt}> Religion:</Text>
            <SelectDropdown
            buttonStyle={styles.bachButton}
            defaultButtonText={'Select'}
	data={religion}
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
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Father's Name:</Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Name' place keyboardType='name-phone-pad' textAlign='center'>
            </TextInput>
            </View>
            <View style={styles.inputView}>
            <Text style={styles.subTxt}>Father's Mobile:</Text>
            <TextInput style={styles.inputTxt} placeholder='Enter Mobile No' place keyboardType='number-pad' textAlign='center'>
            </TextInput>
            </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionForm;
