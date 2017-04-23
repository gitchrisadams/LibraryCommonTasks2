'use strict';

// Object.defineProperty()

// Create a new task object:
var task = {};

// Use Object.defineProperty passing in the task object and
// setting the text property to 'Get this job done' value.
Object.defineProperty(task, 'text', {
    value: 'Get this job done!'
});

// Console log the task text:
console.log(task.text);


// Another example:

// Use Object.defineProperty() to set the value of 'text2'
// and set it to writable. This means we can edit or add to the value
// as show below.
Object.defineProperty(task, 'text2', {
    value: "Get this job done faster!",
    writable: true
});

// Add a String to task.text:
task.text2 = task.text2 + ' ... NOW!';

// Output the text with the ...NOW! appended to it.
console.log(task.text2);

// Object.defineProperties() plural so properties not property:
// Create new object:
var taskProperties = {};

// Set the two 'text' and 'dueDate' propertyes w/ values.
Object.defineProperties(taskProperties, {
	'text': {
		value: 'New Task'
	},
	'dueDate': {
		value: '1/15/16'
	}
});

// Output the properties:
console.log(taskProperties.text + ' Due: ' + taskProperties.dueDate);

// Store all information about an object using getOwnPropertyDescriptor():
var descriptor = Object.getOwnPropertyDescriptor(taskProperties, 'text');

// Output all info on object:
console.log(descriptor);


