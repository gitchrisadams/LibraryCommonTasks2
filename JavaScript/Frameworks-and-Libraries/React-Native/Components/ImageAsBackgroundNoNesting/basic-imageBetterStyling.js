import React, {Component} from 'react';
import { View, Text, StyleSheet, Image} from 'react-native';

export default class BasicImage extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
			<View style={styles.container}>
	      <Image 
	        source={this.props.source}
	        style={styles.backgroundImage}
	      />
      </View>
		)
	}
}

const styles = StyleSheet.create({   
		container: {
			flex: 1,
			width: null,
			height: null,
			marginBottom: 50
		},
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
			width: null,
			height: null,
			resizeMode: 'stretch',
		}
});