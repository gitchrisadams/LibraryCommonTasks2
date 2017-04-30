// Configure requireJS so it know where to get all our .js
// file such as Backbone, JQuery etc...
require.config({
	paths: {
		jquery: 'lib/jquery-min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min'
	}
});


// Define dependancies using RequireJS:
// For main program we only have our app.js as dependancy:
define(['app'], function(App){
	// Call the Main app.js and initialize it:
	App.initialize();
});