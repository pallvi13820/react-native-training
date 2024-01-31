import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Button } from '@/components';

const Asyobjv = ({ route }) => {
  const [storedData, setStoredData] = useState(null);
  

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('name');
      const password = await AsyncStorage.getItem('password');
      setStoredData({
        Name: name,
        Password: password,
      });
    } catch (e) {
      // handle error reading value
    }
  };

  useEffect(() => {
    getData();
  }, []);

  // const deletevales = () => {
  //   setStoredData(null); 
  // };

  const removeValue = async () => {
    try {
      await AsyncStorage.removeItem('name');
      await AsyncStorage.removeItem('password');
      setStoredData(null);
    } catch (e) {
      // handle remove error
    }
    console.log('Done.');
  };



  return (
    <View>
      {storedData ? (
        <>
          <Text style={{ color: 'black', fontSize: 20 }}>Name: {storedData.Name}</Text>
          <Text style={{ color: 'black', fontSize: 20 }}>Password: {storedData.Password}</Text>
        </>
      ) : (
        <Text style={{ color: 'black', fontSize: 20 }}>No data available</Text>
      )}
      <Button title="delete" onPress={removeValue}/>
    </View>
  );
};

export default Asyobjv;

const styles = StyleSheet.create({});
