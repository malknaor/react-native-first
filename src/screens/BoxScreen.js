import React from 'react';
import { View, StyleSheet } from 'react-native';

const BoxScreen = () => {

    return (
        <View style={styles.view}>
            <View style={{...styles.innerView, backgroundColor: 'red'}}></View>
            <View style={{...styles.innerView, backgroundColor: 'green', top: 102}}></View>
            <View style={{...styles.innerView, backgroundColor: 'blue'}}></View>
        </View> 
    );
};

const styles = StyleSheet.create({
    view: {
        borderWidth: 5,
        borderColor: 'gray',
        height: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    innerView: {
        margin: 2,
        height: 100,
        width: 100,
        borderColor: 'gray',
        borderWidth: 5
    }
});

export default BoxScreen;