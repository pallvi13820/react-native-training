import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';
import Caregiver from '@/components/Caregiver';


const Des = ({ navigation }) => {


   const[active,setActive]=useState(false) 
  return (
    <View
      style={{ flex: 1, paddingHorizontal: 16, backgroundColor: '#F0F2FF' }}
    >
      <View style={{ flexDirection: 'row', paddingTop: 10, right: 10 }}>
        <Image
          source={require('../../assets/images/img.png')}
          style={{
            height: 25,
            widht: 25,
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            fontSize: 16,
            resizeMode: 'contain',
            fontWeight: 'bold',
            color: '#77738D',
          }}
        >
          Caregivers
        </Text>
        <Image
          source={require('../../assets/images/dot.png')}
          style={{
            height: 25,
            widht: 25,
            left: 200,
            resizeMode: 'contain',
          }}
        />
      </View>

      <Text
        style={{
          color: '#393649',
          fontWeight: 'bold',
          fontSize: 30,
          resizeMode: 'contain',
          paddingTop: 15,
        }}
      >
        Secondary caregiver name
      </Text>

      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          borderRadius: 17,
          padding: 4,
        }}
      >
        <TouchableOpacity
        onPress={()=>setActive(true)}
          style={{
            backgroundColor: active ? '#4A418B' :'#FFF',
            width: '50%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: active ?'#FFFFFF':'#77738D',
              alignSelf: 'center',
              fontSize: 18,
            }}
          >
            General
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
         onPress={()=>setActive(false)}
          style={{
            backgroundColor: active ?'white':'#4A418B',
            width: '50%',
            height: 50,
            borderRadius: 15,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              color: active ?'#77738D':'#FFFFFF',
              fontSize: 18,
            }}
          >
            Permissions
          </Text>
        </TouchableOpacity>
      </View>
     { active ?
     <>
      <Caregiver title={'Role'} work={'Primary caregiver'} />
      <Caregiver title={'Phone number'} work={'+1 (480) 555-0103'} />
      <Caregiver title={'Email'} work={'example@mail.com'} />
     </>
      :
      <>
      
      <Caregiver  title={'Allow to pass cognition stage test'} work={'Yes'} />
      <Caregiver title={'Allow reports export'} work={'Yes'} />
      <Caregiver title={'For which period should logs be displayed?'} work={'All period'} />
      </>
}
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
    </Text>

    <Text
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
    </Text>
    <Text
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
   { active ?
   <>
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
          style={{
            color: '#FAFBFF',
            left: 20,
            top: -33,
            alignSelf: 'center',
            fontSize: 16,
          }}
        >
          Call
        </Text>
      </TouchableOpacity>
      </>
      :
      <>
      <TouchableOpacity style={{
          backgroundColor: '#4A418B',
          width: '100%',
          height: 50,
          position: 'absolute',
          bottom: 20,
          right: 16,
          borderRadius: 13,
        }}>
      <Text
          style={{
            color: 'white',
            left: 10,
            top: 10,
            alignSelf: 'center',
            fontSize: 18,
          }}
        >
          Change permissions
        </Text>

      </TouchableOpacity>
      </>
}
    </View>
  );
};

export default Des;

const styles = StyleSheet.create({});
