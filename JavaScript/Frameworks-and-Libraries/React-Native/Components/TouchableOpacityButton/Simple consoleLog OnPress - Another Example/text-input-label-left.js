import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput} from 'react-native';
import CustomButton from './CustomButton';

export default class TextInputLabelLeft extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

  onPressJoinFree() {
    console.log('pressed');
    
  }

	render() {
		return (
	    <View style={styles.container}>
	      <Text style={styles.welcome}>
	        {this.props.zipCodeText}
	      </Text>

	      <TextInput
	        placeholder = {'Enter zip code'}
	        style={styles.textInputLabel}
	        onChangeText={(text) => this.setState({text})}
	        value={this.state.text}
	      />

        <CustomButton 
        	buttonText="Submit" 
        	onPress={() => this.onPressJoinFree()} 
        	customTextStyles = {styles.customTextStyles}
        	customButtonStyles = {styles.customButtonStyles}
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
  	height: 45,
  	width: 200,
  	borderColor: 'gray',
  	borderWidth: 1,
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    // borderRadius: 1,
    // borderWidth: .5,
    // borderColor: 'blue',
  }, 
  customButtonStyles: {

  }, 
  customTextStyles: {
  }
});