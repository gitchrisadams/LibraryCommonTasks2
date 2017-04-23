/** Employee Object Declaration. */
function Employee(name){
    this.name = name;
}

/** Employee prototype to get the name. */
Employee.prototype.getName = function(){
    return this.name;
}