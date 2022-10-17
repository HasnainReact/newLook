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

const dummyData = [
  {
    id: 'Batch 1',
    title: 'Hasnain',
    status:'Enroled',
    course:'Graphic Designing',
  },
  {
    id: 'Batch 2',
    title: 'Abdullah',
    status:'Visited',
    course:'App Development',
  },
  {
    id: 'Batch 3',
    title: 'Ali',
    status:'Enroled',
    course:'Web Development',
  },
  {
    id: 'Batch 4',
    title: 'Waseem',
    status:'Visited',
    course:'Social Media Marketing',
  },
  {
    id: 'Batch 5',
    title: 'Hamza',
    status:'Enroled',
    course:'WordPress Development',
  },
  {
    id: 'Batch 6',
    title: 'Fraz',
    status:'Visited',
    course:'Sofware Assurance',
  },
];

const Home = ({navigation}) => {

  const visitorsList = ({ item }) => {
    return (
        <TouchableOpacity onPress={() => navigation.navigate()}>
            
            <View style={styles.TxtBox}>
        <View style={styles.nameView}>
      <Text style={styles.contactName}>{item.title}</Text>
      </View>
      <View style={styles.tagView}>
      <View style={styles.BachTag}>
      <Text style={styles.batch}>{item.id}</Text>
      </View>
      
      <View style={styles.statusTag}>
      <Text style={styles.statusTxt}>{item.status}</Text>
      </View>
      </View>
      <View style={styles.courseTag}>
      <Text style={styles.courseTxt}>{item.course}</Text>
      </View>
     
                {/* <View style={{ marginVertical: 10, paddingVertical: 10, backgroundColor: "#E8E8E8", borderRadius: 10, paddingHorizontal: 16 }}>
                    <Text style={{ fontFamily: "Inter-Regular", fontWeight: "600" }}>{item.title}</Text>
                    <Text style={{ fontFamily: "Inter-Regular" }}>{item.id}</Text>
                </View> */}
            </View>
        </TouchableOpacity>
    )
}

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
       style={styles.studentContainer}
       >
      <View style={styles.studentContainer}>
        {/* <View style={styles.contactImage}>
      <Image style={styles.contactImage} source={require('../Images/cat.jpg')}>

      </Image>
      </View> */}
      <View>
        <FlatList
        data={dummyData}
        renderItem={visitorsList}
        />
      </View>
      </View>
      {/* <View style={styles.studentContainer}>

      </View>
      <View style={styles.studentContainer}>

      </View>
      <View style={styles.studentContainer}>

      </View> */}
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
