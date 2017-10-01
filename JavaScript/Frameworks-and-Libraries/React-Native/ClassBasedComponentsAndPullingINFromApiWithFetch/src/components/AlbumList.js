import React, {Component} from 'react';
import { View, Text } from 'react-native';

{/* Functional version of the component */}
{/*
const AlbumList = () => {
	return (
		<View>
			<Text>Album List!!!!</Text>
		</View>
	);
};
*/}

{/* Class based version of the component 
		render() is required for a class based component.
	*/}	
{/* componentWilMount will run when component is about to be 
		rendered to screen 
	
		fetch is the native react way of fetching from an api.
	*/}
class AlbumList extends Component {
	componentWillMount() {
		fetch('https://rallycoding.herokuapp.com/api/music_albums')
			.then((response) => response.json())
			.then((responseData) => {
				console.log(responseData);
			});
	}
	render() {
		return (
			<View>
				<Text>Album List!!!!</Text>
			</View>
		);
	}
}

export default AlbumList;