// Create a new View:
var RefreshingView = Backbone.View.extend({
	// Constructor/Initialize:
	// Sets up the binding to the model.
	initialize: function(){
		// The views model can be accessed using
		// the views model property.
		// To bind to the models change event, use the .on() method.
		// Pass in the name of the event to bind to and then
		// the handler function.
		// the }, this); is the view method that is passed to the on()
		// method, this handles setting the context for the event handler.
		this.model.on('change', function(){
			// Render the view whenever view changes:
			this.render();
		}, this);
	},

	// Specify what it means to render the view:
	render: function(){
		// Access the JQuery wrapper around the views element.
		// Use the Jquery's html() to replace it with the models
		// text property.
		// So this gets the date and puts it onto the page.
		this.$el.html(this.model.get('text'));
	}
});

// Create a new Model:
var m = new Backbone.Model({
	// Set the text property to the current data as a String:
	text: new Date().toString()
});

// Create a new View Object passing in the model we just created:
// The element is the documents body tag.
// Whenever the model changes, the view will be updated.
var v = new RefreshingView({model: m, el: 'body'});

// Render the View:
v.render();

// Setup a timer to show that when the model changes,
// the view gets updated.
// The , 1000); means it timer triggers every 1 second.
// The setInterval method is called, passing in the date and delay.
setInterval(function(){
	// Change the text attribute of the model to the new date.
	m.set({text: new Date().toString()});
}, 1000);

