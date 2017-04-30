/** Employee Object Declaration. */
function Employee(name){
    this.name = name;
    
    /** Returns the name of the employee. */
    this.getName = function(){
        return this.name;
    }
}

/** Create employee Objects: */
var e1 = new Employee("Mark");
var e2 = new Employee("Chris");

/** Output Employee names to browser. */
document.write("E1 Name = " + e1.getName() + "<br>");
document.write("E2 Name = " + e2.getName() + "<br>");

// Set the name of the Employee 1 to John"
e1.name = 'John'
document.write("E1 Name Changed = " + e1.getName() + "<br>");

// Can also use bracket notation for output:
e2.securityLevel = 15;
console.log("Employee e2 security level: " + e2['securityLevel'])

// Assign a function to employee 2:
e2.updateDueDate = function(){
	return true;
};

// Returns true
console.log(e2.updateDueDate());

// Create an object using JSON notation {}
var myJsonObject = {
	// Properties:
	name: 'Jason',
	favoriteMovie: 'Friday the 13th',

	// Function as object property.
	putOnMask: function(){
		return true;
	}
};





