// // Firstrd.js


// import { decrement, increment } from '@/actions/firstaction';
// import React from 'react';
// import { View, Text, Button } from 'react-native';
// import { useSelector, useDispatch } from 'react-redux';


// const Firstrd = () => {
//     const count = useSelector(state => state.firstReducer.count);
//     const dispatch = useDispatch();

//     return (
//         <View>
//             <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Counter App</Text>
//             <Text style={{ fontSize: 18, textAlign: 'center', marginBottom: 20 }}>Count: {count}</Text>
//             <Button title="Increment" onPress={() => dispatch(increment())} />
//             <Button title="Decrement" onPress={() => dispatch(decrement())} />
//         </View>
//     );
// };

// export default Firstrd;

// Firstrd.js

// Firstrd.js

import { setUserData } from '@/actions/firstaction';
import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';


const Firstrd = ({ navigation }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const onLogin = () => {

    dispatch(setUserData(name, password));

    navigation.navigate('Second');
  };

  return (
    <View>
      <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Login Screen</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={text => setName(text)}
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <TextInput
        placeholder="Enter your password"
        value={password}
        onChangeText={text => setPassword(text)}
        secureTextEntry
        style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
      />
      <Button title="Login" onPress={onLogin} />
    </View>
  );
};

export default Firstrd;


