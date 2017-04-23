'use strict';

// Create a task object w/ a key value property of myDueDate
// that contains a date:
var task = {
	myDueDate: '4/25/17'
};

// Getter and Setter Function:
// Returns the due date and sets the due date:
Object.defineProperty(task, 'dueDate', {
	get: function(){
		return this.myDueDate;
	},
	set: function(newValue){
		this.myDueDate = newValue;
	}
});

// Output the due date using the getter function:
console.log(task.dueDate);

// As shown below this isn't really necessary because we can just
// access it like this. But extra processing could be done w/ the getter function.
console.log(task.myDueDate);

// Set a new date using the Setter function:
task.dueDate = '4/27/17';

// Output the new due date using getter:
console.log(task.dueDate);

// Again this is not really necessary because we can do:
task.myDueDate = '4/29/17';
console.log(task.myDueDate);