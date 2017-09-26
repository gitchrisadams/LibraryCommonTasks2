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
  TouchableHighlight,
  Image
} from 'react-native';

import BasicImage from './components/basic-image'

export default class kicked_out extends Component {
  render() {
    return (
        <BasicImage
          source={require('./assets/images/wallpaper2.png')}
        >
          <Text style={{ fontFamily: 'fontawesome', fontSize: 40 }}>&#xf2bc;</Text>
        </BasicImage>
        
    );
  }
}

const styles = StyleSheet.create({   
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 32
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
      resizeMode: 'stretch',
      backgroundColor: 'rgba(0,0,0,0)',
    }
});


AppRegistry.registerComponent('kicked_out', () => kicked_out);
