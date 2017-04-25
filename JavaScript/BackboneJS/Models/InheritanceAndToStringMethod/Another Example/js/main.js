// Create a new model extending the Backbone Model:
var Animal = Backbone.Model.extend({
	// Define a walk function as an object of Animal:
	walk: function(){
		console.log("Animal walking...");
	} 
});

// Create a new Dog of type Animal:
var Dog = Animal.extend();

// Create a instance of a Dog:
var dog = new Dog();

// Call the walk method inherited from Animal on the dog object:
dog.walk();

// Create a Cat type extending Animal:
var Cat = Animal.extend({
	// Override the the Animals walk method:
	walk: function(){
		console.log("Cat walking...");
	}
});

// Create an instance of a Cat:
var cat = new Cat();

// Call the walk method on the cat:
cat.walk();

// Create a Bird type extending Animal class:
var Bird = Animal.extend({
	walk: function(){
		// Call the super class by using prototype and apply():
		// So it will display 'Animal is walking'
		Animal.prototype.walk.apply(this);
	}
});

// Create an instance of a Bird:
var bigBird = new Bird();

// Call walk method on the bird.
bigBird.walk();