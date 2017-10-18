import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

{ /* Destructure styles 
		
		Destructure onPress and children props. 
*/ }

const Button = ({ onPress, children }) => {
	const { buttonStyle, textStyle } = styles;

	{ /* onPress is action to take when button is pressed. */ }
	return (
		<TouchableOpacity onPress={onPress} style={buttonStyle}>
			<Text style={textStyle}>
				{children}
			</Text>
		</TouchableOpacity>
	);
};

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
		alignSelf: 'stretch',
		justifyContent: 'center',
		backgroundColor: '#7BBA33',
		marginLeft: 25,
		marginRight: 25,
		height: 55,
		borderRadius: 10
	}
};

export default Button;
