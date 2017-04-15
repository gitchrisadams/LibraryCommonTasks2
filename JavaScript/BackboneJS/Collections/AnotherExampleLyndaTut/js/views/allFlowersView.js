// Namespace our flowerApp
var app = app || {};

// Create a Collecion and base it off our
// app.singleFlower model. A collection must
// be based one a model. 
// When this starts to add instances to the Collection
// it will look to the app.singleFlower model.
app.FlowersCollection = Backbone.Collection.extend({

  model: app.singleFlower

});