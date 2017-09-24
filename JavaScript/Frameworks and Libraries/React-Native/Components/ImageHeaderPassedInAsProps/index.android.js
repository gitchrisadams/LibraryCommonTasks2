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

import Splash from './components/splash';
import SplashHeader from './components/splash-header';

export default class AccuplacerInApp extends Component {
  render() {
    return (
      <View style={styles.mainWrapper}>
        <SplashHeader 
          source={require('PATH_TO_YOUR_IMAGE_HERE')}
        />
        <Splash />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    backgroundColor: 'black',
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'red',
    margin: 5,
  }, 

});

AppRegistry.registerComponent('AccuplacerInApp', () => AccuplacerInApp);
