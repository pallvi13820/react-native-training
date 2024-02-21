import { setUserData } from '@/actions/firstaction';
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';


const Reduxnavigation = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {

    dispatch(setUserData(name, password));
    navigation.navigate('Reduxhome');
  };

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Login Screen</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

export default Reduxnavigation;