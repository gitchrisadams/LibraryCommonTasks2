'use strict';

// Create an emtpy object:
var task = {};

// Use defineProperty to set the values of text
// and make it enumerable which allows us to 
// loop through the keys of an object.
Object.defineProperty(task, 'text', {
	value: 'Get this Job done!',
	enumerable: true
});

// Define another property that is enumerable:
Object.defineProperty(task, 'text2', {
	value: "Get it done later!",
	enumerable: true
});

// Define a property that is NOT enumerable so key will not print out:
Object.defineProperty(task, 'text3', {
	value: "Will never get it done!",
	enumerable: false
});

// Loop through all the properties/keys of task:
for(var f in task){
	console.log(f);
}


// Another example:
// Create a new object:
var taskObject2 = {};

// Define a new property and set configurable to false:
// Change from false to true of wish to have ability to change text.
Object.defineProperty(taskObject2, 'text', {
	value: 'Get this job done!',
	configurable: false
	//configurable: true
});

// Attempt to change the text value to Done! but can't
// if configurable is set to false. Will get error if try.
Object.defineProperty(taskObject2, 'text', {
	value: 'Done!'
});

// Output the task text:
console.log(taskObject2.text);