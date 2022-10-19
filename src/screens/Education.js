import { View, Text,StyleSheet,TextInput,SafeAreaView,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import PageName from '../components/PageName'
import SubHeading from '../components/SubHeading'
import Button from '../components/Button'

const Education = () => {
    const [inputs, setInputs] = useState([{key: '', value: ''}]);
    const [otherInput, setOtherInput] = useState([{key: '', value: ''}]);

  const addHandler = ()=>{
    const _inputs = [...inputs];
    _inputs.push({key: '', value: ''});
    setInputs(_inputs);
  }
  
  const deleteHandler = (key)=>{
    const _inputs = inputs.filter((input,index) => index != key);
    setInputs(_inputs);
  }

  const inputHandler = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
    
  }
  const otherInputHandler = (text, key)=>{
    const _inputs = [...inputs];
    _inputs[key].value = text;
    _inputs[key].key   = key;
    setInputs(_inputs);
    
  }
    

  return (
    <View style={styles.container}>
      <ScrollView style={styles.inputsContainer}>
      {inputs.map((input, key)=>(
        <View style={styles.inputContainer}>
          <TextInput 
          style={styles.smallInput}
          placeholder={"Degree Name"} 
          value={input.value}  
          onChangeText={(text)=>inputHandler(text,key)}
          />
          <TextInput 
          style={styles.smallInput}
          placeholder={"Institute"} 
          value={input.value}  
          onChangeText={(text)=>otherInputHandler(text,key)}
          />

          <TouchableOpacity onPress = {()=> deleteHandler(key)}>
            <Text style={{color: "red", fontSize: 13}}>Delete</Text>
          </TouchableOpacity> 
        </View>
      ))}
      </ScrollView>
      <TouchableOpacity onPress={addHandler}>
      <Button name="Add Field" />
      </TouchableOpacity>
      {/* <Button title="Add" onPress={addHandler} /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    padding: 20,
    backgroundColor: 'white'
  },
  inputsContainer: {
    // flex: 1,
     marginBottom: 20
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: "lightgray"
  },
  smallInput: {
    backgroundColor: '#F6F6F6',
    fontFamily: 'Inter-Regular',
    marginBottom: 12,
    height:50,
    width:130,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    borderRadius: 8,
  },
})


export default Education