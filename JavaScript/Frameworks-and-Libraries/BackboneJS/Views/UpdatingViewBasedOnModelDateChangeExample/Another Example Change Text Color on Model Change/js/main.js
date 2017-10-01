// Define a new Song Model:
var SongModel = Backbone.Model.extend({
	// Set the default values:
	defaults:{
		listeners: 0
	}
});

// Define a new SongView:
var SongView = Backbone.View.extend({
	// Constructor/Initialize:
	initialize: function(){
		// Render the model whenever it changes:
		// The 3rd param is the context this.
		//this.model.on("change", this.render, this);

		// Instead of rendering the model like above, you can instead
		// call a function instead of using the this.render:
		// Call the this.onModelChange function when model changes.
		this.model.on("change", this.onModelChange, this);
	},

	onModelChange: function(){
		// Add css class name when the model changes: Changes color to red.
		this.$el.addClass("someClass");

		// Store Context:
		var self = this;

		// Set timer to set text to red, then back to default black:
		setTimeout(function(){self.$el.removeClass("someClass");}, 500);

		
		// Render the view when model changes:
		this.render();
	},

	// Render the View function def:
	render: function(){
		// Get the title from the model and put the DOM to the page:
		// Get the listeners from the model.
		this.$el.html(this.model.get("title") + 
			"  - Listeners: " + this.model.get("listeners"));

		return this;
	}
});

// Create a new instance of a song Model:
var songModel = new SongModel({
	title: "Blue in Green"
});

// Create a new instance of a song View:
// Set the el DOM to the container ID and 
// set the model to the songModel instance.
var songView = new SongView({
	el: "#container",
	model: songModel
});

// Render the View:
songView.render();