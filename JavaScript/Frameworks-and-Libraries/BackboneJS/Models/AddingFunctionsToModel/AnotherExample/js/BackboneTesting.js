// Backbone model that includes a function:
var Vehicle = Backbone.Model.extend(
	/* This is where we would pass in our model object, but
	 * we are just passing in an empty object.
	 */
	{},

	// Defined class properties:
	{
		summary: function(){
			return "Vehicles are for traveling."
		}
	}
);

// Call the summary function, passing to console.log:
console.log(Vehicle.summary());