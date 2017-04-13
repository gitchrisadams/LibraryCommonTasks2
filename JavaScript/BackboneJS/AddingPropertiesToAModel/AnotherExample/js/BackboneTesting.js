// Create a Backbone Model:
var Vehicle = Backbone.Model.extend({
	// Add a property:
	prop1: '1'
});

// Instantiate new models from our new model type:
var v = new Vehicle();
var v2 = new Vehicle();

// Set property of the instance object:
v.prop1 = 'one';

// This will display property we set of 'one':
console.log("v Property 1: " + v.prop1);

// This will display default property 1:
console.log("v2 Property 1: " + v2.prop1);
