import React, {Component} from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

{/*
	You must pass this component the props:
	Button text like: buttonText="Submit"
	Any custom button or text styles that will override the default such as:
	customTextStyles = {styles.customTextStyles}
	customButtonStyles = {styles.customButtonStyles}
	An onPress method such as: onPress={() => this.onPressJoinFree()} 
*/}

export default class CustomButton extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

  onPressJoinFree() {
    console.log('pressed');
    
  }

	render() {
		console.log('this.props');
		console.log(this.props);
		return (
			<TouchableOpacity 
				onPress={this.props.onPress} 
				style={[styles.buttonStyle, this.props.customButtonStyles]}
			>
				<Text style={[styles.textStyle, this.props.customTextStyles]}>
					{this.props.buttonText}
				</Text>
			</TouchableOpacity>
		);
	}
}

{ /* Styles */ }
const styles = {
	textStyle: {
		alignSelf: 'center',
		color: 'white',
		fontSize: 20,
		fontWeight: '600',
		paddingTop: 10,
		paddingBottom: 10
	},
	buttonStyle: {
		alignSelf: 'center',
		justifyContent: 'center',
		backgroundColor: '#7BBA33',
		marginLeft: 25,
		marginRight: 25,
		height: 50,
		width: 200,
		borderRadius: 10
	},
};
