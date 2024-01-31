import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Count from '@/screens/Count/Count';
import { NAVIGATION } from '@/constants';
import { Home, Profile } from '@/screens';

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator initialRouteName="Home" screenOptions={{drawerPosition:"right"}}>
      <Drawer.Screen
        name={NAVIGATION.home}
        component={Home}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={NAVIGATION.count}
        component={Count}
        options={{ headerShown: false }}
      />
      <Drawer.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerShown: false }}
      />
    </Drawer.Navigator>
    
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({});
