import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class SplashHeader extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
			<View style={styles.wrapper}>
					<Image
						style={styles.headerImage}
						source={this.props.source}
					/>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		alignItems: 'center',
		borderRadius: 1,
		borderWidth: 1,
		borderColor: 'green',
		margin: 10,
		height: 200,

	},

  headerImage: {
  	borderRadius: 1,
		borderWidth: 1,
		borderColor: 'white',
		padding: 10,
    height: 75,
    width: 300,
    marginTop: 20,
    marginBottom: 20,
    resizeMode: 'contain'
  }

});