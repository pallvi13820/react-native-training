import { CurrentRenderContext } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Button,
  FlatList,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';

const Count = ({ navigation }) => {
  const [data, setdata] = useState([]);
  const [loader, setloader] = useState(false);

  useEffect(() => {
    Apicall();
  }, []);

  const Apicall = () => {
    setloader(true);
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(res => {
        setdata(res?.data);
        setloader(false);
      })
      .catch(error => {
        console.error(error);
        setloader(false);
      });
  };

  const deleteItem = itemId => {
    const updatedData = data.filter(item => item.id !== itemId);
    setdata(updatedData);
  };

  return (
    <View style={{ flex: 1 }}>
      {loader ? (
        <ActivityIndicator
          size="large"
          color="green"
          style={{
            position: 'absolute',
            zIndex: 1,
            alignSelf: 'center',
            bottom: 0,
            top: 0,
          }}
        />
      ) : null}

      <Button title="Contacts" onPress={() => navigation.navigate('Profile')} />

      <FlatList
        data={data}
        keyExtractor={({ id }) => id.toString()}
        renderItem={({ item }) => (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'pink',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Image
              style={{ width: 90, height: 110, padding: 50, borderRadius: 60 }}
              source={{ uri: item.avatar }}
            />
            <View style={{ padding: 20 }}>
              <Text
                style={{
                  color: 'black',
                  fontWeight: 'bold',
                  fontSize: 16,
                  resizeMode: 'contain',
                }}
              >
                {item.first_name} {item.last_name}
              </Text>
              <Text style={{ color: 'black' }}>{item.email}</Text>
            </View>
            <TouchableOpacity
              onPress={() => deleteItem(item.id)}
              style={{
                position: 'absolute',
                right: 1,
                top: 40,
                padding: 5,
              }}
            >
              <Text
                style={{
                  color: 'black',
                  marginLeft: 4,
                  alignSelf: 'center',
                  padding: 1,
                  marginLeft: -10,
                }}
              >
                Delete
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default Count;
