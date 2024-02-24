import React from 'react';
import { createNativeStackNavigator } from 'react-native-screens/native-stack';
import { NAVIGATION } from '@/constants';
import { Profile } from '@/screens';
import Count from '@/screens/Count/Count';
import Add from '@/screens/Add/Add';
import { StackNavigator } from 'react-navigation';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Spread from '@/screens/Spread/Spread';
import Mod from '@/screens/Mod/Mod';
import Show from '@/screens/Show/Show';
import Design from '@/screens/Design/Design';
import Des from '@/screens/Des/Des';
import Datepicker from '@/screens/Datepicker/Datepicker';
import Asyne from '@/screens/Asyne/Asyne';
import Storage from '@/screens/Storage/Storage';
import Asyobj from '@/screens/Asyobj/Asyobj';
import Asyobjv from '@/screens/Asyobjv/Asyobjv';
import ImageCustom from '@/screens/Image/Image';
import Clockt from '@/screens/Clockt/Clockt';
import Clockpratice from '@/screens/Clockpractice/Clockpratice';
import Firstrd from '@/screens/Firstrd/Firstrd';
import Second from '@/screens/second/Second';
import reduxapi from '@/screens/reduxapi/reduxapi';
import Reduxnavigation from '@/screens/reduxnavigation/Reduxnavigation';
import Reduxhome from '@/screens/reduxhome/Reduxhome';
import Calculator from '@/screens/Calculator/Calculator';
import Newcal from '@/screens/Newcal/Newcal';
import QrCode from '@/screens/QrCode/QrCode';
import genrateQr from '@/screens/genrateQr/genrateQr';
import scanQr from '@/screens/scanQr/scanQr';
import todo from '@/screens/todo/todo';
import todolist from '@/screens/todolist/todolist';
import arraymethod from '@/screens/arraymethod/arraymethod';


const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

export function ProfileNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={NAVIGATION.profile}
        component={Profile}
        options={{ headerLargeTitle: true }}
      />
      <Stack.Screen
        name={NAVIGATION.count}
        component={Count}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.add}
        component={Add}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.Spread}
        component={Spread}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Mod}
        component={Mod}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.Show}
        component={Show}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Design}
        component={Design}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Des}
        component={Des}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Datepicker}
        component={Datepicker}
        options={{ headerShown: false }}
      />

      {<Stack.Screen
        name={NAVIGATION.Asyne}
        component={Asyne}
        options={{ headerShown: false }}
      /> }

<Stack.Screen
        name={NAVIGATION.Storage}
        component={Storage}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name={NAVIGATION.Asyobj}
        component={Asyobj}
        options={{ headerShown: false }}
      />

<Stack.Screen
        name={NAVIGATION.Asyobjv}
        component={Asyobjv}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Image}
        component={ImageCustom}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.Clockt}
        component={Clockt}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.Clockpratice}
        component={Clockpratice}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Firstrd}
        component={Firstrd}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.Second}
        component={Second}
        options={{ headerShown: false }}
      />
        <Stack.Screen
        name={NAVIGATION.reduxapi}
        component={reduxapi}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.Reduxnavigation}
        component={Reduxnavigation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Reduxhome}
        component={Reduxhome}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.Calculator}
        component={Calculator}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Newcal}
        component={Newcal}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.QrCode}
        component={QrCode}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.scanQr}
        component={scanQr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.genrateQr}
        component={genrateQr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.todo}
        component={todo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.todolist}
        component={todolist}
        options={{ headerShown: false }}
      />
       <Stack.Screen
        name={NAVIGATION.arraymethod}
        component={arraymethod}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
