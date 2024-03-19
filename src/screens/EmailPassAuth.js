import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from 'react-native';
import React from 'react';
import { useState } from 'react';
import auth from '@react-native-firebase/auth';

const EmailPassAuth = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const createUser = () => {
    auth()
      .createUserWithEmailAndPassword(
      email,
      password,
      )
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
const userSignin = () => {
    auth().signInWithEmailAndPassword(email,password).then(()=>{
Alert.alert('user logged in');
    }).catch(error=>{
        console.log(error);
    })
}
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <TextInput
        placeholder="enter email"
        value={email}
        onChangeText={txt => setEmail(txt)}
        style={{
          width: '90%',
          height: 50,
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 20,
        }}
      />
      <TextInput
        placeholder="enter password"
        value={password}
        onChangeText={txt => setPassword(txt)}
        style={{
          width: '90%',
          height: 50,
          marginTop: 30,
          borderWidth: 0.5,
          borderRadius: 20,
          paddingLeft: 20,
        }}
      />
      <TouchableOpacity
        style={{
          width: '90%',
          height: 50,
          borderRadius: 20,
          marginTop: 50,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#000',
        }}
        onPress={()=>
        {
            createUser();
            // userSignin();
        }}
      >
        <Text style={{ color: '#fff' }}>create account</Text>
        {/* <Text style={{ color: '#fff' }}>sign in</Text> */}
      </TouchableOpacity>
    </View>
  );
};

export default EmailPassAuth;

const styles = StyleSheet.create({});
