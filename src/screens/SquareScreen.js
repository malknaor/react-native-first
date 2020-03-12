import React, { useReducer, useCallback } from 'react';
import { StyleSheet, View } from 'react-native';
import Toast from 'react-native-simple-toast';

import ColorCounter from '../Components/ColorCounter';

const COLOR_INC_DEC_VALUE = 15;

const rgbReducer = (state, action) => {
    switch (action.type) {
        case "INC_RED":
            return { ...state, red: state.red + COLOR_INC_DEC_VALUE };
        case "DEC_RED":
            return { ...state, red: state.red - COLOR_INC_DEC_VALUE };
        case "INC_GREEN":
            return { ...state, green: state.green + COLOR_INC_DEC_VALUE };
        case "DEC_GREEN":
            return { ...state, green: state.green - COLOR_INC_DEC_VALUE };
        case "INC_BLUE":
            return { ...state, blue: state.blue + COLOR_INC_DEC_VALUE };
        case "DEC_BLUE":
            return { ...state, blue: state.blue - COLOR_INC_DEC_VALUE };
        default:
            return state;
    }
};

const SquareScreen = () => {
    const [state, dispatch] = useReducer(rgbReducer, {
        red: 0,
        green: 0,
        blue: 0
    });

    const validateAndDispatchColorChange = useCallback(
        (type, newValue) => {
            if (validateNewColorValue(newValue)) {
                dispatch({type: type})
            }
        },
        []
    );

    return (
        <View style={styles.view}>
            <ColorCounter
                color="Red"
                value={state.red}
                onIncrease={() => validateAndDispatchColorChange('INC_RED', state.red + COLOR_INC_DEC_VALUE)}
                onDecrease={() => validateAndDispatchColorChange('DEC_RED', state.red - COLOR_INC_DEC_VALUE)}
            />
            <ColorCounter
                color="Green"
                value={state.green}
                onIncrease={() => validateAndDispatchColorChange('INC_GREEN', state.green + COLOR_INC_DEC_VALUE)}
                onDecrease={() => validateAndDispatchColorChange('DEC_GREEN', state.green - COLOR_INC_DEC_VALUE)}
            />
            <ColorCounter
                color="Blue"
                value={state.blue}
                onIncrease={() => validateAndDispatchColorChange('INC_BLUE', state.blue + COLOR_INC_DEC_VALUE)}
                onDecrease={() => validateAndDispatchColorChange('DEC_BLUE', state.blue - COLOR_INC_DEC_VALUE)}
            />
            <View style={{ ...styles.view, ...styles.colorView, height: '50%', width: '95%', backgroundColor: `rgb(${state.red},${state.green},${state.blue})` }}></View>
        </View>
    );
};

const validateNewColorValue = (newColorValue) => {
    if (newColorValue >= 0 && newColorValue <= 255) {
        return true;
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
