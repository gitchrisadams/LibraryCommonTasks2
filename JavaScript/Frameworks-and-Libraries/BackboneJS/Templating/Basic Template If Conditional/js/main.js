// Define a new Song Model:
var Song = Backbone.Model.extend();

// Define a new Song View:
var SongView = Backbone.View.extend({
	// Render the Song View:
	render: function(){
		// How we would normally render page without using a template:
		//this.$el.html(this.model.get("title") + " <button>Listen</button>");

		// Use template to render this View:
		// #songTemplate is the id of the template script.
		var template = _.template($("#songTemplate").html());

		// Store the template as JSON in a varible called html:
		var html = template(this.model.toJSON());

		// Pass the html to JQuery to display the html:
		this.$el.html(html);

		return this;
	}
});

// Create an instance of a song Model:
// Set the plays property. 
// In the template there is a conditional to display
// the word Popular if plays are great than 1000.
var song = new Song({title: "Blue in Green", plays: 1100});

// Create an instance of a song View:
var songView = new SongView({el: "#container", model: song});

// Render the song View:
songView.render();