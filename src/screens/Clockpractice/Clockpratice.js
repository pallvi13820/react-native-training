import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Clockpratice = () => {
  const [time, setTime] = useState(5 * 60); // 5 minutes in seconds

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(prevTime => {
        if (prevTime <= 0) {
          clearInterval(intervalId);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.timerText}>{formatTime(time)}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 40,
  },
});

export default Clockpratice;





