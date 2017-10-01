// Define a View:
var FormView = Backbone.View.extend({
	// Create events object which includes the click event
	// as well as the .clickable css class selector.
	// The 'handleClick' is the event handler function.
	events: {
		// Handle the click event:
		'click .clickable': 'handleClick',

		// Handle the change event, example of handing the event function inline:
		// If text is entered in box, then move focus away, this event is fired.
		'change': function(){
			console.log("Change handled.");
		}
	},

	// Render some basic html content and return it:(Two text input boxes)
	render: function(){
		this.$el.html(
			'<input type ="text" class="clickable" ' + 
			'placeholder="clickable" /> <input type="text"/>'
		);

		return this;
	},

	// Handle the click function:
	handleClick: function(){
		console.log("Click handeled!");
	}
});

// Create new view object:
var fv = new FormView();

// Append text using JQuery and render method:
$('body').append(fv.render().el);