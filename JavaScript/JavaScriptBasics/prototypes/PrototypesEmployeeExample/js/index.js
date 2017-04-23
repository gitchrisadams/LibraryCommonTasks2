/** Employee Object Declaration. */
function Employee(name){
    this.name = name;
}

/** Employee prototype. */
/** Notice we now have access to name property even
though getName is not insde of the Employee declaration. */
Employee.prototype.getName = function() {
    return this.name;
}

/** Create employee Objects: */
var e1 = new Employee("Mark");
var e2 = new Employee("Chris");

/** Output Employee names to browser. */
document.write("E1 Name = " + e1.getName() + "<br>");
document.write("E2 Name = " + e2.getName() + "<br>");