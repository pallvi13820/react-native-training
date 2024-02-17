// Second.js

import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Second = () => {
 
  const userData = useSelector(state => state.firstReducer.userData);

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Second Screen</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>Name: {userData.name}</Text>
      <Text style={{ fontSize: 18 }}>Password: {userData.password}</Text>
    </View>
  );
};

export default Second;
