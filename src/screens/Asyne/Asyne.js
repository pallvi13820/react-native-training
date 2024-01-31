import { StyleSheet, Text, View, Button, TextInput, AsyncStorage } from 'react-native';
import React from 'react';

const Asyne = ({ navigation }) => {
  const [data, setData] = React.useState('');
  const [userInfo, setUserInfo] = React.useState({
    text: '',
  });

  const dataSave = async () => {
    try {
      await AsyncStorage.setItem('userData', data);
     
      setData('');
    } catch (error) {
      console.error('Error saving data to AsyncStorage:', error);
    }
  };

  return (
    <View>
      <Button title="back" onPress={() => navigation.navigate('Profile')} />
      <TextInput
        placeholder="enter info"
        onChangeText={text => setData(text)}
        value={data}
        style={{
          padding: 10,
          height: 40,
          margin: 12,
          borderWidth: 1,
          fontWeight: 'bold',
        }}
      />
      <Button title="save data" onPress={dataSave} />
      <Button
        title="Storage data"
        onPress={() => navigation.navigate('Storage')}
      />
    </View>
  );
};

export default Asyne;

const styles = StyleSheet.create({});
