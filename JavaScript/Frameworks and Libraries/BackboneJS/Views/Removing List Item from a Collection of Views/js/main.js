// Define a new Model for a Song:
var SongModel = Backbone.Model.extend();

// Define a new Collection of songs adding the song model:
var SongCollection = Backbone.Collection.extend({
	model: SongModel
});

// Define a View for a song:
var SongView = Backbone.View.extend({
	// Add a list element tag:
	tagName: "li",

	// Render the song View.
	// Add title from the model to this page/view.
	render: function(){
		this.$el.html(this.model.get("title"));

		// Set the id attribute of this view to the models id:
		this.$el.attr("id", this.model.id);

		return this;
	}
});

// Define a View for the Collection of songs:
var SongsViewOfCollections = Backbone.View.extend({
	// Initialize/Constructor:
	// Listen for when a song is added or removed and run function when it event occurs:
	initialize: function(){
		this.model.on("add", this.onSongAdded, this);
		this.model.on("remove", this.onSongRemoved, this);
	},

	// Function to run when a song is added:
	onSongAdded: function(song){
		// Create a new songView passing in the model:
		var songView = new SongView({model: SongModel});

		// Put the song View to the html page:
		this.$el.append(songView.render().$el);

	},

	// Function to run when a song is removed:
	onSongRemoved: function(song){
		// Remove the song from the html page:
		this.$el.find("li#" + song.id).remove();

		// Could also do it like this(It's shorter):
		// this.$("li#" + song.id).remove();
	},

	// Set the tag to a unordered list element:
	tagName: "ul",

	// Render the View:
	render: function(){
		// Store a copy of the context this:
		var self = this;

		// Loop through each Model in the collection:
		this.model.each(function(song){
			// Create a new Song view based off model:
			var songView = new SongView({model: song});

			// Put the song view to the page:
			self.$el.append(songView.render().$el);
		});
	}
});


// Create a instance of a Collection of Songs:
// Assign each an id so we can later identify each.
var songsCollection = new SongCollection([
	new SongModel({id: 1, title: "Blue in Green"}),
	new SongModel({id: 2, title: "So What"}),
	new SongModel({id: 3, title: "All Blues"})
]);

// Create an instance of a View for the Collection of Songs:
var songsViewOfCollections = new SongsViewOfCollections({el: "#songs", model: songsCollection});

// Render the Collection of Songs to the page:
songsViewOfCollections.render();

// You can remove an item from the list by doing this at the console:
// songsCollection.remove(songsCollection.at(0))