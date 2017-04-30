/* Define Views */
// Define a new Artist View:
var ArtistView = Backbone.View.extend({
	// Render the content to the page:
	render: function(){
		this.$el.html("ARTIST VIEW");

		return this;
	}
});

// Define a View for the Albums:
var AlbumsView = Backbone.View.extend({
	// Render the content:
	render: function(){
		this.$el.html("ALBUMS VIEW");

		return this;
	}
});

// Define a view for the Genres:
var GenresView = Backbone.View.extend({
	// Render the content:
	render: function(){
		this.$el.html("GENRES VIEW");

		return this;
	}
});

/* Define Routers */
var AppRouter = Backbone.Router.extend({
	routes: {
		// routers and methods to run when route followed:
		"albums": "viewAlbums",

		// The albums/:albumId is a route parameter.
		// Whatever comes after albums/ in browser addres will be passed as
		// a parameter to albumId. The viewAlbumById is the route function/handler.
		// Example christopheradams.com/albums/1
		"albums/:albumId": "viewAlbumById",

		// Create Routes for artists and genres page:
		"artists": "viewArtists",
		"genres": "viewGenres",

		// Default route, so albums/AnythingHere
		// The * is a splat and is like a wildcard and can match anything.
		"*other": "defaultRoute"
	},

	/* Route Handler Functions */
	// Route function/handler for View artists:
	viewArtists: function(){
		// Create a new Artists view and render it:
		var view = new ArtistView({el: "#container"});
		view.render();
	},

	// Router function/handler for View genres:
	viewGenres: function(){
		// Create a new Genres view and render it:
		var view = new GenresView({el: "#container"});
		view.render();
	},

	// Route function/handler for albums:
	viewAlbums: function(){
		// Create a new instance of the Albums View and render the view:
		var view = new AlbumsView({el: "#container"});
		view.render();

	},

	// Route function/handler for the default route:
	defaultRoute: function(){

	},

	// Route function/handler for albums params.
	// Param: albumId is the id of the album.
	viewAlbumById: function(albumId){

	}
});

// Instantiate our router:
var router = new AppRouter();

// Start listening for changes in Browser's address:
Backbone.history.start();

// Define a View for the Navigation Bar:
var NavView = Backbone.View.extend({
	// Define events:
	events: {
		"click": "onClick"
	},

	// Event to perform when NavView is clicked:
	// Param: e is the JQuery event object.
	onClick: function(e){

		// Use JQuery to get the li element that was clicked:
		var $li = $(e.target);

		// Read in the data-url attribute. This holds the url of the target page.
		// trigger: true tells Backbone whether to call the route hanlder or now,
		// in this case it is true so it will be called.
		router.navigate($li.attr("data-url"), {trigger: true});
	}
});

// Instantiate the navView passing in the nav's css id:
var navView = new NavView({el: "#nav"});