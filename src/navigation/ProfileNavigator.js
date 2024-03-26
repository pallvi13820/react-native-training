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
import Reduxnavigation from '@/screens/reduxnavigation/Reduxnavigation';
import Reduxhome from '@/screens/reduxhome/Reduxhome';
import Calculator from '@/screens/Calculator/Calculator';
import Newcal from '@/screens/Newcal/Newcal';
import QrCode from '@/screens/QrCode/QrCode';
import ScreenA from '@/screens/ScreenA';
import ScreenB from '@/screens/ScreenB';
import ScreenC from '@/screens/ScreenC';
import LinkingScreen from '@/screens/LinkingScreen';
import EmailPassAuth from '@/screens/EmailPassAuth';
import Checkout from '@/screens/Checkout';
import NotificationUi from '@/screens/NotificationUi';
import ModalUi from '@/screens/ModalUi';
import { Help } from '@/screens/Help';
import { SupportChat } from '@/screens/SupportChat';
import PushNotification from '@/screens/PushNotification';
import RideBooking from '@/screens/RideBooking';
import YourInformation from '@/screens/YourInformation';
import PhoneOtpAuth from '@/screens/PhoneOtpAuth';
import CustomizeCalendar from '@/screens/CustomizeCalendar';
import CalendarPickerApp from '@/screens/CalenderPickerApp';
import Arraymethod from '@/screens/Arraymethod/Arraymethod';
import ScanQr from '@/screens/ScanQr/ScanQr';
import GenrateQr from '@/screens/GenrateQr/GenrateQr';
import Todo from '@/screens/Todo/Todo';
import Todolist from '@/screens/Todolist/Todolist';
import ReduxApi from '@/screens/Reduxapi/Reduxapi';

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

      {
        <Stack.Screen
          name={NAVIGATION.Asyne}
          component={Asyne}
          options={{ headerShown: false }}
        />
      }

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
        name={NAVIGATION.ReduxApi}
        component={ReduxApi}
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
        name={NAVIGATION.ScanQr}
        component={ScanQr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.GenrateQr}
        component={GenrateQr}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Todo}
        component={Todo}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Todolist}
        component={Todolist}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Arraymethod}
        component={Arraymethod}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.ScreenA}
        component={ScreenA}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.ScreenB}
        component={ScreenB}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.ScreenC}
        component={ScreenC}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.LinkingScreen}
        component={LinkingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.CalendarPickerApp}
        component={CalendarPickerApp}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.CustomizeCalendar}
        component={CustomizeCalendar}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.EmailPassAuth}
        component={EmailPassAuth}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.PhoneOtpAuth}
        component={PhoneOtpAuth}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name={NAVIGATION.YourInformation}
        component={YourInformation}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.RideBooking}
        component={RideBooking}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Checkout}
        component={Checkout}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.NotificationUi}
        component={NotificationUi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.ModalUi}
        component={ModalUi}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.Help}
        component={Help}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.SupportChat}
        component={SupportChat}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name={NAVIGATION.PushNotification}
        component={PushNotification}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
