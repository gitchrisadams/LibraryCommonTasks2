// Define a new Model:
var myModel = new Backbone.Model();

// Set properties of the model:
myModel.set('content', 'this is some content');

// Define a new View:
var myView = new Backbone.View({
	// Create a model object:
	model: myModel,

	// Set the html class name:
	className: 'model-object'
});

// Use JQuery to select the document body and
// pass in the views el (the element)
// This will create a view on the html page so if 
// you inspect the html you will see this:
// <div class="model-object"></div>
$('body').prepend(myView.el);