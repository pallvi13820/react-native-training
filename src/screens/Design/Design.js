import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Caregiver from '@/components/Caregiver';

const Design = ({ navigation }) => {
  return (
    <View style={{ flex: 1, paddingHorizontal: 16 ,backgroundColor:'#F0F2FF'}}>
      <View style={{ flexDirection: 'row', paddingTop: 10, right: 10 }}>
        <Image
          source={require('../../assets/images/img.png')}
          style={{
            height: 25,
            widht: 25,
            resizeMode: 'contain',
          }}
        />
        <Text style={styles.textStyle}> Caregivers</Text>
        {/* <Image
          source={require('../../assets/images/dot.png')}
          style={{
            height: 100,
            widht: 100,
            resizeMode: 'contain',
          }}
        /> */}
        {/* <Text
          style={{
            fontSize: 16,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#77738D',
          }}
        >
          Caregivers
        </Text> */}
      </View>
     <Text style={styles.tStyle}> Primary caregiver name</Text>
      {/* <Text
        style={{
          color: '#393649',
          fontWeight: 'bold',
          fontSize: 25,
          resizeMode: 'contain',
          paddingTop: 15,
        }}
      >
        Primary caregiver name
      </Text> */}

<Caregiver title={'Role'} work={'Primary caregiver'}/>
<Caregiver title={'Phone number'} work={'+1 (480) 555-0103'}/>
<Caregiver title={'Email'} work={'example@mail.com'}/>
      {/* <Text
        style={{
          fontSize: 20,
          resizeMode: 'contain',

          color: '#393649',
          paddingTop: 10,
        }}
      >
        Role
      </Text>

      <Text
        style={{
          fontSize: 20,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#393649',
          paddingTop: 10,
        }}
      >
        Primary caregiver
      </Text> */}

      {/* <Text
        style={{
          fontSize: 15,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#77738D',

          paddingTop: 20,
        }}
      >
        Phone number
      </Text>
      <Text
        style={{
          fontSize: 20,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#393649',

          paddingTop: 10,
        }}
      >
        +1 (480) 555-0103
      </Text> */}
      {/* <Text
        style={{
          fontSize: 15,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#77738D',

          paddingTop: 20,
        }}
      >
        Email
      </Text>
      <Text
        style={{
          fontSize: 20,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#393649',

          paddingTop: 10,
        }}
      >
        example@mail.com
      </Text> */}

      <TouchableOpacity
        style={{
          backgroundColor: '#4A418B',
          width: '48%',
          height: 50,
          position: 'absolute',
          bottom: 20,
          left: 16,
          borderRadius: 13,
        }}
      >
        <Image
          style={{ alignSelf: 'center', margin: 10, right: 15 }}
          source={require('../../assets/images/icn.png')}
        />
        <Text
          style={{
            color: '#FAFBFF',
            left: 20,
            top: -33,
            alignSelf: 'center',
            fontSize: 16,
          }}
        >
          Mail
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{
          backgroundColor: '#4A418B',
          width: '48%',
          height: 50,
          position: 'absolute',
          bottom: 20,
          right: 16,
          borderRadius: 13,
        }}
      >
        <Image
          style={{ alignSelf: 'center', margin: 10, right: 15 }}
          source={require('../../assets/images/phn.png')}
        />
        <Text
          style={styles.teStyle}
        >
          Call
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Design;

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 16,
        resizeMode: 'contain',
        fontWeight: 'bold',
        color: '#77738D',
      },
      tStyle: {
        color: '#393649',
        fontWeight: 'bold',
        fontSize: 25,
        resizeMode: 'contain',
        paddingTop: 15,

      },
      teStyle: {
        color: '#FAFBFF',
            left: 20,
            top: -33,
            alignSelf: 'center',
            fontSize: 16,
      },
});
