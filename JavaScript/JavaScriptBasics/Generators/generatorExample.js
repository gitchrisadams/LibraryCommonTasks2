/*
 * Define a generator function
 */
function* numbers() {
  var index = 0;

  while(true) {
    yield index = index + 20;
  }
}

const generator = numbers();

for (var i = 0; i < 10; i++) {
  console.log(generator.next()); 
}

console.log(generator.next()); 

/*
 * Another example of a Generator function
 */
function* generator2() {
  yield 1;
  yield 2;
  yield 4;
  yield 20;
  yield 100;
}

const gen2 = generator2();

console.log("");
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

// End of generator so will output undefined
console.log(gen2.next());

/*
 * Another example of a Generator function w/ for of loop.
 */
function* generator3() {
  yield "\nFoo";
  yield "Fie";
  yield "Foe";
  yield "Fum";
}

const gen3 = generator3();
var giantArray = [];

for (let value of gen3) {
  giantArray.push(value);
}

console.log('\ngiantArray:');
console.log(giantArray);


/*
 * Puting a Generator inside a Generator example
 */
function* generatorInsideGenerator1() {
  yield 1;
  yield 2;
  yield* generatorInsideGenerator2();
  yield 6;
  yield 7;
}


function* generatorInsideGenerator2() {
  yield 3;
  yield 4;
  yield 5;
}

const genInsideGen = generatorInsideGenerator1();
var genInsideGenVals = [];

for (let value of genInsideGen) {
  genInsideGenVals.push(value);
}

console.log("\ngenInsideGen value array:");
console.log(genInsideGenVals);

















