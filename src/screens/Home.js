import {
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  StatusBar,
  FlatList,
  Image,
  Text,
} from 'react-native';
import React,{useState} from 'react';
import {styles} from '../components/CustomStyle';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';


const Home = ({navigation}) => {

  return (
    <SafeAreaView style={styles.mainFull}>
      <View style={styles.header}>
        <StatusBar backgroundColor="#8BD2ED" />
        <View style={styles.headerInputV}>
        <TouchableOpacity>
            <FontAwesome name="search"color='black' size={25} />
          </TouchableOpacity>
          <TextInput
            style={styles.txtInput}
            placeholder="Search Name" placeholderTextColor="black"></TextInput>
            <TouchableOpacity>
          <Ionicons  name='md-filter' size={25}color='black' />
          </TouchableOpacity>
        </View>
      </View>
      <View
       style={styles.listView}
       >
        <TouchableOpacity>
      <View style={styles.studentContainer}>
        <View style={styles.contactImage}>
      <Image style={styles.contactImage} source={require('../Images/cat.jpg')}>

      </Image>
      </View>
      <View style={styles.TxtBox}>
        <View style={styles.nameView}>
      <Text style={styles.contactName}>Hafiz Abdull Kareem Khan</Text>
      </View>
      <View style={styles.tagView}>
      <View style={styles.BachTag}>
      <Text style={styles.batch}>Batch 11</Text>
      </View>
      
      <View style={styles.statusTag}>
      <Text style={styles.statusTxt}>Enrolled</Text>
      </View>
      </View>
      <View style={styles.courseTag}>
      <Text style={styles.courseTxt}>Web Development</Text>
      </View>
      </View>
      </View>
      </TouchableOpacity>
      <View style={styles.studentContainer}>

      </View>
      <View style={styles.studentContainer}>

      </View>
      <View style={styles.studentContainer}>

      </View>
      <View style={styles.buttonArea}>
        <TouchableOpacity onPress={() => navigation.navigate('Inquiry Form')}>
          <AntDesign name='pluscircle' size={40}color='#070c6b'></AntDesign>
        </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
