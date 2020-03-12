import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const NavigationButton = ({ text, onPress }) => {
    return (
        <TouchableOpacity
            style={styles.buttonStyle}
            onPress={onPress}
        >
            <Text style={styles.buttonText}>
                {text}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    buttonText: {
        fontSize: 20,
        textAlign: 'center',
        color: 'blue'
    },
    buttonStyle: {
        marginVertical: 10
    }
});

export default NavigationButton;