// Create Backbone Model:
var Vehicle = Backbone.Model.extend({
	// Writes to console for easy inspection of objects:
	dump: function(){
		console.log(JSON.stringify(this.toJSON()));
	}
});



// Create object of Vehicle type by passing objects to the constructor function:
var v = new Vehicle({type: "car"});

// Adding attributes using the set() method:
v.set('color', 'blue');

// Dump attributes of the v object:
v.dump();

// Set some more properties:
v.set({
	description: "<script>alert('script injection');</script>",
	weight: 1750
});

// Dump attributes again w/ new attributes added:
v.dump();

// Use JQuery to append content to the body:
// We are appending some html/js script that gives an alert.
// Since that code is in the value of description.
// This is a security risk, demonstrated below.
$('body').append(v.get('description'));

// .escape will also read the value of the attribute, but
// you will be able to html encode it to prevent the security
// risk explained above.
$('body').append(v.escape('description'));

// Create a ford Vehicle:
var ford = new Vehicle({
	type: 'car'
});

// Test of the ford object if it has a type attribute:
console.log("Does ford have attribute of type? " + (ford.has('type')));
console.log("Does ford have attribute of blahblah? " + (ford.has('blahblah')));




















