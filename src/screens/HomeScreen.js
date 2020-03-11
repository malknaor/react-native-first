import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        Hi There!
      </Text>
      <Button 
        style={styles.buttonStyle} 
        title="Go to Components Demo"
        onPress={() => console.log('components was pressed')}
      />
      <Button 
        style={styles.buttonStyle} 
        title="Go to List Demo"
        onPress={() => console.log('list was pressed')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
