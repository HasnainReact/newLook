import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  ScrollView,
  StatusBar,
  StyleSheet,
} from 'react-native';
import SubHeading from '../components/SubHeading';
import Button from '../components/Button';
import PageName from '../components/PageName';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';

const InquiryForm = () => {
  const [name, setName] = useState(null);
  const [mobileNo, setMobileNo] = useState(null);
  const [gender, setGender] = useState(null);
  const [courseName, setCourseName] = useState(null);
  const [batchNo, setBatchNo] = useState(null);
  const [email, setEmail] = useState(null);
  const [degree, setDegree] = useState(null);
  const [shift, setShift] = useState(null);
  const [cnic, setCnic] = useState(null);
  const [dob, setDob] = useState(null);
  const [Institute, setInstitute] = useState(null);

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
  const shifts = ['Morning', 'Afternoon', 'Evening'];
  const genders = ['Male', 'Female'];
  return (
    <ScrollView>
      <SafeAreaView style={{backgroundColor: 'white', padding: 16}}>
        <StatusBar backgroundColor="#8BD2ED" />
        <PageName name="Inquiry Form" />

        <View>
          <View style={{marginTop: 10, alignItems: 'center'}}>
            <SubHeading heading="Course Details:" />
          </View>

          <View style={{marginBottom: 10}}>
            <View style={{marginBottom: 10}}>
              <Text style={styles.subTxt}>Course Name:</Text>
            </View>
            <View style={{marginBottom: 10}}>
              <Picker
                style={styles.courseButton}
                selectedValue={courseName}
                onValueChange={(itemValue, itemIndex) =>
                  setCourseName(itemValue)
                }>
                <Picker.Item label="Select Course" value="sc" />
                <Picker.Item label="Web Development" value="wd" />
                <Picker.Item label="App Developement" value="ad" />
                <Picker.Item label="Digital Marketing" value="dm" />
                <Picker.Item label="Software Quality Assurance" value="sq" />
                <Picker.Item label="Graphic Designing" value="gd" />
                <Picker.Item label="SEO" value="seo" />
                <Picker.Item label="WordPress Development" value="wp" />
              </Picker>
            </View>
          </View>
          <View style={styles.shiftView}>
            <Picker
              style={styles.batchButton}
              selectedValue={batchNo}
              onValueChange={(itemValue, itemIndex) => setBatchNo(itemValue)}>
              <Picker.Item label="Batch No" value="bn" />
              <Picker.Item label="Batch# 1" value="b1" />
              <Picker.Item label="Batch# 2" value="b2" />
              <Picker.Item label="Batch# 3" value="b3" />
              <Picker.Item label="Batch# 4" value="b4" />
              <Picker.Item label="Batch# 5" value="b5" />
              <Picker.Item label="Batch# 6" value="b6" />
              <Picker.Item label="Batch# 7" value="b7" />
              <Picker.Item label="Batch# 8" value="b8" />
              <Picker.Item label="Batch# 9" value="b9" />
              <Picker.Item label="Batch# 10" value="b10" />
              <Picker.Item label="Batch# 11" value="b11" />
              <Picker.Item label="Batch# 12" value="b12" />
              <Picker.Item label="Batch# 13" value="b13" />
            </Picker>
            <Picker
              style={styles.batchButton}
              selectedValue={shift}
              onValueChange={(itemValue, itemIndex) => setShift(itemValue)}>
              <Picker.Item label="Shift" value="shf" />
              <Picker.Item label="Morning" value="mrn" />
              <Picker.Item label="Afternoon" value="aft" />
              <Picker.Item label="Evening" value="eve" />
            </Picker>
          </View>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <SubHeading heading="Personal Details:" />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Name"
              place
              keyboardType="name-phone-pad"
              placeholderTextColor="grey"
              value={name}
              onChangeText={val => setName(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Mobile No"
              place
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={mobileNo}
              onChangeText={val => setMobileNo(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Email ID"
              place
              keyboardType="email-address"
              placeholderTextColor="grey"
              value={email}
              onChangeText={val => setEmail(val)}
            />
          </View>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <SubHeading heading="Educational Details:" />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Degree Name"
              place
              keyboardType="name-phone-pad"
              placeholderTextColor="grey"
              value={degree}
              onChangeText={val => setDegree(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Institute Name"
              place
              keyboardType="name-phone-pad"
              placeholderTextColor="grey"
              value={Institute}
              onChangeText={val => setInstitute(val)}
            />
          </View>
          <Button name="Save" />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
};

export default InquiryForm;

const styles = StyleSheet.create({
  courseButton: {
    backgroundColor: '#F6F6F6',
    width: '100%',
    height: 44,
    borderWidth: 1,
    borderColor: '#E8E8E8',
  },
  subTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#030303',
  },
  shiftView: {
    height: 40,
    width: '100%',
    // backgroundColor:'pink',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 25,
  },
  batchButton: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    width: 160,
    height: 45,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 12,
    marginRight: 5,
  },
  input: {
    backgroundColor: '#F6F6F6',
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
});
