import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';

import React, { useState } from 'react';
const Checkout = () => {
  const cardData = [
    {
      id: 1,
      cardNumber: 'Visa....3245',
      image: require('../assets/images/circle1.png'),
    },
    {
      id: 2,
      cardNumber: 'Visa....4589',
      image: require('../assets/images/circle2.png'),
    },
  ];

  const renderCardItem = ({ item }) => (
    <TouchableOpacity style={styles.cardContainer}>
      <View style={styles.cardContent}>
        <Image source={require('../assets/images/visa.png')} />
        <Text style={styles.cardNumber}>{item.cardNumber}</Text>
      </View>
      <Image source={item.image} />
    </TouchableOpacity>
  );

  return (
    <ScrollView contentContainerStyle={styles.contentContainer}>
      <View
        style={{ flex: 1, backgroundColor: '#FFFF', paddingHorizontal: 20 }}
      >
        <View
          style={{ flexDirection: 'row', marginTop: 25, alignItems: 'center' }}
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
                height: 12,
                width: 12,
                resizeMode: 'contain',
              }}
            />
          </View>
          <Text
            style={{
              marginLeft: 20,
              fontSize: 30,
              color: '0F0F0F',
              fontWeight: 'bold',
            }}
          >
            Checkout
          </Text>
        </View>
        <Image
          source={require('../assets/images/car.png')}
          style={{
            height: 150,

            alignSelf: 'center',
            resizeMode: 'contain',
          }}
        />
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 25,
            fontWeight: 'bold',
            color: 'black',
          }}
        >
          € 45.00
        </Text>
        <Text style={{ alignSelf: 'center', fontSize: 14 }}>
          Business Class
        </Text>

        <Text style={{ alignSelf: 'center', fontSize: 16, left: 15 }}>
          Mercedes E Class or similar
        </Text>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#E6E6E6',
            marginVertical: 15,
          }}
        />

        <Text style={{ fontSize: 14 }}>Pickup Date and Time</Text>
        <Text style={{ fontSize: 16, fontWeight: 'bold', color: 'black' }}>
          Mon, Sep. 26 at 10:00 AM
        </Text>
        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#E6E6E6',
            marginVertical: 15,
          }}
        />

        <View style={{ flexDirection: 'row' }}>
          <View>
            <Image source={require('../assets/images/1.png')} />
            <Image source={require('../assets/images/4.png')} />
            <Image source={require('../assets/images/2.png')} />
          </View>
          <View>
            <Text style={{ fontSize: 14, paddingHorizontal: 8 }}>
              Pickup Location
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                paddingHorizontal: 8,
              }}
            >
              Jamaal Marg, Switzerland 102...
            </Text>

            <View
              style={{
                flexDirection: 'row',
                paddingVertical: 10,
                alignItems: 'center',
              }}
            >
              <Image source={require('../assets/images/5.png')} />
              <Image source={require('../assets/images/3.png')} />
            </View>

            <Text style={{ fontSize: 14, paddingHorizontal: 5 }}>
              Drop Location
            </Text>
            <Text
              style={{
                fontSize: 16,
                fontWeight: 'bold',
                color: 'black',
                paddingHorizontal: 5,
              }}
            >
              Kehlhof, Forrenböhlstrasse 57...
            </Text>
          </View>
        </View>

        <View
          style={{
            borderTopWidth: 1,
            borderColor: '#E6E6E6',
            marginVertical: 15,
          }}
        />
        <Text style={{ fontSize: 14 }}>Card </Text>

        <FlatList
          data={cardData}
          renderItem={renderCardItem}
          keyExtractor={item => item.id.toString()}
        />

        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 20,
            alignItems: 'center',
          }}
        >
          <Image
            style={{ height: 30, width: 30, resizeMode: 'contain' }}
            source={require('../assets/images/ring.png')}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              marginVertical: 8,
              marginLeft: 10,
            }}
          >
            Add Other Card
          </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            paddingHorizontal: 10,
            paddingVertical: 20,
          }}
        >
          <TouchableOpacity
            style={{
              backgroundColor: '00008B',
              width: '55%',
              height: 60,
              position: 'absolute',
              alignSelf: 'center',
              marginLeft: 80,
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
              Pay Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  contentContainer: {
    paddingVertical: 20,
  },
  contentContainer: {
    paddingVertical: 20,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#FFFF',
    paddingHorizontal: 20,
  },
  cardContainer: {
    paddingVertical: 22,
    paddingHorizontal: 20,
    marginVertical: 10,
    backgroundColor: '#FFFF',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 5,
    shadowColor: 'purple',
    shadowRadius: 3.84,
    shadowOpacity: 0.25,
    shadowOffset: {
      width: 2,
      height: 5,
    },
  },
  cardContent: {
    flexDirection: 'row',
  },
  cardNumber: {
    marginHorizontal: 10,
  },
});
