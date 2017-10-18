/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View
} from 'react-native';
import { Icon } from 'react-native-elements';

import HeroImage from './components/hero-image';

export default class YOUR_APP_NAME_HERE extends Component {
  onPressJoinFree() {
    console.log('pressed');
  }
  render() {
    return (
      <View style={styles.mainWrapper}>
        <HeroImage 
          source={require('./assets/images/YOU_IMAGE_HERE.jpg')}
        >
        </HeroImage>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 0,
  }, 


});

AppRegistry.registerComponent('YOUR_APP_NAME_HERE', () => YOUR_APP_NAME_HERE);
