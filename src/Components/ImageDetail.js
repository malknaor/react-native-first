import React from 'react';
import { Text, StyleSheet, View, Image } from 'react-native';

const ImageDetail = ({title, imageSrc, score}) => {
  return (
    <View style={styles.view}>
        <Image source={imageSrc} style={styles.view}/>
        <Text style={styles.view}>
            {title}
        </Text>
        <Text style={styles.view}>
            Image Score - {score}
        </Text>
    </View>
  );
};

const styles = StyleSheet.create({
    view: {
        margin: 5,
    },
    image: {

    }, 
    details: {

    }
});

export default ImageDetail;
