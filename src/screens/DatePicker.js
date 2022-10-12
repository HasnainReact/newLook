import { View, Text } from 'react-native'
import React from 'react'
import DateTimePicker from '@react-native-community/datetimepicker';


const DatePicker = () => {

    setDate = (event, date) => {};

  return (
    <View style={{justifyContent:'center',alignContent:'center',backgroundColor:'yellow'}}>
        <Text style={{alignSelf:'center'}}>Slect Date</Text>
      <DateTimePicker
      
      display='calendar'
          value={new Date()}
          dateFormat='day month year'
          maximumDate={new Date(2300, 10, 20)}
          minimumDate={new Date(1950, 0, 1)}
          positiveButtonLabel="OK"
          negativeButtonLabel="Cancel"
          />
    </View>
  )
}

export default DatePicker