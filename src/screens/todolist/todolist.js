import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { useRoute } from '@react-navigation/native';

const todolist = () => {
  const route = useRoute();
  return (
    <View>
      <Text>{route?.params?.item?.text}</Text>
    </View>
  );
};

export default todolist;

const styles = StyleSheet.create({});
