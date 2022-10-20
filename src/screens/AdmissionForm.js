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
import {Picker} from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import {PERMISSIONS, request} from 'react-native-permissions';
import SubHeading from '../components/SubHeading';
import ImagePicker from 'react-native-image-crop-picker';
import Button from '../components/Button';
import PrimaryBtn from '../components/Button';
import PageName from '../components/PageName';

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
          <PageName name="Admission Form" />
          <View style={styles.formView}>
            {/* <TouchableOpacity onPress={()=>accessGallary()}>
              <View style={styles.imgForm}>
                <Image
                  style={styles.imgForm}
                  source={{uri:imgy}}/>
              </View>
            </TouchableOpacity> */}
            <View style={styles.formTop}>
              <View style={{alignItems: 'flex-start'}}>
                <SubHeading heading="Course Details" />
              </View>
              {/* <View style={styles.tagView}>
                <View>
                  <Text style={styles.subTxt}>Course Name:</Text>
                </View>
              </View> */}
              <View style={{marginTop:5,}}>
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
          </View>
          <View style={styles.shiftView}>
          <Picker
                style={styles.batchButton}
                  selectedValue={batchNo}
                  onValueChange={(itemValue, itemIndex) =>
                    setBatchNo(itemValue)
                    
                  }>
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
                  onValueChange={(itemValue, itemIndex) =>
                    setShift(itemValue)
                    
                  }>
                  <Picker.Item label="Shift" value="shf" />
                  <Picker.Item label="Morning" value="mrn" />
                  <Picker.Item label="Afternoon" value="aft" />
                  <Picker.Item label="Evening" value="eve" />
                  
                </Picker>
          </View>
          <View style={styles.container}>
            <View style={{alignItems: 'flex-start', paddingBottom: 5}}>
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
            <Picker
                style={styles.batchButton}
                  selectedValue={gender}
                  onValueChange={(itemValue, itemIndex) =>
                    setGender(itemValue)
                    
                  }>
                  <Picker.Item label="Gender" value="gdr" />
                  <Picker.Item label="Male" value="ml" />
                  <Picker.Item label="Female" value="fm" />
                  
                </Picker>
                <Picker
                style={styles.batchButton}
                  selectedValue={riligion}
                  onValueChange={(itemValue, itemIndex) =>
                    setRiligion(itemValue)
                    
                  }>
                  <Picker.Item label="Religion" value="rlg" />
                  <Picker.Item label="Muslim" value="msl" />
                  <Picker.Item label="Christian" value="crs" />
                  <Picker.Item label="Hindu" value="hnd" />
                  <Picker.Item label="Sikh" value="skh" />
                  <Picker.Item label="Others" value="otr" />
                </Picker>
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
    height: 100,
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
    height: Dimensions.get('window').height * 0.13,
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
    width: "100%",
    height: 44,
    borderWidth: 1,
    borderColor: '#E8E8E8',
   
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
