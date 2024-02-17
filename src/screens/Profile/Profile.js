import { useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { logout } from '@/actions/UserActions';
import { Button } from '@/components';
import { strings } from '@/localization';
import { styles } from '@/screens/Profile/Profile.styles';
import { TextStyles } from '@/theme';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from 'react-native-screens/lib/typescript/native-stack';

export function Profile({ navigation }) {
  const { colors } = useTheme();
  const dispatch = useDispatch();
  const [count, setCount] = useState();
  const [add, setAdd] = useState();

  useEffect(() => {
    console.log('use effect', count);
  }, []);

  useEffect(() => {
    console.log('use effect', add);
  }, []);

  return (
    <View >
      <Button title="count" onPress={() => navigation.navigate('Count')} />
      <Button title="Add" onPress={() => navigation.navigate('Add')} />
      <Button title="Spread" onPress={() => navigation.navigate('Spread')} />
      <Button title="Mod" onPress={() => navigation.navigate('Mod')} />
      <Button title="Design" onPress={() => navigation.navigate('Design')} />
      <Button title="Des" onPress={() => navigation.navigate('Des')} />
      <Button title="Datepicker" onPress={() => navigation.navigate('Datepicker')} />
      <Button title="Asyne" onPress={() => navigation.navigate('Asyne')} />
      <Button title="Asyobj" onPress={() => navigation.navigate('Asyobj')} />
      <Button title="Image" onPress={() => navigation.navigate('Image')} />
      <Button title="Clockt" onPress={() => navigation.navigate('Clockt')} />
      <Button title="Clockpratice" onPress={() => navigation.navigate('Clockpratice')} />
      <Button title="Firstrd" onPress={() => navigation.navigate('Firstrd')} />

    </View>
  );
}

// const[count,setCount]= useState(0);
// const[data,setdata]= useState(0);
// const[plus,setplus]= useState(0);

//   useEffect(()=>{
//   console.log("use effect",count)},[count,data])

// return (
//  <View>
//   <Button  title="count" onPress={()=>setCount(count+1)}    />
//    <Text style={{ fontSize: 50}}>
//      {count}

//    </Text>
//    <Text style={{ fontSize: 30}}>
//     {data}

//    </Text>
//    <Button  title="data" onPress={()=>setdata(data+1)}    />
//    <Text style={{ fontSize: 30}}>
//     {plus}

//    </Text>
//    <Button  title="plus" onPress={()=>setplus(plus+1)}    />
//   </View>

// );
