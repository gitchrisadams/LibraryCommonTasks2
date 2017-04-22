// Searchbar Component

// Imports:
import React, { Component } from 'react';

// The SearchBar component as a functional component.
// This is a simple functional component versus
// a class based component which is more complex.
// const SearchBar = () => {
// 	// Generate html input search box:
// 	return <input />
// };

// The SearchBar component as a class based component:
// Define SearchBar class and give it access to React.Component functionality.
class SearchBar extends Component{
	// Render the component:
	render(){
		return <input />;
	}
}

// Export the componenet so available elsewhere:
export default SearchBar;