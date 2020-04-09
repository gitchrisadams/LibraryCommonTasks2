/********* Class Decorators *********/
// Must enable in tsconfig.json
// "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
// And set target to es6
// "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016',
function Logger() {
  console.log('Logging...')
}

class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
  }
}

const pers = new Person()

console.log(pers)
