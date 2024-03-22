import React from 'react';
import { useEffect } from 'react';
import { useCallback } from 'react';
import { useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Bubble, GiftedChat } from 'react-native-gifted-chat';
import { ms } from 'react-native-size-matters';

export function SupportChat({navigation}) {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hey!',
        createdAt: new Date(),
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);
  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: ms(20),
          marginVertical: ms(25),
        }}
      >
        <TouchableOpacity
          style={styles.arrowIconViewStyle}
          onPress={() => navigation.navigate('Help')}
        >
          <Image
            source={require('../assets/images/backArrow.png')}
            style={styles.arrowIconStyle}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>{'Support Chat'}</Text>
      </View>

      <View style={styles.divider} />
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        renderBubble={props => (
          <Bubble
            {...props}
            textStyle={{
              right: {
                color: 'white',
              },
              left: {
                color: 'black',
              },
            }}
            wrapperStyle={{
              right: { backgroundColor: 'black' },
              left: { backgroundColor: 'white' },
            }}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  arrowIconViewStyle: {
    width: ms(42),
    height: ms(42),
    borderRadius: ms(30),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  arrowIconStyle: {
    width: ms(8),
    height: ms(12),
    resizeMode: 'contain',
  },
  headerTitle: {
    fontSize: ms(26),
    color: '#0F0F0F',
    fontWeight: '500',
    marginLeft: ms(15),
  },
  divider: {
    borderTopWidth: ms(2),
    borderColor: '#E6E6E6',
  },
});
