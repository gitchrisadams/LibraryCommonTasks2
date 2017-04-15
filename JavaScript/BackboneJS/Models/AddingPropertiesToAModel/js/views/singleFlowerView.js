// Namespace our app
var app = app || {};

// Assign Model that has properties like color: pink
// to Namespaced variable app.singleFlower.
// default: properties are set when none are specifically set.
app.singleFlower = Backbone.Model.extend({
  defaults: {
    color: "pink",
    img: "images/placeholder.png"
  }

});