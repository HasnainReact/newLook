import { View, Text,StyleSheet,ImageBackground } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import AdmissionForm from './src/screens/AdmissionForm';
import DatePicker from './src/screens/DatePicker';
import InquiryForm from './src/screens/InquiryForm';
import Button from './src/components/Button';
const Stack = createNativeStackNavigator();

const App = () => {
  
  return (
    // <View>
    //   <AdmissionForm/>
    // </View>

    <NavigationContainer>
          <Stack.Navigator>
      <Stack.Screen options={{headerShown:false}} name="Home" component={Home}/>
      <Stack.Screen options={{headerShown:false}} name="Inquiry Form" component={InquiryForm}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App