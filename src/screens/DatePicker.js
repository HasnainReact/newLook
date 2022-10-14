import { View, Text,TouchableOpacity,StyleSheet } from 'react-native'
import React,{useState} from 'react'
import Button from '../components/Button'
import Fontisto from 'react-native-vector-icons/Fontisto';
import DateTimePicker from '@react-native-community/datetimepicker';



const DatePicker = () => {
  const [date,setDate] = useState(new Date());
  const [mode,setMode] = useState('date');
  const [show,setShow] = useState(false);
  const [text,setText] = useState('D.O.B');

  const onChange = (event,setDate)=>{
    const currentDate = selectedDate || date;
    setDate(currentDate);
    let tempDate = new Date(currentDate);
    let fDate = tempDate.getDate() + '/' + (tempDate.getMonth() + 1) + '/' + tempDate.getFullYear();
    setText(fDate)
    console.log(fDate)
  }
  const showMode = (currentMode)=>{
    alert("ok")
    setShow(true);
    setMode(currentMode);
  }


  return (
    <View style={{height:"100%",justifyContent:'center',alignItems:'center'}}>
      <View style={{height:80,width:"100%",justifyContent:'center',alignItems:'center'}}>

        <Text style={{fontSize:17,fontWeight:'bold',color:'black'}}>{text}</Text>
      {/* <Fontisto name='date' size={30} color="black"/> */}
      </View>
      <View style={[styles.center, styles.loginBtnCon]}>
        <TouchableOpacity onPress={()=> showMode()}
          style={[styles.loginbtn, styles.center]}
          >
          <Text style={styles.btnTxt}>Select</Text>
        </TouchableOpacity>
      </View>
      {show && (
          <DateTimePicker
          testID='dateTimePicker'
          value={date}
          mode={mode}
          display='calendar'
          onChange={onChange}        
          />)}
    </View>
  )
}

export default DatePicker
const styles=StyleSheet.create({
  loginBtnCon: {
      height: '8%',
      backgroundColor: '#FFFFFFaa',
      // paddingTop: 10,
      justifyContent: 'flex-start',
      justifyContent: 'center',
  alignItems: 'center',
    },
    loginbtn:{
      width: "40%",
  height: "85%",
  borderRadius: 8,
  backgroundColor: '#8BD2ED',
  justifyContent: 'center',
  alignItems: 'center',

    },
    btnTxt: {
      fontSize: 22,
      color: '#030303',
      fontWeight:'bold',
    },
})