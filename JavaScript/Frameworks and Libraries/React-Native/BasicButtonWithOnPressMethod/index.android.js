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
  View,
  Button
} from 'react-native';

import SplashHeader from './components/splash-header';
import HeroImage from './components/hero-image';

export default class AccuplacerInApp extends Component {
  onPressJoinFree() {
    console.log('pressed');
  }
  render() {
    return (
      <View style={styles.mainWrapper}>
        <SplashHeader 
          source={require('./assets/images/allenprep.png')}
        />

        <HeroImage 
          source={require('./assets/images/accuplacer.jpg')}
        />

        <Text style={styles.headingText}>Your first 7 days free</Text>

        <View style={styles.crushItTextWrapper}>
          <Text style={styles.crushItText1}>
            Crush the ACCUPLACER, SAT & ACT. Access the
          </Text>

          <Text style={styles.crushItText2}>
            entire app...All 4,829 questions, for FREE:
          </Text>
        </View>

        <Button
          large
          title="JOIN FREE FOR 7 DAYS"
          color='#7BBA33'
          onPress={this.onPressJoinFree}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainWrapper: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 5,
  }, 

  headingText: {
    marginTop: 85,
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10
  },

  crushItTextWrapper: {

  },

  crushItText1: {

    marginTop: 5,
    color: 'white',
    fontSize: 17,
    marginBottom: 5,
    /*
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'red'
    */
  },

  crushItText2: {
    color: 'white',
    fontSize: 17,
    marginBottom: 20,
    /*
    borderRadius: 1,
    borderWidth: 1,
    borderColor: 'red'
    */
  },

});

AppRegistry.registerComponent('AccuplacerInApp', () => AccuplacerInApp);
