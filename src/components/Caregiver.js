import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Caregiver = ({title,work}) => {
  return (
    <View>
     <Text
      style={{
        fontSize: 20,
        resizeMode: 'contain',

        color: '#393649',
        paddingTop: 10,
      }}
    >
      {title}
    </Text>

    <Text
      style={{
        fontSize: 20,
        resizeMode: 'contain',
        fontWeight: 'bold',
        color: '#393649',
        paddingTop: 10,
      }}
    >
      {work}
    </Text>
    </View>
  )
}

export default Caregiver

const styles = StyleSheet.create({})