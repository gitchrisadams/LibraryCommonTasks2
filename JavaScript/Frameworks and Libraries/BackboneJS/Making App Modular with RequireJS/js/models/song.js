// Wrap this model in a require.js module:
// The define function takes two args.
// The first [] is an array of dependencies.
// The second arg is function that is called when dependancies are loaded.
// The args to the function are _ for UnderscoreJS and Backbone for BackboneJS.
// Our Models are now inside the RequireJS define and not in Global namespace.
define([
	'underscore',
	'backbone'
], function(_, Backbone){

	// Define a Song Model:
	var Song = Backbone.Model.extend();

	// Return the song Model:
	return Song;

});



