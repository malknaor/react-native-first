import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput } from 'react-native';

const TextScreen = () => {
    const [inputValue, setInputValue] = useState('');

    return (
        <View>
            <Text style={styles.text}>
                Enter Password:
            </Text>
            <TextInput
                style={styles.input}
                autoCapitalize="none"
                autoCorrect={false}
                value={inputValue}
                onChangeText={newValue => setInputValue(newValue)}
            />
            {inputValue.length < 4 && <Text style={{ ...styles.text, ...styles.error }}>{`Password length must be longer than 5 characters`}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    input: {
        margin: 15,
        borderColor: 'black',
        borderWidth: 1
    },
    text: {
        fontSize: 30,
        textAlign: 'center'
    },
    error: {
        color: 'red'
    }
});

export default TextScreen;