import React from 'react';
import { Text, StyleSheet, View, Button, TouchableOpacity } from 'react-native';

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
        <Text style={styles.text}>
          Go to Components Demo
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.buttonStyle}
        onPress={() => navigation.navigate('List')}
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
    fontSize: 20,
    textAlign: 'center'
  },
  buttonStyle: {
    marginVertical: 10
  }
});

export default HomeScreen;
