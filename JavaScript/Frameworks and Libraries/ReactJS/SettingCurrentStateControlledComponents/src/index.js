// Imports:
import React from 'react';
import ReactDOM from 'react-dom'

// Import the custom SearchBar component from the search_bar.js file:
import SearchBar from './components/search_bar';

// Store Youtube API key:
const API_KEY = 'AIzaSyD5TvjD6Nu5HsSqj9e0c7MM1YJ4iHuUzW8';

// Library for searching Youtube Videos.
// Installed using, npm install --save youtube-api-search


// Create component that should produce some html.
// Uses the ES6 fat arrow syntax for declaring a function.
// Insert the SearchBar component tag into the page.
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
}


// Take this component's generated html and put it on the page(In the DOM):
// Pass in the JSX tag:
// Find the div .container selector and render the app into
// that div.
ReactDOM.render(<App />, document.querySelector('.container'));