//  Define a new Backbone Model:
var h = new Backbone.Model({
	content: 'Historical context'
});

// Define a new View:
var HeadingView = Backbone.View.extend({
	// Set html tag to paragraph
	tagName: 'p',

	// Render the content of the views element:
	// Passing in the models content and return it.
	render: function(){
		this.$el.html(this.model.get('content'));
		return this;
	}

});

// Create a new instance of the view:
// Pass in the model as data for the view.
var v = new HeadingView({model: h});

// With Jquery render the view and add it to the document body:
// Call render function accessing the element, the el. 
$('body').append(v.render().el);

// Remove the view:
// Uncomment to see view removed.
//v.remove();