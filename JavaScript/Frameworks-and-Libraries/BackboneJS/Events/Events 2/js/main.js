Book = Backbone.Model.extend({
	initialize: function() {
		console.log("New Model");
	}
});


BookView = Backbone.View.extend({
	initialize: function() {
		console.log("view created");
	},
	updateTitle: function() {
		console.log("title updated");
	}
});

var Library = Backbone.Collection.extend({
	initialize: function() {
		console.log("Collection added");
	}
});

// Model:
myBookModel = new Book({name: 'chris'});

// View:
myBookView = new BookView();

// myBookModel.on("change", function() {
// 	console.log("Something changed!");
// });

// // When name is set, updateTitle function will fire:
// myBookModel.on({'change:name': myBookView.updateTitle});

// // Same as above but w/ listenTo:
// myBookModel.listenTo(myBookModel, 'change:name', myBookView.updateTitle);

// // Testing changing model to fire a change event:
// myBookModel.set('name', 'My fancy book titlte');

// // Trigger a bunch of events:
// for(var i = 0; i < 11; i++){
// 	// Use trigger to also fire an event:
// 	myBookModel.trigger('change:name', {});
// }

// Custom events:
Backbone.on('model:useless', function(data) {
	console.log("model useless global invoked.");
	console.log(data.model.get('name'));
});

Backbone.trigger('model:useless', {model:myBookModel});

