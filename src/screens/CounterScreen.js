import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const CounterScreen = () => {
    const [counter, setCounter] = useState(0);

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => setCounter(counter + 1)}>
                <Text style={styles.button}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setCounter(counter - 1)}>
                <Text style={styles.button}>
                    Decrement
                </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                Current Counter: {counter}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 5,
    },
    button: {
        margin: 5,
        textAlign: "center",
        fontSize: 35,
        color: "blue"
    },
    text: {
        textAlign: "center",
        fontSize: 30
    }
});

export default CounterScreen;
