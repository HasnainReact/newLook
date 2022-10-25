import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AdmissionForm from './src/screens/AdmissionForm';
import InquiryForm from './src/screens/InquiryForm';
import Button from './src/components/Button';
import DatrePicker from './src/screens/DatePicker';
import Education from './src/screens/Education';
import OfficeUse from './src/screens/OfficeUse';
import NewInput from './src/screens/NewInput';

const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    <View>
      <Home/>
    </View>

    // <NavigationContainer>
    //       <Stack.Navigator>
    //   <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
    //   <Stack.Screen options={{headerShown:false}} name="Inquiry Form" component={InquiryForm}/>
    //   <Stack.Screen options={{headerShown:false}} name="Admission Form" component={AdmissionForm}/>
    //   <Stack.Screen options={{headerShown:false}} name="Education Form" component={Education}/>
    //   </Stack.Navigator>
    // </NavigationContainer>
  )
}

export default App