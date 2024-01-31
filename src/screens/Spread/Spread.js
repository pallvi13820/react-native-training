import { StyleSheet, Text, View, Button, TextInput } from 'react-native';
import React from 'react';
import { color } from 'react-native-reanimated';

const Spread = ({ navigation }) => {
  const [showName, setShowName] = React.useState(false);
  const [showAge, setShowAge] = React.useState(false);
  const [showOccupation, setShowOccupation] = React.useState(false);
  const [data, setData] = React.useState('');

  const [userInfo, setUserInfo] = React.useState({
    name: '',
    age: '',
    occupation: '',
  });

  const handleUpdateName = () => {
    setUserInfo(prevState => ({ ...prevState, name: data }));
    setData('');
    setShowName(true);
  };

  const handleUpdateAge = () => {
    setUserInfo(prevState => ({ ...prevState, age: data }));
    setData('');
    setShowAge(true);
  };

  const handleUpdateOccupation = () => {
    setUserInfo(prevState => ({ ...prevState, occupation: data }));
    setData('');
    setShowOccupation(true);
  };

  const deleteName = () => {
    setUserInfo(prevState => ({ ...prevState, name: '' }));
    setShowName(true);
  };
  const deleteAge = () => {
    setUserInfo(prevState => ({ ...prevState, age: '' }));
    setShowAge(true);
  };
  const deleteOccupation = () => {
    setUserInfo(prevState => ({ ...prevState, occupation: '' }));
    setShowOccupation(true);
  };

  return (
    <View style={{ flex: 1 }}>
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
      <Button title="update name" onPress={handleUpdateName} />
      <Button title="update age" onPress={handleUpdateAge} />
      <Button title="update occupation" onPress={handleUpdateOccupation} />
      <View>
        <Button color="pink" title="Delete name" onPress={deleteName} />
        <Button color="pink" title="Delete age" onPress={deleteAge} />
        <Button
          color="pink"
          title="Delete occupation"
          onPress={deleteOccupation}
        />
      </View>
      <View style={{ marginTop: 50, margin: 20 }}>
        {showName ? (
          <Text style={{ fontsize: 50, color: 'black' }}>
            Name: {userInfo.name}
          </Text>
        ) : null}
        {showAge ? (
          <Text style={{ fontsize: 50, color: 'black' }}>
            age: {userInfo.age}
          </Text>
        ) : null}
        {showOccupation ? (
          <Text style={{ fontsize: 50, color: 'black' }}>
            Occupation: {userInfo.occupation}
          </Text>
        ) : null}
      </View>
    </View>
  );
};

export default Spread;

const styles = StyleSheet.create({});
