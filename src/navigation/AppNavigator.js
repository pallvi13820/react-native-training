import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TabBarIcon } from '@/components';
import { NAVIGATION } from '@/constants';
import { HomeNavigator } from '@/navigation/HomeNavigator';
import { ProfileNavigator } from '@/navigation/ProfileNavigator';
import DrawerNavigator from './DrawerNavigator';
import { TabBar, TabBarIndicator } from 'react-native-tab-view';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';



// const Tab = createBottomTabNavigator();
const Tab = createMaterialTopTabNavigator();

// export function AppNavigator() {
//   const { colors } = useTheme();

//   return (
//     <Tab.Navigator
//       screenOptions={({ route }) => ({
//         tabBarIcon: ({ color }) => (
//           <TabBarIcon color={color} routeName={route.name} />
//           ),
         

//       })}
//       tabBarOptions={{
//         activeTintColor: colors.activeTab,
//         inactiveTintColor: colors.inactiveTab,
//       }}
//     >
//       <Tab.Screen
//         name={NAVIGATION.home}
//         component={HomeNavigator}
//         options={{ headerShown: true }}
//       />
//       <Tab.Screen
//         name={NAVIGATION.profile}
//         component={ProfileNavigator}
//         options={{ headerShown: true }}
//       />
      
//     </Tab.Navigator>
//   );
// }



export function AppNavigator() {
  const { colors } = useTheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
          TabBarIcon: ({ color }) => (
            <TabBarIcon color={color} routeName={route.name} />
            ),

      })}
      tabBarOptions={{
        activeTintColor: colors.activeTab,
        inactiveTintColor: colors.inactiveTab,
      }}
    >
      <Tab.Screen
        name={NAVIGATION.home}
        component={HomeNavigator}
        options={{ headerShown: true }}
      />
      <Tab.Screen
        name={NAVIGATION.profile}
        component={ProfileNavigator}
        options={{ headerShown: true }}
      />
    </Tab.Navigator>
  );
}
