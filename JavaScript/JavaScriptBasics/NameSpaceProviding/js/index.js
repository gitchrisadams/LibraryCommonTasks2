/** Providing namespace. */
/** Each part must be defined in sequence. */
var com = com || {};
com.christopher = com.christopher || {};
com.christopher.myNewNameSpace = com.christopher.myNewNameSpace || {};
/** Defining a function using our new namespace. */
com.christopher.myNewNameSpace.Message = function Message(name){
    /** Set name in this method to name passed in. */
    this.name = name;
}

/** Create new myMessage var using our namespace / function.  */
var myMessage = new com.christopher.myNewNameSpace.Message('Chris');

/** Display the name passed in to the browser. */
document.write(myMessage.name);