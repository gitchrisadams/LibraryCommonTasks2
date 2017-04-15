// Create new BackboneJS Model:
var Vehicle = Backbone.Model.extend({
	// Validate the model.
	// attrs contains the models attributes.
	validate: function(attrs){
		// Array of colors that are valid for a Vehicle:
		var validColors = ['white', 'red', 'blue', 'yellow'];

		// Define function to check if the color is valid.
		var colorIsValid = function(attrs){
			// If model doesn't have a color attribute, then return true.
			if(!attrs.color) return true;

			// Use Underscore.js library to use include()
			// to see if color passed in is in the validColors array.
			// returns true if it is.
			return _(validColors).include(attrs.color);
		}

		// Call colorIsValid function and use it in the if statement.
		// Return the error message if the color is not valid.
		if(!colorIsValid(attrs)){
			return "color must be one of the following: " + validColors.join(",");
		}
	}
});

// Create a new Vehicle:
var car = new Vehicle();

// In order to detect validation problems, we have to 
// register an event for the error event.
// Accepts the arguments: model that raised the error and the error itself.
car.on('invalid', function(model, error){
	console.log(error);
});

// Set a property on the car object:
// Since we didn't add validation to make this invalid,
// no error should display.
car.set('foo', 'bar');

// Set the car color to a valid color:
car.set('color', 'white', {validate: true});

// Set the car color to in invalid color:
// Notice we have to use {validate: true} to ensure validation occurs:
car.set('color', 'green', {validate: true});

