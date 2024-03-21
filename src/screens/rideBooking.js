import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, { useState } from 'react';
import { bottomarrow, countryadd, emailaddress, num, smile } from '@/assets';
import CountryPicker from 'react-native-country-picker-modal';
import RidebookingCompo from './RidebookingCompo';

const rideBooking = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [countryName, setCountryName] = useState('America');
  const [phone, setPhone] = React.useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [countryPhoneCode, setCountryPhoneCode] = useState('1');
  const [isVisible, setIsVisible] = useState(false);

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    setCountryPhoneCode(country?.callingCode[0]);
    setCountryName(country?.name);
    setIsVisible(true);
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFFF', paddingHorizontal: 20 }}>
      <View
        style={{ flexDirection: 'row', marginTop: 55, alignItems: 'center' }}
      >
        <View
          style={{
            width: 42,
            height: 42,
            borderRadius: 30,
            backgroundColor: '#FFFF',
            alignItems: 'center',
            justifyContent: 'center',
            elevation: 5,
          }}
        >
          <Image
            source={require('../assets/images/backArrow.png')}
            style={{
              marginHorizontal: 10,
              height: 15,
              width: 12,
              resizeMode: 'contain',
            }}
          />
        </View>
        <Text
          style={{
            marginLeft: 20,
            fontSize: 26,
            color: '0F0F0F',
            fontWeight: 'bold',
          }}
        >
          Edit Information
        </Text>
      </View>
      <View style={{ marginTop: 30 }}>
        <RidebookingCompo
          label="FULL NAME"
          value={name}
          onChangeText={name => setName(name)}
          icon={smile}
          placeholder="Johan Sumith"
        />

        <RidebookingCompo
          label="EMAIL ADDRESS"
          value={email}
          onChangeText={email => setEmail(email)}
          icon={emailaddress}
          placeholder="hello758@gmail.com"
        />

        <TouchableOpacity
          style={styles.countryPickerView}
          onPress={() => setIsVisible(true)}
        >
          <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <CountryPicker
              visible={isVisible}
              onSelect={onSelectCountry}
              countryCode={countryCode}
              withCallingCode={true}
              withFilter={true}
            />

            <Text style={styles.countryText}>{countryName}</Text>
          </View>

          <Image source={bottomarrow} style={styles.bottomarrowimg} />
        </TouchableOpacity>

        <View style={styles.phoneNumberView}>
          <TouchableOpacity onPress={() => setIsVisible(true)}>
            <Text
              style={{
                fontSize: 18,
                color: '#0F0F0F',
              }}
            >
              +{countryPhoneCode}
            </Text>
          </TouchableOpacity>

          <TextInput
            maxLength={10}
            placeholder={'7850025674'}
            keyboardType={'numeric'}
            style={{
              backgroundColor: 'transparent',
              height: 70,
            }}
            value={phone}
            onChangeText={text => setPhone(text)}
          />
        </View>
      </View>
      <View>
        <TouchableOpacity
       onPress={() =>
        navigation.navigate('ModalUi')
      }
          style={{
            backgroundColor: 'blue',
            width: '55%',
            height: 60,
            position: 'absolute',
            top: 160,
            left: 80,
            borderRadius: 13,
          }}
        >
          <Text
            style={{
              color: 'white',
              justifyContent: 'space-between',
              marginTop: 10,
              alignSelf: 'center',
              fontSize: 20,
            }}
          >
            Update
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default rideBooking;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  dropDownView: {
    paddingVertical: 4,
    paddingHorizontal: 2,
  },
  countryPickerView: {
    // width: '92%',
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    borderRadius: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 15,
    paddingVertical: 9,
    paddingHorizontal: 15,
    marginVertical: 20,
  },
  countryText: {
    color: 'black',
  },
  bottomarrowimg: {
    right: 15,
    height: 12,
  },
  phoneNumberView: {
    width: '92%',
    height: 50,
    borderWidth: 1,
    borderColor: 'black',
    alignSelf: 'center',
    padding: 10,
    paddingVertical: 9,
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
});
