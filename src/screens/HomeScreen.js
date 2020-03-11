import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <View>
      <Text style={styles.text}>
        Hi There!
      </Text>
      <Button
        style={styles.buttonStyle}
        title="Go to Components Demo"
        onPress={() => console.log('Components Button was pressed')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to List Demo"
        onPress={() => console.log('List Button was pressed')}
      />
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('Component TouchableOpacity was pressed')}
      >
        <Text style={styles.text}>
          Go to Components Demo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => console.log('List TouchableOpacity was pressed')}
      >
        <Text style={styles.text}>
          Go to List Demo
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    textAlign: 'center'
  },
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
