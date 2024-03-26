// PushNotification.js
import React, { useEffect } from 'react';
import messaging from '@react-native-firebase/messaging';
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

    const handleBackgroundMessage = async remoteMessage => {
      console.log('Handling background message:', remoteMessage);
      // You can perform additional handling here if needed
    };

    requestUserPermission();

    const unsubscribeForeground = messaging().onMessage(async remoteMessage => {
      console.log('Foreground message:', remoteMessage);
      // You can handle foreground messages differently if needed
    });

    const unsubscribeBackground = messaging().setBackgroundMessageHandler(
      handleBackgroundMessage
    );

    return () => {
      unsubscribeForeground();
      unsubscribeBackground();
    };
  }, []);

  return null;
};

export default PushNotification;
