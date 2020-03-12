import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-simple-toast';

import ColorCounter from '../Components/ColorCounter';

const COLOR_INC = 15;

const SquareScreen = () => {
    const [red, setRed] = useState(0);
    const [green, setGreen] = useState(0);
    const [blue, setBlue] = useState(0);

    return (
        <View style={styles.view}>
            <ColorCounter
                color="Red"
                value={red}
                onIncrease={() => validateAndSetColor(red + COLOR_INC, setRed)}
                onDecrease={() => validateAndSetColor(red - COLOR_INC, setRed)}
            />
            <ColorCounter
                color="Green"
                value={green}
                onIncrease={() => validateAndSetColor(green + COLOR_INC, setGreen)}
                onDecrease={() => validateAndSetColor(green - COLOR_INC, setGreen)}
            />
            <ColorCounter
                color="Blue"
                value={blue}
                onIncrease={() => validateAndSetColor(blue + COLOR_INC, setBlue)}
                onDecrease={() => validateAndSetColor(blue - COLOR_INC, setBlue)}
            />
            <View style={{ ...styles.view, ...styles.colorView, height: '50%', width: '95%', backgroundColor: `rgb(${red},${green},${blue})` }}></View>
        </View>
    );
};

const validateAndSetColor = (newColorValue, setColor) => {
    if (newColorValue >= 0 && newColorValue <= 255) {
        setColor(newColorValue);
    } else if (newColorValue < 0) {
        Toast.show(`Unable to update, Value < 0`, Toast.LONG);
    } else if (newColorValue > 255) {
        Toast.show(`Unable to update, Value >255`, Toast.LONG);
    }
};

const styles = StyleSheet.create({
    view: {
        display: 'flex',
        margin: 10
    }, 
    colorView: {
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default SquareScreen;
