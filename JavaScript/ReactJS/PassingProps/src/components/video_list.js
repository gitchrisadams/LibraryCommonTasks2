// video_list doesn't use state so can be a simple functional component.

// Imports:
import React from 'react';

// Define function to return list of videos:
// Add a css className to the list. This is like an html class but
// to avoid conflicts with React built-in class keyword, you use className instead of class.
// Param: props accepts the video properties passed in.
const VideoList = (props) => {
	// Display the lenght of the videos array in the list:
	return(
		<ul className="col-md-4 list-group">
			{props.videos.length}
		</ul>
	);
}

// Export the component so can use elsewhere:
export default VideoList;