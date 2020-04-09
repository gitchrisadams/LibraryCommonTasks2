/********* Interface *********/
interface Person {
  name: string
  age: number
  greet(phrase: string): void
}

/********* Extending an Interface *********/
// You could also extend multiple interfaces like
// ...extends Person, OtherInterfaceHere
interface Chris extends Person {
  burp(sound: string): void
}

/********* Interface for function *********/
// type comparison:
// type AddFn = (a: number, b: number) => number

// Same as above type but using interface:
interface AddFn {
  (a: number, b: number): number // b? is optional
}

// Use the function interface:
let add: AddFn
add = (n1: number, n2: number) => {
  return n1 + n2
}

/********* Use extended Interface *********/
// This must use everything in Person interface but
// also include everything defined in Chris interface.
let chris1: Chris
chris1 = {
  name: 'Christopher',
  age: 44,
  greet: (phrase: string) => console.log(`${phrase} ${chris1.name}`),
  burp: (sound: string) => console.log(`${sound} ${chris1.name}`)
}
console.log('chris1: ', chris1)
chris1.burp('Burrrrrrrrrp')

/********* Use Interface *********/
let user1: Person
user1 = {
  name: 'Chris',
  age: 43,
  greet: (phrase: string) => console.log(`${phrase} ${user1.name}`)
}
user1.greet('Hi there - I am ')

/********* Interface w/ optional property *********/
interface Named {
  readonly name?: string
  outputName?: string
}

/********* Another Interface that extends *********/
interface Greetable extends Named {
  greet(phrase?: string): void
}

/********* Class that implements Interface *********/
class People implements Greetable {
  name?: string

  constructor(n?: string) {
    // Could also just provide default val n: string = "foo"
    if (n) {
      this.name = n
    }
  }

  greet(phrase: string) {
    if (phrase) {
      console.log(`${phrase} ${this.name}`)
    } else {
      console.log('Hi')
    }
  }
}

/********* Class w/ interface use example *********/
let user2: Greetable // Could also do let user2: Person; since it implements Greetable.
user2 = new People('Christopher')
user2.greet('Hi there - ')

let user3: Greetable
user3 = new People()
user3.greet()
console.log('user2', user2)
