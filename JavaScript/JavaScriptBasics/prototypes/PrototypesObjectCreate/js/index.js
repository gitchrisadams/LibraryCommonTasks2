/** Animal Object definition. */
function Animal(type, name){
    this.type = type;
    this.name = name;
}

/**
 * Dog Object definition.
 * @param {[String]} phrase [The phrase for the dog to speak.]
 * this.contructor('Dog') calles the parent Animal to set the
 * type of the Animal to 'Dog' ane name of the dog.
 */
function Dog(phrase, name){
    this.phrase = phrase;
    this.constructor('Dog', name);
}

/** Animal talk prototype. */
Animal.prototype.talk = function(){
    console.log(this.name + " says " + this.phrase + "!");
}

/** Display animal type like cat, dog, pig etc... */
Animal.prototype.displayAnimalType = function(){
    console.log("Animal is of type: " + this.type);
}

/** Display name of animal, like Sparky, Roofus, JohnnyCat... */
Animal.prototype.displayName = function(){
    console.log("Animals name is: " + this.name);
}

/** Define Dog's prototype to be Animal
so it inherites all the Animal methods/properties. */
Dog.prototype = new Animal();

/** Create new dog object using Object.create */
/** This allows us to create additional properties for
the dog object. */
var dog = Object.create(Animal.prototype, {
    'legs':{value: 4, writeable: true},
    'barks':{value: true, writeable: false}
});

/** Access the properties of the dog object. */
console.log("The dog has " + dog.legs + " legs.");
console.log("Dog barks set to: " + dog.barks);


/** Another Object.create() Example **/
// Create an object:
var project = {
	securityLevel: 2
};

// Use Object.create to create a new secretProject passing in the project object:
// When we pass in project we set secretProjects prototype to the project object.
var secretProject = Object.create(project);

// Log out the secretProject security level:
console.log(secretProject.securityLevel);
