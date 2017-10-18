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
import { Icon } from 'react-native-elements';

import SplashHeader from './components/splash-header';
import HeroImage from './components/hero-image';
import Button from './components/Button';


export default class YOURAPPHERE extends Component {
  onPressJoinFree() {
    console.log('pressed');
    
  }

  render() {
    return (
      <View style={styles.mainWrapper}>
          <View style={styles.buttonJoinContainer}>
            <Button style={styles.joinButtonStyle} onPress={() => this.onPressJoinFree()}>
              JOIN FREE FOR 7 DAYS
            </Button>
          </View>
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

  buttonJoinContainer: {
    width: 400
  },

});

AppRegistry.registerComponent('AccuplacerInApp', () => AccuplacerInApp);
