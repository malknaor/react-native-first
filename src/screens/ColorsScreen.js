import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';

const ColorScreen = () => {
    const [colors, setColors] = useState([]);

    return (
        <View style={styles.view}>
            <TouchableOpacity onPress={() => {
                setColors([...colors, randomRGB()]);
            }}>
                <Text style={styles.button}>
                    Add Random Color Box
                </Text>
            </TouchableOpacity>
            <FlatList
                style={styles.list}
                data={colors}
                keyExtractor={color => color}
                renderItem={({ item }) => {
                    return (
                        <View style={{ ...styles.ColorScreen, height: 100, width: 100, backgroundColor: item }}></View>
                    );
                }}>
            </FlatList>
        </View>
    );
};

const randomRGB = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
}

const styles = StyleSheet.create({
    view: {
        margin: 5,
    },
    list: {
        margin: 5
    },
    ColorView: {
        
    },
    button: {
        margin: 5,
        textAlign: "center",
        fontSize: 35,
        color: "blue",
        backgroundColor: "lightgray"
    },
    text: {
    }
});

export default ColorScreen;
