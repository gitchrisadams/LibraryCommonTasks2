// Create Backbone Model:
var ford = new Backbone.Model({
	// Attributes:
	type: 'car',
	color: 'blue'
});

// Bind event handler to the change event:
// The second arg function() is the call back function.
ford.on('change', function(){
	console.log("Something changed.");
});

// Change type to prove event will fire off:
ford.set('type', 'truck');

// Bind event handler to only change an event
// when the color is changed:
ford.on('change:color', function(){
	console.log("Color changed");
});

// Change the color property:
ford.set('color', 'red');

// Create volcano var based of Underscore.JS library _.extend as an event.
var volcano = _.extend({}, Backbone.Events);

// Action to perform when event happens:
// Optional options are accepted as a param.
// The options.plan are the addiontal options passed in.
volcano.on('disaster:eruption', function(options){
	console.log('duck and cover - ' + options.plan + ' ' + options.act);
});

// Trigger the event to test it out:
// The plan: run  and act are arguments passed into disaster:eruption above.
volcano.trigger('disaster:eruption', {plan: 'run', act: 'like crazy man!'});

// Removing an event handler:
// You will not see any triggers after this:
volcano.off('disaster:eruption');

volcano.trigger("disaster:eruption", {plan: 'run', act:'like crazy woman!'});