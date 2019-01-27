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

console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());
console.log(gen2.next());

// End of generator so will output undefined
console.log(gen2.next());