import React, { useReducer } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'INC':
            return { count: state.count + 1 };
        case 'DEC':
            return { count: state.count - 1 };
        default:
            return state;
    }
};

const CounterScreen = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => dispatch({ type: 'INC' })}>
                <Text style={styles.button}>
                    Increment
                </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => dispatch({ type: 'DEC' })}>
                <Text style={styles.button}>
                    Decrement
                </Text>
            </TouchableOpacity>
            <Text style={styles.text}>
                Current Counter: {state.count}
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
