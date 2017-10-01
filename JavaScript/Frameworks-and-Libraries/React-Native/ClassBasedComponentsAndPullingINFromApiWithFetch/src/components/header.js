 import React from 'react';
 import { Text, View } from 'react-native';

 const Header = (props) => {
 {/* Destructure so we don't have to do styles.textStyle etc... */}
 	const { textStyle, viewStyle } = styles;

 {/* Notice we just use viewStyle and don't need styles.viewStyle */}
 {/* props.headerText Accepts prop passed in as headerText={'AnyTextHere'} 
 		 from whatever is calling up this component.  */}
  return (
  	<View style={viewStyle}>
  		<Text style={textStyle}>{props.headerText}</Text>
  	</View>
  );
 };

{/* Styles */}
const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		justifyContent: 'center',
		alignItems: 'center',
		height: 60,
		paddingTop: 15,
		shadowColor: '#000',
		shadowOffset: { width: 0, height: 2},
		shadowOpacity: 0.2,
		elevation: 2,
		position: 'relative'
	},
	textStyle: {
		fontSize: 20
	}
}

{/* Export so component available elsewhere */}
export default Header;
