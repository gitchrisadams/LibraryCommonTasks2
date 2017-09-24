import React, {Component} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default class BasicImage extends Component {
	constructor(props) {
	  super(props);

	  this.state = {};
	}

	render() {
		return (
        <Image 
          source={this.props.source}
          style={styles.container}
        >
        <Text style={{ fontFamily: 'fontawesome', fontSize: 30 }}>&#xf2bc;</Text>
        </Image>


		)
	}
}

const styles = StyleSheet.create({   
    text: {
        textAlign: 'center',
        color: 'black',
        fontSize: 32
    },
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      width: null,
      height: null,
      resizeMode: 'stretch',
      backgroundColor: 'rgba(0,0,0,0)',
    }
});