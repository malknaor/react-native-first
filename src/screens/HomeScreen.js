import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import NavigationButton from '../Components/NavigationButton';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hi There!
      </Text>
      <NavigationButton text="Go to Components Demo" onPress={() => navigation.navigate('Components')}/>
      <NavigationButton text="Go to List Demo" onPress={() => navigation.navigate('List')}/>
      <NavigationButton text="Go to Image Demo" onPress={() => navigation.navigate('Image')}/>
      <NavigationButton text="Go to Counter Demo" onPress={() => navigation.navigate('Counter')}/>
      <NavigationButton text="Go to Color Demo" onPress={() => navigation.navigate('Color')}/>
      <NavigationButton text="Go to Square Demo" onPress={() => navigation.navigate('Square')}/>
      <NavigationButton text="Go to Text Demo" onPress={() => navigation.navigate('Text')}/>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
});

export default HomeScreen;
