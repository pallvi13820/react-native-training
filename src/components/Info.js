import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'

const Info = ({icon,title,mail}) => {
  return (
    <View style={{ flexDirection: 'row' }}>
    <Image
      source={icon}
      style={{
        //height: 50,
        //widht: 40,
        resizeMode: 'contain',
        //paddingTop: 20,
        //margin: 10,
        alignSelf: 'center',
      }}
    />
    <View>
      <Text
        style={{
          fontSize: 12,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#A4BFCB',

          paddingTop: 25,
        }}
      >
        {title}
      </Text>
      <Text
        style={{
          fontSize: 14,
          resizeMode: 'contain',
          fontWeight: 'bold',
          color: '#4B8098',

          paddingTop: 10,
        }}
      >
       {mail}
      </Text>
    </View>
    <View
          style={{
            flexDirection: 'row',

            justifyContent: 'space-between',
            alignItems: 'center',
            marginHorizontal: 30,
          }}
        >
         </View>
      </View>
 
  )
}

export default Info

const styles = StyleSheet.create({})