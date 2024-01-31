import { StyleSheet, Text, View, Button, route, FlatList } from 'react-native';
import React, { useState } from 'react';

const Show = ({ navigation, route }) => {
  const { dataList } = route.params;
  const [data, setData] = useState(dataList);

  return (
    <View style={{ flex: 1 }}>
      <Button title="back" onPress={() => navigation.navigate('Mod')} />
      <FlatList
        data={data}
        renderItem={({ item }) =>
          item.selected && (
            <View
              style={{
                backgroundColor: 'pink',
                marginHorizontal: 20,
                marginVertical: 10,
                borderRadius: 10,
                flexDirection: 'row',
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
            </View>
          )
        }
      />
    </View>
  );
};

export default Show;

const styles = StyleSheet.create({});
