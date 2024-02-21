import React from 'react';
import { View, Text } from 'react-native';
import { useSelector } from 'react-redux';

const Reduxhome = () => {
 
  const userData = useSelector(state => state.firstReducer.userData);

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Redux Home Screen</Text>
      <Text style={{ fontSize: 18, marginBottom: 10 }}>usre Login</Text>
    </View>
  );
};

export default Reduxhome;
