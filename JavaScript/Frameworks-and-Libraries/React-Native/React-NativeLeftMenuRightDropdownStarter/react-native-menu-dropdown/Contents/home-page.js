{/* The first page user hits when app loads */}

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  StatusBar,
  View
} from 'react-native';

import BasicImage from '../components/basic-image';

export default class TodayView extends Component {
  constructor(props, context) {
    super(props, context);
  }

  render() {
    return (
      <BasicImage
          source={require('../assets/images/wallpaper3.png')}
        />
    );
  }
};

const styles = StyleSheet.create({

});