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



//Firstrd.js

// import { setUserData } from '@/actions/firstaction';
// import React, { useState } from 'react';
// import { View, Text, Button, TextInput } from 'react-native';
// import { useDispatch } from 'react-redux';


// const Firstrd = ({ navigation }) => {
//   const dispatch = useDispatch();
//   const [name, setName] = useState('');
//   const [password, setPassword] = useState('');

//   const onLogin = () => {

//     dispatch(setUserData(name, password));

//     navigation.navigate('Second');
//   };

//   return (
//     <View>
//       <Text style={{ fontSize: 20, textAlign: 'center', marginVertical: 10 }}>Login Screen</Text>
//       <TextInput
//         placeholder="Enter your name"
//         value={name}
//         onChangeText={text => setName(text)}
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
//       />
//       <TextInput
//         placeholder="Enter your password"
//         value={password}
//         onChangeText={text => setPassword(text)}
//         secureTextEntry
//         style={{ height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 10 }}
//       />
//       <Button title="Login" onPress={onLogin} />
//     </View>
//   );
// };

// export default Firstrd;

// Firstrd.js

// Firstrd.js


import { addData } from '@/actions/firstaction';
import React, { useState } from 'react';
import { View, Button, TextInput, Text, FlatList } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const Firstrd = ({ navigation }) => {
  const dispatch = useDispatch();
  const data = useSelector(state => state?.firstReducer?.dataList);
  const [text, setText] = useState('');
   
  const handleAddData = () => {
     dispatch(addData(text));
    setText('');
  };

  return (
    <View style={{ flex: 1 }}>
      <TextInput
        placeholder="Enter a name"
        value={text}
        onChangeText={setText}
        style={{
          padding: 10,
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          fontWeight: 'bold',
        }}
      />
      <Button title={'Add Data'} onPress={handleAddData} />

      <FlatList
        data={data}
        renderItem={({ item }) => {
        return (
          <View
            style={{
              backgroundColor: 'pink',
              marginHorizontal: 20,
              marginVertical: 10,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                color: 'black',
                fontWeight: 'bold',
                fontSize: 15,
                padding: 5,
                left: 5,
                resizeMode: 'contain',
              }}
            >
              {item}
              </Text>
          </View>
     )}}
      />
    </View>
  );
};



export default Firstrd;
