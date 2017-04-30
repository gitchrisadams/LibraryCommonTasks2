// Imports:
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// Import the custom SearchBar component from the search_bar.js file:
import SearchBar from './components/search_bar';

// Import the custom VideoList component:
import VideoList from './components/video_list';

// Store Youtube API key:
const API_KEY = 'AIzaSyD5TvjD6Nu5HsSqj9e0c7MM1YJ4iHuUzW8';

// Library for searching Youtube Videos.
// Installed using, npm install --save youtube-api-search
import YTSearch from 'youtube-api-search';

// Create a class component that should produce some html.
// Insert the SearchBar component tag into the page.
class App extends Component {
	// Constructor:
	constructor(props){
		super(props);


		// Default state value:
		// A videos object w/ array of the videos.
		this.state = { videos: [] };

		// Use YTSearch library to pass in object w/ api key and a test search term:
		// The second argument is a function that gets called w/ some response data.
		// Note (videos) => is ES6 fat arrow function is just like function(videos){}
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// Set the state w/ a new list of videos by passing in the data.
			// The below is ES6 syntax for this.setState({ videos: videos }) and is the same.
			// If key is same name as value you just need to use one name.
			this.setState({ videos });

			// Console log the data:
			console.log(videos);
		});
	}

	// Render the component:
	// Add the SearchBar and VideoList component.
	// Passing Props:
	// Pass videos properties from parent component here to the child VideoList by
	// referencing a javascript variable so need to use {} and pass in
	// {this.state.videos}
	render(){
		return (
			<div>
				<SearchBar />
				<VideoList videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated html and put it on the page(In the DOM):
// Pass in the JSX tag:
// Find the div .container selector and render the app into
// that div.
ReactDOM.render(<App />, document.querySelector('.container'));