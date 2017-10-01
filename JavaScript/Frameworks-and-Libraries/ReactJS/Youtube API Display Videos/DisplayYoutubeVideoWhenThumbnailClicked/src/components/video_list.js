// video_list doesn't use state so can be a simple functional component.

// Imports:
import React from 'react';

// Import the VideoListItem from the video_list_item.js file 
// in current directory/components:
import VideoListItem from './video_list_item';


// Define function to return list of videos:
// Add a css className to the list. This is like an html class but
// to avoid conflicts with React built-in class keyword, you use className instead of class.
// Param: props accepts the video properties passed in.
const VideoList = (props) => {
	// Put our list together:
	// Create reference to array that gets returned storing in const videoItems:
	// For each element of videos we have a function that gets called w/
	// a single video. And use .map() to loop through the videos array.
	// (video) => is fat arrow function syntax.
	const videoItems = props.videos.map((video) => {
		// Return the VideoListItem and pass it the video:
		// etag is a unique identifier from youtube api such as
		// etag: ""m2yskBQFythfE4irbTIeOgYYfBU/-OlNFkWXFEkuIRS2SU5rtdyW1jU""
		// So each video will have this unique etag.
		// onVideoSelect passes the prop received from main App index.js
		// and passing it on to the VideoListItem.
		return (
			<VideoListItem 
				onVideoSelect={props.onVideoSelect}
				key={video.etag} 
				video={video} />
		);
	});

	// Put the videoItems into the unordered list:
	// This is an array that it will put in the list.
	return(
		<ul className="col-md-4 list-group">
			{videoItems}
		</ul>
	);
}

// Export the component so can use elsewhere:
export default VideoList;

