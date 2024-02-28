import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';
import { useSelector } from 'react-redux';
import { AppNavigator } from '@/navigation/AppNavigator';
import { AuthNavigator } from '@/navigation/AuthNavigator';
import { getUser } from '@/selectors/UserSelectors';
import { theme } from '@/theme';

export function RootNavigator() {
  const user = useSelector(getUser);
  const scheme = useColorScheme();
  const config = {
    screens: {
      ScreenA: 'a',
      ScreenB: {
        path: 'b/:message',
        parse: {
          message: message => `${message}`,
        },
      },
      ScreenC: 'c',
    },
  };

  return (
    <NavigationContainer
      theme={theme[scheme]}
      linking={{
        prefixes: ['myapp://app'],
        config,
      }}
    >
      {<AppNavigator />}
      {/* {user ? <AppNavigator /> : <AuthNavigator />} */}
    </NavigationContainer>
  );
}
