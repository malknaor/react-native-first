import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>
        Hi There!
      </Text>
      {/* <Button
        style={styles.buttonStyle}
        title="Go to Components Demo"
        onPress={() => navigation.navigate('Components')}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to List Demo"
        onPress={() => navigation.navigate('List')}
      /> */}
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Components')}
      >
        <Text style={styles.buttonText}>
          Go to Components Demo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('List')}
      >
        <Text style={styles.buttonText}>
          Go to List Demo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Image')}
      >
        <Text style={styles.buttonText}>
          Go to Image Demo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('Counter')}
      >
        <Text style={styles.buttonText}>
          Go to Counter Demo
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
  buttonText: {
    fontSize: 20,
    textAlign: 'center',
    color: 'blue'
  },
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
