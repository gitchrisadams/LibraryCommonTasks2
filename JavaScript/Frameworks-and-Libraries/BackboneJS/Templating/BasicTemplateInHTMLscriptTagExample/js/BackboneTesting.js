// Create a new View:
var V = Backbone.View.extend({
	// Define render Function:
	render: function(){
		// Declare data that will be used to render template:
		// Latitude, longitude, and elevation.
		var data = {
			lat: -27, 
			lon: 153,
			elevation: 20000,
			windSpeed: 65
		};

		// Use JQuery to select the script tag that has the template tags
		// in the html file. Get the html content of the script tag.
		var template = $('#latlon-template').html();

		// Access the JQuery $el object and access its content and
		// replace its content with the result of rendering the template.
		// The template variable is pulled from the html content, the second param is
		// the data to use.
		this.$el.html(_.template(
			template, data
		));

		// Return the view:
		return this;
	}
});

// Create an instance of the View:
// Pass in the body element.
var v = new V({el: 'body'});

// Render the view:
v.render();

