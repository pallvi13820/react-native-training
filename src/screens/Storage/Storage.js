import React, { useEffect, useState } from 'react';
import { View, Text, Button } from 'react-native';
import { AsyncStorage } from 'react-native';

const Storage = () => {
  const [storedData, setStoredData] = useState('');

  const retrieveData = async () => {
    try {
      const data = await AsyncStorage.getItem('userData');
      if(data!= null){
        setStoredData(data);
      }
    } catch (error) {
      console.error('Error retrieving data from AsyncStorage:', error);
    }
  };

  useEffect(() => {
    retrieveData();
  }, );

  return (
    <View>
     
      <Text>{storedData}</Text>
    </View>
  );
};

export default Storage;
