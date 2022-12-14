import {
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import SubHeading from '../components/SubHeading';
import PageName from '../components/PageName';
import Button from '../components/Button';
import {Picker} from '@react-native-picker/picker';


const OfficeUse = () => {
  const [registration, setRegistration] = useState(null);
  const [totalFee, setTotalFee] = useState(null);
  const [discount, setDiscount] = useState(null);
  const [refference, setRefference] = useState(null);
  const [firstInsta, setFirstInsta] = useState(null);
  const [secInsta, setSecInsta] = useState(null);
  const [thirInsta, setThirInsta] = useState(null);
  const reference = [
    'Friend',
    'Family',
    'Social Media',
    'Website',
    'Ads',
  ];

  return (
    <ScrollView>
      <View style={{padding: 16}}>
        <View style={{alignItems: 'center'}}>
          <PageName name="Office Use" />
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <SubHeading heading="Fee Plan :" />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Registration"
            keyboardType="number-pad"
            placeholderTextColor="grey"
            value={registration}
            onChangeText={val => setRegistration(val)}
          />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="Total Fee"
            keyboardType="number-pad"
            placeholderTextColor="grey"
            value={totalFee}
            onChangeText={val => setTotalFee(val)}
          />
          <TextInput
            style={styles.input}
            placeholder="Discount"
            keyboardType="number-pad"
            placeholderTextColor="grey"
            value={discount}
            onChangeText={val => setDiscount(val)}
          />
        </View>
        <View>
        <Picker
                style={styles.refButton}
                  selectedValue={refference}
                  onValueChange={(itemValue, itemIndex) =>
                    setRefference(itemValue)
                    
                  }>
                  <Picker.Item label="Refference" value="rfc" />
                  <Picker.Item label="Friend" value="frn" />
                  <Picker.Item label="Family" value="fml" />
                  <Picker.Item label="Social Media" value="sm" />
                  <Picker.Item label="Print Media" value="pm" />
                  <Picker.Item label="Ads" value="ad" />
                </Picker>
        </View>
        <View style={{alignItems: 'flex-start'}}>
          <SubHeading heading="Installment Plan" />
        </View>
        <View>
          <TextInput
            style={styles.input}
            placeholder="1st Instalment"
            keyboardType="number-pad"
            placeholderTextColor="grey"
            value={firstInsta}
            onChangeText={val => setFirstInsta(val)}
          />
          <View>
            <TextInput
              style={styles.input}
              placeholder="2nd Installment"
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={secInsta}
              onChangeText={val => setSecInsta(val)}
            />
          </View>
          <View>
            <TextInput
              style={styles.input}
              placeholder="3rd Installment"
              keyboardType="number-pad"
              placeholderTextColor="grey"
              value={thirInsta}
              onChangeText={val => setThirInsta(val)}
            />
          </View>
          <TouchableOpacity>
            <Button name="Save" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default OfficeUse;

const styles = StyleSheet.create({
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
  refButton: {
    backgroundColor: '#F6F6F6',
    borderRadius: 8,
    width: 180,
    height: 45,
    borderWidth: 1,
    borderColor: '#E8E8E8',
    marginBottom: 12,
    marginRight: 5,
  },
});
