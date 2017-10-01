// Define dependancies. JQuery, UnderscoreJS, Backbone.
// We also define our own custom modules/files like modles, views etc..
define([
	'jquery',
	'underscore',
	'backbone',
	'models/song'
], 
// JQuery uses the _, BackbonJS, and our custom Song Model:
function($, _, Backbone, Song){
	// Define a Song View:
	var SongView = Backbone.View.extend({
		// Render the content:
		render: function(){
			this.$el.html(this.model.get("title"));

			return this;
		}
	});

	// Return the SongView:
	return SongView;
});

