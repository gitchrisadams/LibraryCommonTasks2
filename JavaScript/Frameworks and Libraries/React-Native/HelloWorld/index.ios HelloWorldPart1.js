import React from 'react'

import { 
  StyleSheet,
  AppRegistry, 
  View, 
  Text,
  StatusBar
} from 'react-native'

{/* Baseball is passed an array so it has multiple styles. */}
class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <StatusBar hidden={true} />
        <Text style={styles.defaultText}>Golf</Text>
        <Text style={[styles.defaultText, styles.selectedText]}>Golf2</Text>
        <Text style={styles.defaultText}>golf3</Text>
      </View>
    )
  }
}
      
{/* Styles */}
{/* flex: 1 is like flex-grow in normal css so that
    element grows by that factor of 1x, 2x etc...
    text-align: aligns the text within each button/box.
 */}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#DDD',
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
  }
})

AppRegistry.registerComponent('HelloWorld', () => App);













