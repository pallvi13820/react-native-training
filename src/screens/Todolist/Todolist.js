import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const Todolist = () => {
  const route = useRoute();
  return (
    <View>
      <Text>{route?.params?.item?.text}</Text>
    </View>
  );
};

export default Todolist;

const styles = StyleSheet.create({});
