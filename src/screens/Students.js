import { View, Text,TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { styles } from '../components/CustomStyle'

const Students = () => {
  return (
            <View style={styles.contactContainer}>
              <TouchableOpacity>
                <View style={styles.contactImage}>
                <Image style={styles.contactImage} source={require('../Images/cat.jpg')} />
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.TxtNm}>
                <Text style={styles.contactName}>Hafiz abdul Ghaffar Khan</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.courseView}>
                  <Text style={styles.courseTxt}>App Dev</Text>

                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View style={styles.batchView}>
                  <Text style={styles.courseTxt}>batch No.11</Text>

                </View>
              </TouchableOpacity>

            </View>
            
            
          
          
  )
}

export default Students