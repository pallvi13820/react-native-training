// import React, { useState } from 'react';
// import { View, Text, Button, StyleSheet } from 'react-native';
// import { Calendar } from 'react-native-calendars';

// const CalendarPickerApp = () => {
//   const [selectedDates, setSelectedDates] = useState({});
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [numberOfDays, setNumberOfDays] = useState(0);

//   const onDayPress = (day) => {
//     const selectedDate = day.dateString;
//     const updatedDates = {
//       ...selectedDates,
//       [selectedDate]: { selected: true, marked: true },
//     };

//     setSelectedDates(updatedDates);

//     if (!startDate || (startDate && endDate)) {
//      setStartDate(selectedDate);
//       setEndDate(null);
//     } else if (startDate && !endDate) {

//       setEndDate(selectedDate);
//       const start = new Date(startDate);
//       const end = new Date(selectedDate);
//       const timeDifference = end.getTime() - start.getTime();
//       const daysDifference = timeDifference / (1000 * 3600 * 24);
//       setNumberOfDays(daysDifference);
//     }
//   };

//   return (
//     <View style={styles.container}>
//       <Calendar
//         markedDates={selectedDates}
//         onDayPress={onDayPress}
//         style={{ width: 350 }}
//       />

//       <View style={styles.resultContainer}>
//         <Text style={styles.resultText}>
//           {startDate ? `Start Date: ${startDate}` : 'Select Start Date'}
//         </Text>
//         <Text style={styles.resultText}>
//           {endDate ? `End Date: ${endDate}` : 'Select End Date'}
//         </Text>
//           <Text style={styles.resultText}>
//             Number of Days: {numberOfDays}
//           </Text>

//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginTop: 5,
//   },
//   resultContainer: {
//     marginTop: 20,
//   },
//   resultText: {
//     fontSize: 18,
//     marginVertical: 5,
//   },
// });

// export default CalendarPickerApp;

import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CalendarPicker from 'react-native-calendar-picker';

const CalendarPickerApp = () => {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [numberOfDays, setNumberOfDays] = useState(0);

  const handleDateChange = (date, type) => {
    if (type === 'START_DATE') {
      setStartDate(date);
      setEndDate(null);
    } else if (type === 'END_DATE' && startDate) {
      setEndDate(date);
      const start = new Date(startDate);
      const end = new Date(date);
      const timeDifference = end.getTime() - start.getTime();
      const daysDifference = timeDifference / (1000 * 3600 * 24);
      setNumberOfDays(daysDifference);
    }
  };

  return (
    <View style={styles.container}>
      <CalendarPicker
        startFromMonday={true}
        allowRangeSelection={true}
        selectedStartDate={startDate}
        selectedEndDate={endDate}
        onDateChange={handleDateChange}
      />

      <View style={styles.resultContainer}>
        <Text style={styles.resultText}>
          {startDate
            ? `Start Date: ${startDate.toDateString()}`
            : 'Select Start Date'}
        </Text>
        <Text style={styles.resultText}>
          {endDate ? `End Date: ${endDate.toDateString()}` : 'Select End Date'}
        </Text>
        <Text style={styles.finalresultText}>Number of Days: {numberOfDays}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5,
  },
  resultContainer: {
    marginTop: 20,
  },
  resultText: {
    fontSize: 25,
    marginVertical: 5,
    color: 'blue',
  },
  finalresultText: {
    fontSize: 25,
    marginVertical: 5,
    color: 'green',
  }
});

export default CalendarPickerApp;
