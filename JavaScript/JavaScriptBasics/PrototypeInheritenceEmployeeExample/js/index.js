/** Employee Object Declaration. */
var Employee = function(name){
    this.name = name;
}

/** Fake Declaration for testing instanceOf */
var Elephant = function(elName){
    this.elName = elName;
}

/** Employee prototype to get the name. */
Employee.prototype.getName = function(){
    return this.name;
}

Employee.prototype.getNameLength = function(){
    return this.name.length;
}

/** Constructor function for creating Permanent Employee object */
var PermanentEmployee = function(annualSalary){
    this.annualSalary = annualSalary;
}

/** Create a new Employee object passing in 
the employee's name. */
var employee = new Employee("Mark");

/** Make employee the parent for PermanentEmployee */
PermanentEmployee.prototype = employee;

/** Create an instance of PermanentEmployee */
/** Since Permanent employee is a type of Employee we must
pass in an annualSalary amount. */
var pe = new PermanentEmployee(50000);

/** We should be able to call the getName function
of the Employee on the PermanentEmployee object
because PermanentEmployee inherits from the employee parent. */
document.write("The name is " + pe.getName() + "." + "<br>");

document.write("The length of " + pe.getName() + " is " + pe.getNameLength() + "." + "<br>");

/** Does the employee property have the property 'name', true if yes. */
document.write("employee.name: " + employee.hasOwnProperty('name') + "<br>");

/** Does the permanent employee have an annual salary? true if yes. */
document.write("pe.annualSalary: " + pe.hasOwnProperty('annualSalary') + "<br>");



// /** pe is an instance of both so true: */
// alert(pe instanceof Employee);
// alert(pe instanceof PermanentEmployee);

// /** No pe is not an instance of Elephant so false */
// alert(pe instanceof Elephant);

