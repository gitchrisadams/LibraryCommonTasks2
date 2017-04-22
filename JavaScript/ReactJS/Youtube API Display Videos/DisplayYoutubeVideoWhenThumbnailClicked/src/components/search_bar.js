// Searchbar Component

// Imports:
import React, { Component } from 'react';

// The SearchBar component as a class based component:
// Define SearchBar class and give it access to React.Component functionality.
class SearchBar extends Component{
	// Constructor:
	// This is how we initialize state in a class based component.(Funct components don't have state).
	constructor(props){
		// Call the super class passing in the property.
		super(props);

		// Initialize the state to the search term entered in the searchbox.
		// Since this is the contructor, we use this.state, everywhere else
		// this.state should NOT be used but instead this.setState should be used. 
		// Otherwise Reat won't be informed that state has chanaged.
		// Set a Starting Value for the state to show in input box.
		this.state = {
			term: 'Starting Value'
		};
	}

	// Render component using ES6 fat arrow function notation, and
	// not using a separate function to respond to the event.
	// Note: onChange={(event)} could have been written like this, but
	// since we only have one arg the event, we can drop off the parens.
	render(){
		// Set the state to the value typed into the search box.
		// Set the value to the current state of term.
		// Put the state value set onto page. When you ref JSX you need to
		// use the {} like this: {this.state.term}
		return(
			<div>
			<input 
				value={this.state.term}
				onChange={event => this.setState({ term: event.target.value })} />
				Value of the input: {this.state.term}
			</div>
		);
	}

}

// Export the componenet so available elsewhere:
export default SearchBar;