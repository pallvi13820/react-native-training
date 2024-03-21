import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { TextInput } from 'react-native-paper';

const RidebookingCompo = ({
  label,
  value,
  onChangeText,
  icon,
  placeholder,
}) => {
  return (
    <View style={{ justifyContent: 'space-between', margin: 15 }}>
      <TextInput
        theme={{ roundness: 15 }}
        mode="outlined"
        label={label}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        //   left={<TextInput.Icon Icon="smile" />}
        left={<TextInput.Icon icon={icon} />}
      />
    </View>
  );
};

export default RidebookingCompo;

const styles = StyleSheet.create({});
