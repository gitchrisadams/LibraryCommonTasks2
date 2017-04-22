// Imports:
import React from 'react';

// Define the functional component:(State not necessary)
// Param {video} the video object.
const VideoDetail = ({video}) => {
	// If no video is provided, display message that video is loading
	if(!video){
		return <div>Loading...</div>;
	}

	// Store the video id of the video:
	const videoId = video.id.videoId;

	// // Construct the video url w/ the videoId:
	// // You could do it this way:
	// const url = 'https://www.youtube.com/embed/' + videoId;

	// Construct the video url w/ the videoId:
	// This syntax is a little cleaner than above, note: the backticks, not single quotes.
	const url = `https://www.youtube.com/embed/${videoId}`;

	// Add classNames to various html elements.
	// Create two empty divs to store the title and one for the description.
	// Insert the youtube video url into the src of the iFrame w/ src={url}
	return(
		<div className="video-detail col-md-8">
			<div className="embed-responsive embed-responsive-16by9">
				<iframe className="embed-responsive-item" src={url}></iframe>
			</div>

			<div className="details">
				<div>{video.snippet.title}</div>
				<div>{video.snippet.description}</div>
			</div>
		</div>
	)
};

// Export component so available elsewhere:
export default VideoDetail;