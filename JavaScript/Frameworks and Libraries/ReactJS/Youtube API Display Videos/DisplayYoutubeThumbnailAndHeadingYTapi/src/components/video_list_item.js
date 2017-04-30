// Imports:
import React from 'react';

// Functional component:
// Param {video}: The video property passed in. Using ES6 Syntax.
// Return: The videos as a list item.
const VideoListItem = ({video}) => {
	// // Create video variable to hold the video off the props.
	// // We don't have to do the below because we passed in {video}.
	// // If we would have passed in props we would have done the below.
	// const video = props.video;

	// Get the thumbnail image from the video property:
	// This pulls the property off the youtube video objects snippet object then
	// the property of snippet thumbnail, then default, and then the url property.
	const imageURL = video.snippet.thumbnails.default.url;

	// Add classNames to various html elements.
	// Note: In JSX you use className not class to denote css style class names.
	// Set the src of image tag w/ className media-object to the url from the video.
	// Set the heading of the video using {video.snippet.title}
	return(
		<li className="list-group-item">
			<div className="video-list media">
				<div className="media-left">
					<img className="media-object" src={imageURL} />
				</div>
			</div>

			<div className="media-body">
				<div className="media-heading">
					{video.snippet.title}
				</div>
			</div>
		</li>
	);
};

// Export component so can use it elsewhere:
export default VideoListItem;