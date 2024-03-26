import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button } from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const GenrateQr = () => {
  const [text, setText] = useState('');
  const [qrCode, setQrCode] = useState('');

  const generateQRCode = () => {
    setQrCode(text);
  };

  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Enter text for QR code"
        value={text}
        onChangeText={(inputText) => setText(inputText)}
      />
      <Button title="Generate QR Code" onPress={generateQRCode} />

      {qrCode ? (
        <View style={styles.qrCodeContainer}>
          <QRCode value={qrCode} size={200} />
        </View>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: 200,
  },
  qrCodeContainer: {
    marginTop: 20,
  },
});

export default GenrateQr;
