import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer'; // Import createDrawerNavigator
import { NAVIGATION } from '@/constants';
import { Home, Count} from '@/screens'; // Import Count if not already imported
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

export function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={'DrawerRoute'}
        options={{
          headerShown: false,
        }}
        component={DrawerNavigator}
        
      />
    </Stack.Navigator>
  );
}
