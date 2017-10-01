// Create backbone model:
var Vehicle = Backbone.Model.extend({
	// initialize is a constructor:
	initialize: function(){
		console.log('vehicle created');
	}
});

// Create new instance of vehicle type:
// When this is called, the initialize constructor
// will display to the console.
var car = new Vehicle();