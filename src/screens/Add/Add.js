import {
  StyleSheet,
  Text,
  View,
  Button,
  TextInput,
  useState,
  FlatList,
} from 'react-native';
import { CurrentRenderContext } from '@react-navigation/native';
import React from 'react';

const Add = ({ navigation }) => {
  const [text, setText] = React.useState('');
  const [data, setData] = React.useState([]);
  let arr = [];

  function Addtext(text) {
    arr.push(text);
    setData(prev => [...prev, text]);
  }
//abc
//abc
  return (
    <View style={{ flex: 1 }}>
      <Button title="Back" onPress={() => navigation.navigate('Profile')} />

      <TextInput
        placeholder="enter a name"
        styles={styles.input}
        onChangeText={setText}
        value={text}
        style={{
          padding: 10,
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontWeight: 'bold',
        }}
      />
      <Button title={'Add Data'} onPress={() => Addtext(text)} />

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View
            style={{
              backgroundColor: 'pink',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                padding: 5,
                left: 5,
                resizeMode: 'contain',
              }}
            >
              {item}
            </Text>
          </View>
        )}
      />
    </View>
  );
};
export default Add;
const styles = StyleSheet.create({});
