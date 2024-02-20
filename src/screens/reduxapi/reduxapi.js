import { deleteItem, setData } from '@/actions/firstaction';
import React, { useEffect } from 'react';
import { View, Text, FlatList, Image, ActivityIndicator, TouchableOpacity, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const ReduxApi = () => {
  const datainredux = useSelector(state => state.firstReducer.apidata);
  console.log('datainredux', datainredux);
  const loader = useSelector(state => state.firstReducer.loader);
  const dispatch = useDispatch();

  useEffect(() => {
    Apicall();
  }, []);

  const Apicall = () => {
    dispatch({ type: 'SET_LOADER', payload: true });
    fetch('https://reqres.in/api/users?page=2')
      .then(response => response.json())
      .then(res => {
        dispatch(setData(res?.data));
        dispatch({ type: 'SET_LOADER', payload: false });
      })
      .catch(error => {
        console.error(error);
        dispatch({ type: 'SET_LOADER', payload: false });
      });
  };

  const handleDeleteItem = (itemId) => {
    dispatch(deleteItem(itemId));
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

      <FlatList
        data={datainredux}

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
                style={styles.textStyle}
              >
                {item.first_name} {item.last_name}
              </Text>
              <Text style={{ color: 'black' }}>{item.email}</Text>
            </View>
            <TouchableOpacity
              onPress={() => handleDeleteItem(item.id)}
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

export default ReduxApi;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textStyle: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
    resizeMode: 'contain',
  }
});
