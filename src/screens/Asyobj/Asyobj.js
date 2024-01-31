import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import React, { useState } from 'react';

const Asyobj = ({ navigation }) => {
  const [data, setData] = useState({
    Name: '',
    Password: '',
  });

  const storeData = async () => {
    try {
      await AsyncStorage.setItem('name', data.Name);
      await AsyncStorage.setItem('password', data.Password);
    } catch (e) {
      // Handle saving error
    }
  };

  return (
    <View>
      <Text style={{ color: 'black', fontSize: 20 }}> Enter a name</Text>
      <TextInput
        placeholder="enter name"
        onChangeText={(text) => setData({ ...data, Name: text })}
        value={data.Name}
        style={{
          padding: 10,
          height: 40,
          margin: 12,
          borderWidth: 1,
          fontWeight: 'bold',
        }}
      />
      <Text style={{ color: 'black', fontSize: 20 }}> Enter a Password</Text>
      <TextInput
        placeholder="enter password"
        onChangeText={(text) => setData({ ...data, Password: text })}
        value={data.Password}
        style={{
          padding: 10,
          height: 40,
          margin: 12,
          borderWidth: 1,
          fontWeight: 'bold',
        }}
      />
      <Button
        title="Login"
        onPress={() => {
          storeData();
          navigation.navigate('Asyobjv', {
            name: data.Name,
            password: data.Password,
          });
        }}
      />
    </View>
  );
};

export default Asyobj;

const styles = StyleSheet.create({});
