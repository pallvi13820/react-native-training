import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { bottomarrow, countryadd, emailaddress, num, smile } from '@/assets';
import CountryPicker from 'react-native-country-picker-modal';
import RidebookingCompo from './RidebookingCompo';

const RideBooking = ({ navigation }) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');

  const [countryName, setCountryName] = useState('America');
  const [phone, setPhone] = React.useState('');
  const [countryCode, setCountryCode] = useState('US');
  const [countryPhoneCode, setCountryPhoneCode] = useState('1');
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [text, setText] = useState();

  const onSelectCountry = country => {
    setCountryCode(country.cca2);
    setCountryPhoneCode(country?.callingCode[0]);
    setCountryName(country?.name);
    setIsVisible(true);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: '#FFF', flex: 1, paddingHorizontal: 20 }}>
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
            <View
              style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}
            >
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
            onPress={() => setOpenModal(true)}
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
    
      <Modal visible={openModal}>
      <View style={{ marginVertical: 80, alignItems: 'center',backgroundColor:'pink' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              alignSelf: 'center',
              left: 20,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              marginHorizontal: 20,
            }}
          >
            Give Rate & Review to
          </Text>
          <Image style={{}} source={require('../assets/images/cross.png')} />
        </View>

        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
            }}
          >
            your driver
          </Text>
          <Image
            style={{ alignItems: 'center', marginTop: 10, alignSelf: 'center' }}
            source={require('../assets/images/face.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              paddingVertical: 10,
            }}
          >
            Jack Aranda
          </Text>
          <Image
            style={{ alignItems: 'center', alignSelf: 'center' }}
            source={require('../assets/images/star.png')}
          />

          <TextInput
            placeholder="Your feedback type here"
            styles={styles.input}
            onChangeText={setText}
            value={text}
            style={{
              height: '28%',
              width: 300,
              marginVertical: 20,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
          />
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#00008B',
                width: '48%',
                height: 50,
                position: 'absolute',
                bottom: 1,
                alignSelf: 'center',
                borderRadius: 13,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginVertical: 10,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      </Modal>
    </View>
  );
};

export default RideBooking;

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


