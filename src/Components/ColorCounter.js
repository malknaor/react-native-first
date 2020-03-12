import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const ColorCounter = ({ color, value, onIncrease, onDecrease }) => {
    return (
        <View style={styles.view}>
            <Text style={styles.text}>{color} - {value}</Text>
            <Button
                style={styles.button}
                title={`More ${color}`}
                onPress={onIncrease}
            />
            <Button
                style={styles.button}
                title={`Less ${color}`}
                onPress={onDecrease}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    view: {
        margin: 10,
    },
    button: {
        fontSize: 20
    }, 
    text: {
        fontSize: 15,
        textAlign: 'center'
    }
});

export default ColorCounter;
