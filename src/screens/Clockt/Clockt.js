// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
// import { AnimatedCircularProgress } from 'react-native-circular-progress';

// const Clockt = ({ navigation }) => {
//     const [time, setTime] = useState({
//         hours: '0',
//         minutes: '0',
//         seconds: '0',
//     });
//     const [progressValue, setProgressValue] = useState(0);
//     const [fill, setFill] = useState(0);

//     const convertToSeconds = () => {
//         const hours = parseInt(time.hours) || 0;
//         const minutes = parseInt(time.minutes) || 0;
//         const seconds = parseInt(time.seconds) || 0;
//         return hours * 3600 + minutes * 60 + seconds;
//     };

//     const settimer = () => {
//         const totalTime = convertToSeconds();

//         setProgressValue(0);
//         const interval = setInterval(() => {
//             setProgressValue((prevValue) => {
//                 const newValue = prevValue + 1;

//                 if (newValue >= totalTime) {
//                     clearInterval(interval);
//                     setFill(100);
//                     return totalTime;
//                 }
//                 setFill(Math.round((newValue * 100) / totalTime));
//                 return newValue;
//             });
//         }, 1000);
//     };

//     return (
//         <View>
//             <AnimatedCircularProgress
//                 size={200}
//                 width={3}
//                 fill={fill}
//                 tintColor="green"
//                 backgroundColor="blue"
//             >
//                 {
//                     (fill) => (
//                         <Text>
//                             {progressValue}
//                         </Text>
//                     )
//                 }
//             </AnimatedCircularProgress>

//             <Text style={{ color: 'black', fontSize: 20 }}> Enter hours</Text>
//             <TextInput
//                 placeholder="0"
//                 onChangeText={(text) => setTime({ ...time, hours: text })}
//                 value={time.hours}
//                 style={{
//                     padding: 10,
//                     height: 40,
//                     margin: 12,
//                     borderWidth: 1,
//                     fontWeight: 'bold',
//                 }}
//             />

//             <Text style={{ color: 'black', fontSize: 20 }}> Enter minutes</Text>
//             <TextInput
//                 placeholder="0"
//                 onChangeText={(text) => setTime({ ...time, minutes: text })}
//                 value={time.minutes}
//                 style={{
//                     padding: 10,
//                     height: 40,
//                     margin: 12,
//                     borderWidth: 1,
//                     fontWeight: 'bold',
//                 }}
//             />

//             <Text style={{ color: 'black', fontSize: 20 }}> Enter seconds</Text>
//             <TextInput
//                 placeholder="0"
//                 onChangeText={(text) => setTime({ ...time, seconds: text })}
//                 value={time.seconds}
//                 style={{
//                     padding: 10,
//                     height: 40,
//                     margin: 12,
//                     borderWidth: 1,
//                     fontWeight: 'bold',
//                 }}
//             />

//             <Button title={'Set Timer'} onPress={() => settimer()} />
//         </View>
//     );
// };

// export default Clockt;

// const styles = StyleSheet.create({});




// import React, { useState, useEffect, useRef } from 'react';
// import {
//   StyleSheet,
//   Text,
//   View,
//   TextInput,
//   Button,
//   AppState,
//   AsyncStorage,
// } from 'react-native';

// const Clockt = ({ navigation }) => {
//   const appState = useRef(AppState.currentState);
//   const [appStateVisible, setAppStateVisible] = useState(appState.current);
//   const [time, setTime] = useState({
//     hours: '0',
//     minutes: '0',
//     seconds: '0',
//   });
//   const [progressValue, setProgressValue] = useState(0);
//   const [intervalId, setIntervalId] = useState(null); // Declare intervalId

//   const convertToSeconds = () => {
//     const hours = parseInt(time.hours) || 0;
//     const minutes = parseInt(time.minutes) || 0;
//     const seconds = parseInt(time.seconds) || 0;
//     return hours * 3600 + minutes * 60 + seconds;
//   };
//   let id = null;
//   const hhmmss = sec => {
//     if (sec == 0) return `00:00:00`;
//     let hrs = parseInt(sec / 3600);
//     if (hrs < 10) {
//       hrs = `0${hrs}`;
//     }
//     sec = sec % 3600;
//     let mins = parseInt(sec / 60);
//     if (mins < 10) {
//       mins = `0${mins}`;
//     }
//     sec = sec % 60;
//     if (sec < 10) {
//       sec = `0${sec}`;
//     }
//     return `${hrs}:${mins}:${sec}`;
//   };
//   const settimer = () => {
//     const totalTime = convertToSeconds();
//     setProgressValue(0);
//     if (id) {
//       return;
//     }
//     id = setInterval(() => {
//       setProgressValue(prevValue => {
//         const newValue = prevValue + 1;

//         if (newValue >= totalTime) {
//           clearInterval(id);
//           console.warn('Interval cleared');
//           id = null;
//           AsyncStorage.removeItem('lastdate');
//           setTime({ minutes: '', hours: '', seconds: '' });

//           return totalTime;
//         }

//         return newValue;
//       });
//     }, 1000);

//     // Save intervalId to state
//     setIntervalId(id);
//   };
//   //   componenet did mount
//   useEffect(() => {
//     const subscription = AppState.addEventListener('change', nextAppState => {
//       appState.current = nextAppState;
//       setAppStateVisible(appState.current);
//     });

//     // console.warn(appStateVisible);
//     return () => {
//       subscription.remove();
//     };
//   }, []);

//   useEffect(() => {
//     backgroundimplementer();
//   }, [appStateVisible]);
//   const backgroundimplementer = async () => {
//     if (intervalId && appStateVisible === 'background') {
//       let hrs = new Date().getHours(); //Current Hours
//       let mins = new Date().getMinutes(); //Current Minutes
//       let sec = new Date().getSeconds(); //Current Seconds
//       let date = new Date().getDate(); //Current Date
//       let month = new Date().getMonth() + 1; //Current Month
//       let year = new Date().getFullYear(); //Current Year
//       console.warn(`${hrs}:${mins}:${sec} ${date}/${month}/${year}`);
//       let currtimeobj = {
//         hrs,
//         mins,
//         sec,
//         date,
//         month,
//         year,
//       };
//       AsyncStorage.setItem('lastdate', JSON.stringify(currtimeobj));

//       // Error saving data

//       // make a object of this and store in aync storage
//     } else if (intervalId && appStateVisible === 'active') {
//       let olddate = await AsyncStorage.getItem('lastdate');
//       olddate = JSON.parse(olddate);
//       let cdateobj = {
//         hrs: new Date().getHours(),
//         mins: new Date().getMinutes(),
//         sec: new Date().getSeconds(),
//         date: new Date().getDate(),
//         month: new Date().getMonth() + 1,
//         year: new Date().getFullYear(),
//       };

//       if (olddate) {
//         console.log('olddate was', olddate);
//         console.log('currdate is', cdateobj);
//         let diffhrs = cdateobj.hrs - olddate.hrs;
//         let diffmins = cdateobj.mins - olddate.mins;
//         let diffsecs = cdateobj.sec - olddate.sec;
//         // let diffdate=olddate.date-cdateobj.date;
//         // let diffmonth=oldmonth.hrs-cdateobj.month;
//         // let diffyear=olddate.year-cdateobj.year;
//         let timediffinsec = diffhrs * 3600 + diffmins  * 60 + diffsecs;
//         console.log(timediffinsec);
//         setProgressValue(prev => prev + parseInt(timediffinsec));
//       }
//     }
//   };

  
//   return (
//     <View>
//       <View style={styles.progressContainer}>
//         <View style={styles.displaytext}>
//           <Text style={styles.progressText}>{hhmmss(progressValue)}</Text>
//           <Text style={styles.progressText}>{appStateVisible}</Text>
//         </View>
//         {/* <View style={styles.progressBar}>
//           <View
//             style={{
//               width: `${(progressValue / convertToSeconds()) * 100}%`,
//               height: '100%',
//               backgroundColor: 'green',
//             }}
//           />
//         </View> */}
//       </View>

//       <Text style={styles.inputLabel}>Enter hours</Text>
//       <TextInput
//         placeholder="0"
//         onChangeText={text => setTime({ ...time, hours: text })}
//         value={time.hours === '0' ? '' : time.hours}
//         style={styles.input}
//       />

//       <Text style={styles.inputLabel}>Enter minutes</Text>
//       <TextInput
//         placeholder="0"
//         onChangeText={text => setTime({ ...time, minutes: text })}
//         value={time.minutes === '0' ? '' : time.minutes}
//         style={styles.input}
//       />

//       <Text style={styles.inputLabel}>Enter seconds</Text>
//       <TextInput
//         placeholder="0"
//         onChangeText={text => setTime({ ...time, seconds: text })}
//         value={time.seconds === '0' ? '' : time.seconds}
//         style={styles.input}
//       />

//       <Button title={'Set Timer'} onPress={() => settimer()} />
//     </View>
//   );
// };

// export default Clockt;

// const styles = StyleSheet.create({
//   displaytext: {
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   progressContainer: {
//     flexDirection: 'column',
//     alignItems: 'center',
//     marginVertical: 20,
//   },
//   progressText: {
//     fontSize: 20,
//     marginBottom: 10,
//   },
//   progressBar: {
//     width: '100%',
//     height: 20,
//     backgroundColor: 'lightgray',
//     borderRadius: 10,
//     overflow: 'hidden',
//   },
//   inputLabel: {
//     color: 'black',
//     fontSize: 20,
//     marginTop: 10,
//   },
//   input: {
//     padding: 10,
//     height: 40,
//     margin: 12,
//     borderWidth: 1,
//     fontWeight: 'bold',
//   },
// });



import React, { useState, useEffect, useRef } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  AppState,
  AsyncStorage,
} from 'react-native';

const Clockt = ({ navigation }) => {
  const appState = useRef(AppState.currentState);
  const [appStateVisible, setAppStateVisible] = useState(appState.current);
  const [time, setTime] = useState({
    hours: '0',
    minutes: '5',
    seconds: '0',
  });
  const [progressValue, setProgressValue] = useState(0);
  const [intervalId, setIntervalId] = useState(null); // Declare intervalId

  const convertToSeconds = () => {
    const hours = parseInt(time.hours) || 0;
    const minutes = parseInt(time.minutes) || 0;
    const seconds = parseInt(time.seconds) || 0;
    return hours * 3600 + minutes * 60 + seconds;
  };
  let id = null;
  const hhmmss = sec => {
    if (sec == 0) return `00:00:00`;
    let hrs = parseInt(sec / 3600);
    if (hrs < 10) {
      hrs = `0${hrs}`;
    }
    sec = sec % 3600;
    let mins = parseInt(sec / 60);
    if (mins < 10) {
      mins = `0${mins}`;
    }
    sec = sec % 60;
    if (sec < 10) {
      sec = `0${sec}`;
    }
    return `${hrs}:${mins}:${sec}`;
  };
  const settimer = () => {
    const totalTime = convertToSeconds();
    setProgressValue(totalTime);
    if (id) {
      return;
    }
    id = setInterval(() => {
      setProgressValue(prevValue => {
        const newValue = prevValue - 1;

        if (newValue <= 0) {
          clearInterval(id);
          console.warn('Interval cleared');
          id = null;
          AsyncStorage.removeItem('lastdate');
          setTime({ minutes: '', hours: '', seconds: '' });

          return totalTime;
        }

        return newValue;
      });
    }, 1000);

    // Save intervalId to state
    setIntervalId(id);
  };
  //   componenet did mount
  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      appState.current = nextAppState;
      setAppStateVisible(appState.current);
    });
    if(intervalId==null)
    {
        settimer();
    }
    // console.warn(appStateVisible);
    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    backgroundimplementer();
  }, [appStateVisible]);
  const backgroundimplementer = async () => {
    if (intervalId && appStateVisible === 'background') {
      let hrs = new Date().getHours(); //Current Hours
      let mins = new Date().getMinutes(); //Current Minutes
      let sec = new Date().getSeconds(); //Current Seconds
      let date = new Date().getDate(); //Current Date
      let month = new Date().getMonth() + 1; //Current Month
      let year = new Date().getFullYear(); //Current Year
      console.warn(`${hrs}:${mins}:${sec} ${date}/${month}/${year}`);
      let currtimeobj = {
        hrs,
        mins,
        sec,
        date,
        month,
        year,
      };
      AsyncStorage.setItem('lastdate', JSON.stringify(currtimeobj));

      // Error saving data

      // make a object of this and store in aync storage
    } else if (intervalId && appStateVisible === 'active') {
      let olddate = await AsyncStorage.getItem('lastdate');
      olddate = JSON.parse(olddate);
      let cdateobj = {
        hrs: new Date().getHours(),
        mins: new Date().getMinutes(),
        sec: new Date().getSeconds(),
        date: new Date().getDate(),
        month: new Date().getMonth() + 1,
        year: new Date().getFullYear(),
      };

      if (olddate) {
        console.log('olddate was', olddate);
        console.log('currdate is', cdateobj);
        let diffhrs = cdateobj.hrs - olddate.hrs;
        let diffmins = cdateobj.mins - olddate.mins;
        let diffsecs = cdateobj.sec - olddate.sec;
        // let diffdate=olddate.date-cdateobj.date;
        // let diffmonth=oldmonth.hrs-cdateobj.month;
        // let diffyear=olddate.year-cdateobj.year;
        let timediffinsec = diffhrs * 3600 + diffmins * 60 + diffsecs;
        console.log(timediffinsec);
        setProgressValue( prev => {
          if (prev - parseInt(timediffinsec) > 0) {
            return prev - parseInt(timediffinsec);
          } else {
            clearInterval(intervalId)
            setIntervalId(null)
            AsyncStorage.removeItem('lastdate');
            return 0
           
          }
        });
      }
    }
  };

  return (
    <View>
      <View style={styles.progressContainer}>
        <View style={styles.displaytext}>
          <Text style={styles.progressText}>{hhmmss(progressValue)}</Text>
          {/* <Text style={styles.progressText}>{appStateVisible}</Text>  */}
       </View>
       
        {/* <View style={styles.progressBar}>
          <View
            style={{
              width: `${(progressValue / convertToSeconds()) * 100}%`,
              height: '100%',
              backgroundColor: 'green',
            }}
          />
        </View> */}
      </View>

      {/* <Text style={styles.inputLabel}>Enter hours</Text>
      <TextInput
        placeholder="0"
        onChangeText={text => setTime({ ...time, hours: text })}
        value={time.hours === '0' ? '' : time.hours}
        style={styles.input}
      />

      <Text style={styles.inputLabel}>Enter minutes</Text>
      <TextInput
        placeholder="0"
        onChangeText={text => setTime({ ...time, minutes: text })}
        value={time.minutes === '0' ? '' : time.minutes}
        style={styles.input}
      />

      <Text style={styles.inputLabel}>Enter seconds</Text>
      <TextInput
        placeholder="0"
        onChangeText={text => setTime({ ...time, seconds: text })}
        value={time.seconds === '0' ? '' : time.seconds}
        style={styles.input}
      />

      <Button title={'Set Timer'} onPress={() => settimer()} /> */}
    </View>
  );
};

export default Clockt;

const styles = StyleSheet.create({
  displaytext: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  progressContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    marginVertical: 20,
  },
  progressText: {
    fontSize: 20,
    marginBottom: 10,
  },
  progressBar: {
    width: '100%',
    height: 20,
    backgroundColor: 'lightgray',
    borderRadius: 10,
    overflow: 'hidden',
  },
  inputLabel: {
    color: 'black',
    fontSize: 20,
    marginTop: 10,
  },
  input: {
    padding: 10,
    height: 40,
    margin: 12,
    borderWidth: 1,
    fontWeight: 'bold',
  },
});