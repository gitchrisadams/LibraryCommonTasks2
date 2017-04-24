/***** Define a Book Type extending the Model class of Backbone: *****/
var Book = Backbone.Model.extend();
// Book.prototype.__proto__ == Backbone.Model.prototype;

// Create instance of Book:
var book = new Book();

// Destroy the book. We can do this because we extended Backbone
// so we have access to the detroy() which is one of Models
// prototype functions.
book.destroy();

/******** Backbone Model properties w/ a function example *******/
// Define a Magazine Type extending the Model class of Backbone:
// Add a property for the current page and set start to 1.
// Add a function as a property to turn the page.
// This is inefficient and would be better to have function as
// a prototype/static method.
var Magazine = Backbone.Model.extend({
	currentPage: 1,
	turnPage: function(){
		this.currentPage += 1;
	}
});

// Create a new Magazine object instance:
var mag = new Magazine();

// Display the current page:
console.log("The magazine page is: ");
console.log(mag.currentPage);

// Change the page:
mag.turnPage();


// Display current page:
console.log("\nThe magazine page is: ");
console.log(mag.currentPage);

/******** Adding a Static method instead of adding a function ********/
// as the properties to the Backbone.Model example:
// The static methods are added as the second arg to Backbone.Model
// Notice first arg is an empty object, but doesn't have to be. 
// We could also have properties like previous example.
var Ebook = new Backbone.Model.extend({}, {
	areEbooksGreat: function(){
		console.log("Yes Ebooks are great!");
	}
});

// Call static method areEbooksGreat on the Ebook object
// not on an instance Ebook since it is a static method.
// Calling ebook1.areEbooksGreat() would not work since it is static.
Ebook.areEbooksGreat();


/***** Using apply to change the 'this' context *****/
// Create a new Brochure type:
var Brochure = Backbone.Model.extend({
	currentPage: 1,

	turnPage: function(){
		this.currentPage += 1;
	}

});

// Create just a regular variable that stores an object:
var simpleBrochure = {currentPage: 20};

// Call the Brochure's prototype passing in the simpleBrochure
// variable, Note: must use apply() for this to work.
Brochure.prototype.turnPage.apply(simpleBrochure);

// Output new value of simple Brochure:
console.log("Value of Simple Brochure: ")
console.log(simpleBrochure.currentPage);

/***** Passing regular arguments w/ apply ******/
// You can also pass a second arg to apply() which is an array.
// And you don't even need to provide a first arg if its not relevant
// by just passing a null. 
// This displays hello world:
// Define a new DisplayMessage type:
var DisplayMessage = Backbone.Model.extend();

// Create new DisplayMessage instance:
var myMessage1 = new DisplayMessage();

// Define an alertMessage function on the myMessage1 instance:
myMessage1.alertMessage = function(message, secondMessage){
	console.log(message + ' ' + secondMessage);
}

// Call the alertMessage using apply:
// Notice first arg is null, the array is passed as second arg:
myMessage1.alertMessage.apply(null, ['message is', 'displayed']);

