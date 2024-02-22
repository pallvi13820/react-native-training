// QrCode.js
import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const QrCode = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Button title="SCAN" onPress={() => navigation.navigate('scanQr')} />
      <Button title="GENERATE" onPress={() => navigation.navigate('genrateQr')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default QrCode;
