import React from 'react'

import { 
  Dimensions,
  Image,
  StyleSheet,
  AppRegistry, 
  View, 
  Text,
  StatusBar
} from 'react-native'

import picAndroid from './assets/android.jpg'
import picIos from './assets/ios.png'

{/* Baseball is passed an array so it has multiple styles. */}
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Image style={styles.androidPic} source={picAndroid} />
        <Text style={styles.androidText}>Android</Text>
        
        <Image style={styles.iosPic} source={picIos} />
        <Text style={styles.iosText}>How u like them Apples...</Text>
      </View>
    )
  }
}
      
{/* Styles */}
{/* flex: 1 is like flex-grow in normal css so that
    element grows by that factor of 1x, 2x etc...
    text-align: aligns the text within each button/box.
    width: Dimensions.get('window').width has image take width of screen.
    borderRadius: 40 gives us rounded corners.

 */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  defaultText: {
    flex: 1,
    textAlign: 'center',
    fontSize: 18,
    padding: 5,
    margin: 5,
    color: 'black',
    borderWidth: StyleSheet.hairlineWidth,
  },
  selectedText: {
    flex: 1,
    alignSelf: 'flex-end',
    backgroundColor: 'yellow',
    color: 'blue',
    fontWeight: 'bold',
  },
  androidPic: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width,
    borderRadius: 40,
  },
  iosPic: {
    resizeMode: 'cover',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: Dimensions.get('window').width,
    borderRadius: 40,
  },
  androidText: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    color: 'white',
    alignSelf: 'flex-end',
  },
  iosText: {
    backgroundColor: 'rgba(0,0,0,.7)',
    fontSize: 30,
    padding: 10,
    color: 'white',
    alignSelf: 'flex-end',
  }
})

AppRegistry.registerComponent('HelloWorld', () => App);













