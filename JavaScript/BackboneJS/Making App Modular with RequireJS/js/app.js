// Define Dependancies and wrap everything in module
// using RequireJS:
define([
	'underscore',
	'backbone',
	'models/song',
	'views/songView'
], 
function(_, Backbone, Song, SongView){
	// Initialize/Constructor so we can call this from the main module:
	var initialize = function(){
		// Create a new Song Model instance:
		var song = new Song({title: "Blue in Green"});

		// Create a new Song View instance:
		var songView = new SongView({el: "#container", model: song});

		// Render the song View:
		songView.render();
	}

	return {
		initialize: initialize
	};


});



