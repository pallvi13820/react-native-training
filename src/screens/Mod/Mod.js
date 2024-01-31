import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import React, { useState } from 'react';
import { email } from '@/assets';
import { TextInput } from 'react-native-gesture-handler';

const Mod = ({ navigation }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [isModal, setIsModal] = useState(false);
  const [updateData, setUpdateData] = useState();
  const [data, setData] = useState([
    {
      selected: false,
      id: 1,
      name: 'ram',
      email: 'ram9@gmail.com',
    },
    {
      selected: false,
      id: 2,
      name: 'sham',
      email: 'sham9@gmail.com',
    },
    {
      selected: false,
      id: 3,
      name: 'sita',
      email: 'sita9@gmail.com',
    },
    {
      selected: false,
      id: 4,
      name: 'gita',
      email: 'gita9@gmail.com',
    },

    {
      selected: false,
      id: 5,
      name: 'pallvi',
      email: 'pallvi9@gmail.com',
    },
    {
      selected: false,
      id: 6,
      name: 'meenu',
      email: 'meenu9@gmail.com',
    },
    {
      selected: false,
      id: 7,
      name: 'rishika',
      email: 'rishika9@gmail.com',
    },
    {
      selected: false,
      id: 8,
      name: 'gul',
      email: 'gul9@gmail.com',
    },
  ]);

  const handleUpdateName = () => {
    if (selectedItem) {
      console.log(selectedItem);
      setData(prevData => {
        console.log(prevData);
        const index = prevData.findIndex(item => item.id === selectedItem.id);
        if (index !== -1) {
          const newData = [...prevData];
          console.log(newData);
          newData[index].name = updateData;
          console.log(updateData);
          return newData;
        }
        return prevData;
      });
      setIsModal(false);
    }
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="back" onPress={() => navigation.navigate('Profile')} />

      <FlatList
        data={data}
        // numcolumn={3}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              let array = data;
              array[index].selected = !array[index].selected;
              setData([...array]);
            }}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              backgroundColor: 'pink',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
              borderWidth: 1,
              borderColor: item.selected ? 'blue' : 'red',
            }}
          >
            <TouchableOpacity
              onPress={() => {
                setIsModal(true);
                setSelectedItem(item);
              }}
            >
              <Text
                style={{
                  padding: 2,
                  paddingHorizontal: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  padding: 2,
                  paddingHorizontal: 10,
                  fontWeight: 'bold',
                  fontSize: 20,
                }}
              >
                {item.email}
              </Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
        // keyExtractor={({ item }) => item?.id}
      />
      {/* {console.log('afsdhsafd', data)} */}
      <Modal isVisible={isModal}>
        <View
          style={{
            width: '50%',
            height: '30%',
            alignSelf: 'center',
            paddingVertical: 10,
            paddingHorizontal: 5,
            borderRadius: 1,
            backgroundColor: 'green',
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setIsModal(false);
            }}
          >
            <Text
              style={{
                padding: 2,
                paddingHorizontal: 10,
                fontWeight: 'bold',
                fontSize: 20,
              }}
            >
              {' '}
              back
            </Text>
          </TouchableOpacity>

          <TextInput
            placeholder="enter name"
            style={{
              padding: 10,
              height: 40,
              margin: 12,
              borderWidth: 1,
              fontWeight: 'bold',
            }}
            onChangeText={text => setUpdateData(text)}

            // onChangeText={updateText => {
            //   setSelectedItem(previousText => ({
            //     ...previousText,
            //     name: updateText,
            //   }));
            // }}
          />

          <Button title="update name" onPress={handleUpdateName} />

          {/* <TouchableOpacity
            onPress={() => {
              const updateData = data?.map(item => (
                item?.id == selectedItem?.id ? selectedItem : item
              ));
              setData(updateData);
              setIsModal(false);
             // console.log(updateData);
              //console.log(selectedItem);
             }}
            >
            <Text style={{padding:2,paddingHorizontal:10,fontWeight: 'bold',fontSize: 20,}}>Update</Text>
          </TouchableOpacity> */}
        </View>
      </Modal>
      <Button
        title="ShowSelectedItem"
        onPress={() => navigation.navigate('Show', { dataList: data })}
      />
    </View>
  );
};

export default Mod;

const styles = StyleSheet.create({});
