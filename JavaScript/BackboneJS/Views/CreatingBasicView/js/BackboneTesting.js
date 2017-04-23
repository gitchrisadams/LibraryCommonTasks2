// Create a new BackboneJS View:
var V = Backbone.View.extend({
	// tagName will represent a list item.
	// The list item will have an id of 'thing' 
	// and a className of active.
	tagName: 'li',
	id: 'thing',
	className: 'active',

	// Attributes:
	attributes: {
		'data-value': 12345
	}
});

// Declare new instance of the Backbone View object:
var v = new V();

// Use JQuery to select the documents body and
// add the el which has the element to put on the page(the li);
$('body').prepend(v.el);

// Create a new View:
var V2 = Backbone.View.extend({});

// Create a new V2 object passing into the constructor.
// the id we have in the html page, as the el (element).
var v2 = new V2({el: '#test'});

// Use JQuery to access the $el which stores the #test id
// and use .css to set the background.
v2.$el.css('background-color', 'CornflowerBlue');