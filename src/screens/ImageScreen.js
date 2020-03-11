import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

import ImageDetail from '../Components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetail
                title="Forest"
                imageSrc={require('../../assets/forest.jpg')}
                score="7"
            />
            <ImageDetail
                title="Beach"
                imageSrc={require('../../assets/beach.jpg')}
                score="7"
            />
            <ImageDetail
                title="Mountain"
                imageSrc={require('../../assets/mountain.jpg')}
                score="7"
            /> 
        </View>
    );
};

const styles = StyleSheet.create({

});

export default ImageScreen;
