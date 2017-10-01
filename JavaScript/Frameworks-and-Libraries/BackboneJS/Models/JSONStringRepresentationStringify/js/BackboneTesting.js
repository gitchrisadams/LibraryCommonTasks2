// Create new BackboneJS Model:
var Vehicle = Backbone.Model.extend({

});

// Create new object:
var ford = new Vehicle();

// Set property:
ford.set('type', 'car');
ford.set('seatMaterial', 'leather');
ford.set('model', 'Mustang');

// Use toJSON to extract the models attributes:
var attrs = ford.toJSON();
console.log(attrs);

// To get a JSON String representation of model
// you can use stringify:
// This will output a serialized JSON representation
// of the Backbone model.
console.log(JSON.stringify(attrs));
