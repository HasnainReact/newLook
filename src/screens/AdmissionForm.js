import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  Dimensions,
  StatusBar,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PERMISSIONS, request} from 'react-native-permissions';
import SubHeading from '../components/SubHeading';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../components/Button';
import PrimaryBtn from '../components/Button';

const AdmissionForm = ({navigation}) => {
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
  const [fathName, setFathName] = useState(null);
  const [fathMobile, setFathMobile] = useState(null);
  const [riligion, setRiligion] = useState(null);

  // const [imgy,setImgy] = useState('uri=https://www.kindpng.com/imgv/ToowwJJ_avatar-profile-hd-png-download/')
  // const accessGallary=()=>{
  //   request(PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE)
  //   ImagePicker.openPicker({
  //     compressImageMaxWidth:Dimensions.get('window').height*0.15,
  //     compressImageMaxHeight: Dimensions.get('window').width*.26,
  //     cropping: true
  //   }).then(image => {
  //     console.log(image);
  //     setImgy(image.path)
  //   });
  // }

  const courses = [
    'Web Development',
    'App Development',
    'Graphic Designing',
    'WordPress Development',
    'Digital Marketing',
    'Software Quality Assurance',
  ];
  const batch = [
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
  const religion = ['Islam', 'Christian', 'Hindu', 'Sikh', 'Others'];

  return (
    <SafeAreaView>
      <StatusBar backgroundColor="#8BD2ED" />

      <ScrollView>
        {/* <View style={styles.formHeader}>
        <Image
          source={require('../Images/icrLogo.png')}
          style={styles.icrLogo}></Image>
        <SubHeading heading="Admission Form"/>
      </View> */}
        <View style={styles.listView}>
          <SubHeading heading="Admission Form" />
          <View style={styles.formView}>
            {/* <TouchableOpacity onPress={()=>accessGallary()}>
              <View style={styles.imgForm}>
                <Image
                  style={styles.imgForm}
                  source={{uri:imgy}}/>
              </View>
            </TouchableOpacity> */}
            <View style={styles.formTop}>
              <View>
                <Text style={styles.contactName}>Course Details:</Text>
              </View>
              {/* <View style={styles.tagView}>
                <View>
                  <Text style={styles.subTxt}>Course Name:</Text>
                </View>
              </View> */}
              <View style={{marginTop: 10}}>
                <SelectDropdown
                  buttonStyle={styles.courseButton}
                  defaultButtonText={'Select Course'}
                  buttonTextStyle={{
                    fontFamily: 'Inter-Regular',
                    fontSize: 14,
                    textAlign: 'left',
                  }}
                  rowTextStyle={{fontSize: 14}}
                  data={courses}
                  onSelect={(selectedItem, index) => {
                    setCourseName(selectedItem);
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
          </View>
          <View style={styles.shiftView}>
            <SelectDropdown
              buttonStyle={styles.batchButton}
              defaultButtonText={'Select Batch'}
              buttonTextStyle={{
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
              rowTextStyle={{fontSize: 14}}
              data={batch}
              onSelect={(selectedItem, index) => {
                setBatchNo(selectedItem);
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
            <SelectDropdown
              buttonStyle={styles.batchButton}
              defaultButtonText={' Shift'}
              buttonTextStyle={{
                fontFamily: 'Inter-Regular',
                fontSize: 14,
                textAlign: 'left',
              }}
              rowTextStyle={{fontSize: 14}}
              data={shifts}
              onSelect={(selectedItem, index) => {
                setShift(selectedItem);
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
          <View style={styles.container}>
            <View style={{alignItems: 'flex-start'}}>
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
            <View style={styles.shiftView}>
              <SelectDropdown
                buttonStyle={styles.batchButton}
                defaultButtonText={' Gender'}
                buttonTextStyle={{
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
                rowTextStyle={{fontSize: 14}}
                data={genders}
                onSelect={(selectedItem, index) => {
                  setGender(selectedItem);
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
              <SelectDropdown
                buttonStyle={styles.batchButton}
                defaultButtonText={' Religion'}
                buttonTextStyle={{
                  fontFamily: 'Inter-Regular',
                  fontSize: 14,
                  textAlign: 'left',
                }}
                rowTextStyle={{fontSize: 14}}
                data={religion}
                onSelect={(selectedItem, index) => {
                  setRiligion(selectedItem);
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
              placeholder="CNIC No"
              place
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={cnic}
              onChangeText={val => setCnic(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Date of Birth"
              place
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={dob}
              onChangeText={val => setDob(val)}
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
          <View>
            <TextInput
              style={styles.input}
              placeholder="Father Name"
              place
              keyboardType="name-phone-pad"
              placeholderTextColor="grey"
              value={fathName}
              onChangeText={val => setFathName(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="Father Mobile No"
              place
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={fathMobile}
              onChangeText={val => setFathMobile(val)}
            />
          </View>
          <TouchableOpacity
            onPress={() => navigation.navigate('Education Form')}>
            <Button name="Next" />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AdmissionForm;

const styles = StyleSheet.create({
  listView: {
    // backgroundColor:'pink',
    padding: 15,
  },
  formHeader: {
    height: Dimensions.get('window').height * 0.15,
    width: '100%',
    backgroundColor: '#8BD2ED',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomRightRadius: 15,
    borderBottomLeftRadius: 15,
    borderColor: '#2680BE',
    borderWidth: 1.5,
  },
  icrLogo: {
    height: 50,
    width: 50,
  },
  formView: {
    height: 120,
    // width:"100%",
    flexDirection: 'row',
    // justifyContent:'',
    // backgroundColor:'grey',
    // alignItems:'center',
  },
  imgForm: {
    height: Dimensions.get('window').height * 0.15,
    width: Dimensions.get('window').width * 0.26,
    borderRadius: 150 / 2,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#8BD2ED',
    // marginLeft:10,
  },
  formTop: {
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.8,
    // backgroundColor:'pink',
    marginTop: 5,
    // justifyContent:'space-evenly',
    // alignContent:'center',
  },
  contactName: {
    fontSize: 20,
    color: 'black',
    fontWeight: 'bold',
  },
  tagView: {
    flexDirection: 'row',
    alignContent: 'center',
    // backgroundColor:'pink',
  },
  subTxt: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#030303',
  },
  courseButton: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    width: 190,
    height: 44,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 12,
    marginRight: 5,
  },
  shiftView: {
    height: 40,
    width: '100%',
    // backgroundColor:'pink',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginBottom: 10,
  },
  batchButton: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    width: 120,
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
  loginBtnCon: {
    height: '5%',
    backgroundColor: '#FFFFFFaa',
    // paddingTop: 10,
    justifyContent: 'flex-start',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginbtn: {
    width: '40%',
    height: '85%',
    borderRadius: 8,
    backgroundColor: '#8BD2ED',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTxt: {
    fontSize: 22,
    color: '#030303',
    fontWeight: 'bold',
  },
});
