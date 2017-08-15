import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';


const App = () => {
  {/* Pass in prop w/ this text to the header.js file. */}
  return (
  <View>
    <Header headerText={'Albums'} />
    <AlbumList />
  </View>
  );
};

{/* 'albums' must match root folder/project name. */}
AppRegistry.registerComponent('albums', () => App);
