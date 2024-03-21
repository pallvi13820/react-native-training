import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, { useState } from 'react';

const ModalUi = () => {
  const [text, setText] = useState();
  const [isModal, setIsModal] = useState(false);
  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginVertical: 80, alignItems: 'center' }}>
        <View style={{ flexDirection: 'row' }}>
          <Text
            style={{
              alignSelf: 'center',
              left: 20,
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              marginHorizontal: 20,
            }}
          >
            Give Rate & Review to
          </Text>
          <Image style={{}} source={require('../assets/images/cross.png')} />
        </View>

        <View>
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
            }}
          >
            your driver
          </Text>
          <Image
            style={{ alignItems: 'center', marginTop: 10, alignSelf: 'center' }}
            source={require('../assets/images/face.png')}
          />
          <Text
            style={{
              alignSelf: 'center',
              fontWeight: 'bold',
              color: 'black',
              fontSize: 20,
              paddingVertical: 10,
            }}
          >
            Jack Aranda
          </Text>
          <Image
            style={{ alignItems: 'center', alignSelf: 'center' }}
            source={require('../assets/images/star.png')}
          />

          <TextInput
            placeholder="Your feedback type here"
            styles={styles.input}
            onChangeText={setText}
            value={text}
            style={{
              height: '28%',
              width: 300,
              marginVertical: 20,
              margin: 12,
              borderWidth: 1,
              padding: 10,
              borderRadius: 20,
            }}
          />
          <View style={{ paddingVertical: 30 }}>
            <TouchableOpacity
              style={{
                backgroundColor: '#00008B',
                width: '48%',
                height: 50,
                position: 'absolute',
                bottom: 1,
                alignSelf: 'center',
                borderRadius: 13,
              }}
            >
              <Text
                style={{
                  color: 'white',
                  alignSelf: 'center',
                  marginVertical: 10,
                }}
              >
                Submit
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ModalUi;

const styles = StyleSheet.create({});
