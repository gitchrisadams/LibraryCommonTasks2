// Searchbar Component

// Imports:
import React, { Component } from 'react';

// The SearchBar component as a class based component:
// Define SearchBar class and give it access to React.Component functionality.
class SearchBar extends Component{
	// // Render the component and responding to event w/ separate function example:
	// // this.onInputChange is method to run when input box changes.
	// render(){
	// 	return <input onChange={this.onInputChange} />;
	// }

	// // Example responding to event w/ separate function:
	// // Event handler: Event to perform when input box changes.
	// // param event: The event that occurred. 
	/*
	onInputChange(event){
		// Console log the value of the event.
		console.log(event.target.value);
	}
	*/

	// Render component using ES6 fat arrow function notation, and
	// not using a separate function to respond to the event.
	// Note: onChange={(event)} could have been written like this, but
	// since we only have one arg the event, we can drop off the parens.
	render(){
		return <input onChange={event => console.log(event.target.value)} />;
	}

}

// Export the componenet so available elsewhere:
export default SearchBar;