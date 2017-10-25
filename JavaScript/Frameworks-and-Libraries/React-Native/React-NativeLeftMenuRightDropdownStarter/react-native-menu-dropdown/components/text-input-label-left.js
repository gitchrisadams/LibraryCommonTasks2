import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';

export default class TextInputLabelLeft extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
	    <View style={styles.container}>
	      <Text style={styles.welcome}>
	        Zip Code:
	      </Text>

	      <TextInput
	        placeholder = 'Enter zip code'
	        style={{height: 40, width: 200, borderColor: 'gray', borderWidth: 1}}
	        onChangeText={(text) => this.setState({text})}
	        value={this.state.text}
	      />
	    </View>
		)
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',

    borderRadius: 1,
    borderWidth: .5,
    borderColor: 'red',

  },
  textInputLabel: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

    borderRadius: 1,
    borderWidth: .5,
    borderColor: 'blue',
  },
});