import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';

LocaleConfig.locales['en'] = {
  monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
};
LocaleConfig.defaultLocale = 'en';

const CustomizeCalendar = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedImagePath, setSelectedImagePath] = useState(null);

  const handleDayPress = (day) => {

    setSelectedDate(day.dateString);

    const imagePath = require('../assets/images/d1.png');
    setSelectedImagePath(imagePath);
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Calendar onDayPress={handleDayPress} />
      {selectedDate !== '' && (
        <View style={{ margin: 20 }}>
          <Text>Selected Date: {selectedDate}</Text>
          {selectedImagePath ? (
            <View>
              <Image source={selectedImagePath} style={{ width: 200, height: 200, marginVertical: 10 }} />
            </View>
          ) : (
            <Text>No image selected for this date.</Text>
          )}
        </View>
      )}
    </View>
  );
};

export default CustomizeCalendar;
