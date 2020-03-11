import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Kornholio';

    return (
        <View>
            <Text style={styles.textStyleTop}>
                Getting started with react native!
            </Text>
            <Text style={styles.textStyleBottom}>
                {`My name is ${name}`}
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyleTop: {
        fontSize: 45
    },
    textStyleBottom: {
        fontSize: 20
    }
});

export default ComponentsScreen;