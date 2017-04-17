/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './common/app'
import HandleListItems from './common/handlelistitems'

export default class MyFirstReactNativeProject extends Component {
  render() {
    return (
      <App/>
    );
  }
}

AppRegistry.registerComponent('MyFirstReactNativeProject', () => MyFirstReactNativeProject);
