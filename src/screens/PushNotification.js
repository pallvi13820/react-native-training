//PushNotification.js
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
import { Alert } from 'react-native';
import { AppRegistry } from 'react-native';
const PushNotification = () => {
  useEffect(() => {
    const requestUserPermission = async () => {
      try {
        const authStatus = await messaging().requestPermission();
        const enabled =
          authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
          authStatus === messaging.AuthorizationStatus.PROVISIONAL;

        if (enabled) {
          console.log('Authorization status:', authStatus);
          const fcmToken = await messaging().getToken();
          console.log('FCM Token:', fcmToken);
        }
      } catch (error) {
        console.log('Error requesting permission:', error);
      }
    };

    requestUserPermission();
    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, []);

  return null;
};

export default PushNotification;
