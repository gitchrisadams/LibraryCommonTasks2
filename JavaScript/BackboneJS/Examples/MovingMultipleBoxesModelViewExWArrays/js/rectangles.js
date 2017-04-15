/* Immediately invoked function for scoping */
(function(){
	// Create a new Backbone Model:
	var Rectangle = Backbone.Model.extend({});

	// Create a Rectangle View:
	var RectangleView = Backbone.View.extend({

		// Type of elements to be rendered for this view.
		// So target div elements.
		tagName: 'div',

		// Target classes with class name 'rectangle'.
		className: 'rectangle',

		// Bind click event to function called move:
		events: {
			'click' : 'move'
		},

		/* render: function will be called when we want to take the view and
		 * render it into the document.
		 */
		render: function(){
			// Call method to set the dimension of rectangle:
			this.setDimensions();

			// Call method to set the position of rectangle:
			this.setPosition();

			// Call method to set the color:
			this.setColor();

			// Return the view:
			return this;
		},

		/* Method to set the dimenions of a rectangle */
		setDimensions: function(){
			// Use JQuery to access the element object.
			// Use css for accessing width/height.
			this.$el.css({
				// Access the model to get the height/width values:
				width: this.model.get('width') + 'px',
				height: this.model.get('height') + 'px'
			});
		},

		/* Method to set the position of a rectangle */
		setPosition: function(){
			// Get position from the model.
			var position = this.model.get('position');

			// Use Jquery to access the CSS element of this view
			// to be able to set the left and top css property to
			// x and y positions.
			this.$el.css({
				left: position.x,
				top: position.y
			});
		},

		/* Method to set the color */
		setColor: function(){
			// Access the JQuery wrapper 'el' and use CSS to
			// set the color.
			// Get the color from the model.
			this.$el.css('background-color', this.model.get('color'));
		},

		/* Method to move box 10px right when it is clicked */
		move: function(){
			// Target element w/ Jquery el and set css left property:
			this.$el.css('left', this.$el.position().left + 10);
		}
	});

	/* Models: An array of Rectangles. */
	var models = [

		// Rect1:
		new Rectangle({
			// Width and Height:
			width: 100,
			height: 60,

			// Position is x/y value so setup as an object:
			position: {
				x: 300,
				y: 150
			},

			// Color property:
			color: '#ff0000'
		}),

		// Rect2:
		new Rectangle({
			// Width and Height:
			width: 26,
			height: 300,

			// Position is x/y value so setup as an object:
			position: {
				x: 500,
				y: 75
			},

			// Color property:
			color: '#00ff00'
		}),

		// Rect3:
		new Rectangle({
			// Width and Height:
			width: 300,
			height: 70,

			// Position is x/y value so setup as an object:
			position: {
				x: 310,
				y: 200
			},

			// Color property:
			color: '#0000ff'
		})
	];

	/* Use Underscore.JS to access the models array, it has a
	 * .each() function. .each() will call the function defined
	 * for each model in the array. So this is a way to loop through
	 * the array.
	 */
	 _(models).each(function(model){
		 /* Add the view and add resulting element to html page */
		// Target div w/ id #canvas.
		// Pass in a new ReactangleView for the current model and render it.
		$('div#canvas').append(new RectangleView({model: model}).render().el);
	 });

})();