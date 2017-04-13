// Backbone Model:
var A = Backbone.Model.extend({
	// Constructor:
	initialize: function(){
		console.log("initialize A");
	},

	// toString function gives String representation of the model:
	// Pass in object to serialize, this is ref to model type.
	asString: function(){
		return JSON.stringify(this.toJSON());
	}
});

// Create a new Object:
var a = new A({
	one: '1',
	two: '2'
});

// Call the toString method on the a object:
console.log(a.asString());

// Create a new Object extending/inheriting from A.
// This demonstrates inheritence.
var B = A.extend({});

// Create a new object based of new B object that inherited from A.
// This demonstrates further inheritance from up the chain.
// Give it some properties.
var b = new B({
	three: '3',
	four: '4'
});

// Use toString to display the b object:
// b inherits the asString() so we use it here.
console.log(b.asString());

// Test of b is an instance of B(should be true)
console.log("Is b an instance of B?: " + (b instanceof B));