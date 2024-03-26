import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';

const YourInformation = () => {
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
            color: '1A1818',
          }}
        >
          Your Information
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image
          source={require('../assets/images/yourname.png')}
          style={{
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '828282',
              marginLeft: 20,
            }}
          >
            Your Name
          </Text>
          <Text
            style={{
              fontSize: 26,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '0F0F0F',
              marginLeft: 20,
            }}
          >
            Johan Sumith
          </Text>
        </View>
      </View>
      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image
          source={require('../assets/images/Message.png')}
          style={{
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '828282',
              marginLeft: 20,
            }}
          >
            Email
          </Text>
          <Text
            style={{
              fontSize: 16,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '0F0F0F',
              marginLeft: 20,
            }}
          >
            hello758@gmail.com
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image
          source={require('../assets/images/country.png')}
          style={{
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '828282',
              marginLeft: 20,
            }}
          >
            Country
          </Text>
          <Text
            style={{
              fontSize: 16,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '0F0F0F',
              marginLeft: 20,
            }}
          >
            Switzerland{' '}
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', marginTop: 40 }}>
        <Image
          source={require('../assets/images/Calling.png')}
          style={{
            resizeMode: 'contain',
          }}
        />
        <View>
          <Text
            style={{
              fontSize: 14,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '828282',
              marginLeft: 20,
            }}
          >
            Phone
          </Text>
          <Text
            style={{
              fontSize: 16,
              resizeMode: 'contain',
              fontWeight: 'bold',
              color: '0F0F0F',
              marginLeft: 20,
            }}
          >
            +41 (785)0025674{' '}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default YourInformation;

const styles = StyleSheet.create({});

