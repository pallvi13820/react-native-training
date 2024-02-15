import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

const Clockt = ({ navigation }) => {
    const [time, setTime] = useState({
        hours: '0',
        minutes: '0',
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

    const settimer = () => {
        const totalTime = convertToSeconds();
        setProgressValue(0);

        const id = setInterval(() => {
            setProgressValue((prevValue) => {
                const newValue = prevValue + 1;

                if (newValue >= totalTime) {
                    clearInterval(id);
                    return totalTime;
                }

                return newValue;
            });
        }, 1000);

        // Save intervalId to state
        setIntervalId(id);
    };

    useEffect(() => {
        return () => {
            // Clear interval using the saved intervalId
            clearInterval(intervalId);
        };
    }, [intervalId]); // Add intervalId to the dependency array

    return (
        <View>
            <View style={styles.progressContainer}>
                <Text style={styles.progressText}>{progressValue}</Text>
                <View style={styles.progressBar}>
                    <View
                        style={{
                            width: `${(progressValue / convertToSeconds()) * 100}%`,
                            height: '100%',
                            backgroundColor: 'green',
                        }}
                    />
                </View>
            </View>

            <Text style={styles.inputLabel}>Enter hours</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, hours: text })}
                value={time.hours}
                style={styles.input}
            />

            <Text style={styles.inputLabel}>Enter minutes</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, minutes: text })}
                value={time.minutes}
                style={styles.input}
            />

            <Text style={styles.inputLabel}>Enter seconds</Text>
            <TextInput
                placeholder="0"
                onChangeText={(text) => setTime({ ...time, seconds: text })}
                value={time.seconds}
                style={styles.input}
            />

            <Button title={'Set Timer'} onPress={() => settimer()} />
        </View>
    );
};

export default Clockt;

const styles = StyleSheet.create({
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
