import React, { Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';

export default class HeroImage extends Component {
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
		);
	}
}

const styles = StyleSheet.create({   
	container: {
		alignSelf: 'stretch',
		width: null,
		height: 200,
		marginBottom: 50,
	},
	backgroundImage: {
		alignSelf: 'stretch',
		width: null,
		height: 200,
		resizeMode: 'stretch',
	}
});
