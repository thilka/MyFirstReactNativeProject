import React, { Component } from 'react';
import { AppRegistry, Text, StyleSheet } from 'react-native';

const HelloWorld = () => (
      <Text style={styles.welcome}>Hello world!</Text>
)

const styles = StyleSheet.create({
  welcome: {
    fontSize: 40,
    textAlign: 'center',
    margin: 20,
  }
})

export default HelloWorld