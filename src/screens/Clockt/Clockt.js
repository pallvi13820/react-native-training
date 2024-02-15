import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

const Clockt = ({ navigation }) => {
    const [time, setTime] = useState({
        hours: '0',
        minutes: '0',
        seconds: '0',
    });
    const [progressValue, setProgressValue] = useState(0);
    const [fill, setFill] = useState(0);

    const convertToSeconds = () => {
        const hours = parseInt(time.hours) || 0;
        const minutes = parseInt(time.minutes) || 0;
        const seconds = parseInt(time.seconds) || 0;
        return hours * 3600 + minutes * 60 + seconds;
    };

    const settimer = () => {
        const totalTime = convertToSeconds();

        setProgressValue(0);
        const interval = setInterval(() => {
            setProgressValue((prevValue) => {
                const newValue = prevValue + 1;

                if (newValue >= totalTime) {
                    clearInterval(interval);
                    setFill(100);
                    return totalTime;
                }
                setFill(Math.round((newValue * 100) / totalTime));
                return newValue;
            });
        }, 1000);
    };

    return (
        <View>
            <AnimatedCircularProgress
                size={200}
                width={3}
                fill={fill}
                tintColor="green"
                backgroundColor="blue"
            >
                {
                    (fill) => (
                        <Text>
                            {progressValue}
                        </Text>
                    )
                }
            </AnimatedCircularProgress>

            <Text style={{ color: 'black', fontSize: 20 }}> Enter hours</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, hours: text })}
                value={time.hours}
                style={{
                    padding: 10,
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    fontWeight: 'bold',
                }}
            />

            <Text style={{ color: 'black', fontSize: 20 }}> Enter minutes</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, minutes: text })}
                value={time.minutes}
                style={{
                    padding: 10,
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    fontWeight: 'bold',
                }}
            />

            <Text style={{ color: 'black', fontSize: 20 }}> Enter seconds</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, seconds: text })}
                value={time.seconds}
                style={{
                    padding: 10,
                    height: 40,
                    margin: 12,
                    borderWidth: 1,
                    fontWeight: 'bold',
                }}
            />

            <Button title={'Set Timer'} onPress={() => settimer()} />
        </View>
    );
};

export default Clockt;

const styles = StyleSheet.create({});
