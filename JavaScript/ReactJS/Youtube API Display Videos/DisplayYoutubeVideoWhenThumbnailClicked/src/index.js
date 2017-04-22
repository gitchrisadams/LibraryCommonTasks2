// Imports:
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

// Import the custom SearchBar component from the search_bar.js file:
import SearchBar from './components/search_bar';

// Import the custom VideoList component:
import VideoList from './components/video_list';

// Import the custom VideoDetail component:
import VideoDetail from './components/video_details';

// Library for searching Youtube Videos.
// Installed using, npm install --save youtube-api-search
import YTSearch from 'youtube-api-search';

// Store Youtube API key:
const API_KEY = 'AIzaSyD5TvjD6Nu5HsSqj9e0c7MM1YJ4iHuUzW8';



// Create a class component that should produce some html.
// Insert the SearchBar component tag into the page.
class App extends Component {
	// Constructor:
	constructor(props){
		super(props);


		// Default state value:
		// A videos object w/ array of the videos.
		// selectedVideo starts off as null.
		this.state = { 
			videos: [],
			selectedVideo:  null

		};

		// Use YTSearch library to pass in object w/ api key and a test search term:
		// The second argument is a function that gets called w/ some response data.
		// Note (videos) => is ES6 fat arrow function is just like function(videos){}
		YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
			// Set the state w/ a new list of videos by passing in the data.
			// The below is ES6 syntax for this.setState({ videos: videos }) and is the same.
			// If key is same name as value you just need to use one name.
			//this.setState({ videos });

			// Use regular syntax, not ES6 since we are adding more objects:
			// Set the default selected video as first video in videos array.
			this.setState({
				videos: videos,
				selectedVideo: videos[0]
			});


		});
	}

	// Render the component:
	// Render the SearchBar, VideoDetail, and VideoList component to the page.
	// Passing Props:
	// Pass the selected video to the VideoDetail component as a prop.
	// Pass videos properties from parent component here to the child VideoList by
	// referencing a javascript variable so need to use {} and pass in
	// {this.state.videos}
	// The onVideoSelect updates the state of the video selected and passes it to VideoList.
	render(){
		return (
			<div>
				<SearchBar />
				<VideoDetail video={this.state.selectedVideo} />
				<VideoList 
					onVideoSelect={selectedVideo => this.setState({selectedVideo}) }
					videos={this.state.videos} />
			</div>
		);
	}
}


// Take this component's generated html and put it on the page(In the DOM):
// Pass in the JSX tag:
// Find the div .container selector and render the app into
// that div.
ReactDOM.render(<App />, document.querySelector('.container'));