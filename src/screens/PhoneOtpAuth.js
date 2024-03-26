import React, { useState, useEffect } from 'react';
import { Button, TextInput, Text } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function PhoneOtpAuth() {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState(null);

  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(''); // Added password state

  // Handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  // Handle create account button press
  async function createAccount() {
    try {
      await auth().createUserWithEmailAndPassword(email, password);
      console.log('User account created & signed in!');
    } catch (error) {
      console.error(error);
    }
  }

  // Handle the verify phone button press
  async function verifyPhoneNumber() {
    try {
      const formattedPhoneNumber = `+91${phoneNumber}`; // Format phone number to E.164 format for India
      const confirmation = await auth().signInWithPhoneNumber(formattedPhoneNumber);
      setConfirm(confirmation);
    } catch (error) {
      console.error(error);
    }
  }

  // Handle confirm code button press
  async function confirmCode() {
    try {
      const credential = auth.PhoneAuthProvider.credential(
        confirm.verificationId,
        code
      );
      await user.linkWithCredential(credential);
      console.log('Phone number linked successfully!');
    } catch (error) {
      console.error(error);
    }
  }

  if (initializing) return null;

  if (!user) {
    return (
      <Button title="Create Account" onPress={() => createAccount()} />
    );
  } else if (!user.phoneNumber) {
    if (!confirm) {
      return (
        <>
          <TextInput
            placeholder="Enter email"
            value={email}
            onChangeText={setEmail}
          />
          <TextInput
            placeholder="Enter password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            placeholder="Enter phone number"
            value={phoneNumber}
            onChangeText={setPhoneNumber}
          />
          <Button title="Verify Phone Number" onPress={() => verifyPhoneNumber()} />
        </>
      );
    }
    return (
      <>
        <TextInput
          placeholder="Enter verification code"
          value={code}
          onChangeText={setCode}
        />
        <Button title="Confirm Code" onPress={() => confirmCode()} />
      </>
    );
  } else {
    return (
      <Text>
        Welcome! {user.phoneNumber} linked with {user.email}
      </Text>
    );
  }
}
