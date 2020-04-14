/********* Class Decorators *********/
// Must enable in tsconfig.json
// "experimentalDecorators": true /* Enables experimental support for ES7 decorators. */,
// And set target to es6
// "target": "es6" /* Specify ECMAScript target version: 'ES3' (default), 'ES5', 'ES2015', 'ES2016',
function Logger(constructor: Function) {
  // Use _: Function if you don't need constructor.
  console.log('Logging...')
  console.log(constructor)
  console.log('*******************************')
  console.log('')
}

// Logger will run, even if we don't instantiate
// our class, due to the decorator @Logger
@Logger
class Person {
  name = 'Max'

  constructor() {
    console.log('Creating person object...')
    console.log('*******************************')
    console.log('')
  }
}

// const pers = new Person()

// console.log(pers)

/********* Decorator Factories *********/
function Logger2(logString: string) {
  return function (constructor: Function) {
    console.log('Logging2...')
    console.log(logString)
    console.log('*******************************')
    console.log('')
  }
}
function Logger3(logString: string) {
  return function (constructor: Function) {
    console.log('Logging3...')
    console.log(logString)
    console.log('*******************************')
    console.log('')
  }
}

// We pass in a string to our Decorator
// We can use multiple decorators as shown.
@Logger2('Logging2 - Person2')
@Logger3('Logging3 - Person2')
class Person2 {
  name = 'Max'

  constructor() {
    console.log('Creating person object2...')
    console.log('*******************************')
    console.log('')
  }
}

/********* Adding a Decorator to a property *********/
function Log(target: any, propertyName: string | Symbol) {
  console.log('Property Decorator from Log')
  console.log(target, propertyName)
  console.log('*******************************')
  console.log('')
}

/********* Accessor Decorator (setters/getters) *********/
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
  console.log('*******************************')
  console.log('')
}

/********* Method Decorator *********/
function Log3(
  target: any,
  name: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('Method decorator')
  console.log(target)
  console.log(name)
  console.log(descriptor)
  console.log('*******************************')
  console.log('')
}

/********* Method Param Decorator *********/
function Log4(target: any, name: string | Symbol, position: number) {
  console.log('Method Parameter decorator')
  console.log(target)
  console.log(name)
  console.log(position)
  console.log('*******************************')
  console.log('')
}

class Product {
  @Log
  private title3: string
  private price3: number

  public getTitle3(): string {
    return this.title3
  }

  @Log2
  public setTitle3(title3: string): void {
    this.title3 = title3
  }

  public getPrice3(val: number): number {
    if (val > 0) {
      return this.price3
    } else {
      throw new Error('invalid price - should be positive...')
    }
  }

  public setPrice3(price3: number): void {
    this.price3 = price3
  }

  constructor(title3: string, price3: number) {
    this.title3 = title3
    this.price3 = price3
  }

  // Method decorator
  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price3 * (1 * tax)
  }
}
