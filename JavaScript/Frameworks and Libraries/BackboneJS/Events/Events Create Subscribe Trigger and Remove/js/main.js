// Create a plain Javascript object:
var person = {
	name: "Mosh", 

	// Define a walk method w/ a trigger:
	// trigger will trigger a call back for a given event. 
	// Any additional args passed to trigger will be passed along to event callbacks.
	// The second arg after "walking" is an object of properties.
	walk: function(){
		this.trigger("walking", {
			speed: 1,
			startTime: "8:00"
		});
	}
};

// Extend the person object to include Backbone events using
// UnderscoreJS _.extend method.
_.extend(person, Backbone.Events);

// Accepts the event as param e:
// There is also a person.once() that subscribes to events only once:
person.on("walking", function(e){
	console.log("Person is walking.");

	// Output the Event args:
	console.log("Events args:", e);
});

// Unsubscribe from events:
//person.off("walking");

// Call walk method on the person:
person.walk();