import React, {Component} from 'react';
import { View, Text, StyleSheet, Image, Dimensions} from 'react-native';

export default class BasicImage extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	onHamburgerPress() {
		console.log('Hamburger, Hamburger... Pressed');
	}

	render() {
		return (
			<View>
        <Image 
          source={this.props.source}
          style={styles.backgroundImage}
        />
        	<Text 
        		style={styles.text}
        		onPress={this.onHamburgerPress}
        	>
        		&#xf039;
        	</Text>
			</View>
		)
	}
}

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const styles = StyleSheet.create({   
    text: {
    		marginLeft: 5,
    		marginTop: 22,
    		fontFamily: 'fontawesome',
        color: 'black',
        fontSize: 25,
        backgroundColor: 'rgba(0,0,0,0)',
    },
		backgroundImage: {
			flex: 1,
			justifyContent: 'center',
			alignItems: 'center',
			position: 'absolute',
			width: viewportWidth,
			height: viewportHeight,
			resizeMode: 'stretch',
			backgroundColor: 'rgba(0,0,0,0)',
		}
});