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

/** Create new dog object */
var myDog = new Dog('bark', 'sparky');

/** Invoke the talk object that is in the Animal prototype. */
myDog.talk();

/** Display the type of the Animal using the parent 
Animal. */
myDog.displayAnimalType();

myDog.displayName();



