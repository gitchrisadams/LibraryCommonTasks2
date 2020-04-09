/********* Intersection types *********/
// We could do the same thing using interfaces
// by extending interface. But in this example
// we use types to see an example.
type Admin = {
  name: string
  priviledges: string[]
}

type Employee = {
  name: string
  startDate: Date
}

// Combines both types above.
type ElevatedEmployee = Admin & Employee

// So this must have name, startDate, and priviledges.
const e1: ElevatedEmployee = {
  name: 'Chris',
  priviledges: ['create-server'],
  startDate: new Date()
}

console.log('e1', e1)

/********* Type Guards *********/
type Combinable = string | number
type Numberic = number | boolean

type Universal = Combinable & Numberic

/********* Function overload example *********/
function add(a: number, b: number): number

function add(a: string, b: string): string

function add(a: Combinable, b: Combinable) {
  // TypeGuard:
  if (typeof a === 'string' || typeof b === 'string') {
    return a.toString() + b.toString()
  }
  return a + b
}

type UnknownEmployee = Employee | Admin

function printEmployeeInformation(emp: UnknownEmployee) {
  console.log(`Name: ${emp.name}`)

  // Do typecheck/guard to ensure priviledges and startDate
  // exist before we have access to that property.
  if ('priviledges' in emp) {
    console.log(`Privledges: ${emp.priviledges}`)
  }
  if ('startDate' in emp) {
    console.log(`StartDate: ${emp.startDate}`)
  }
}

printEmployeeInformation(e1)

/********* Type Guards - More/Another example *********/
class Car {
  drive() {
    console.log('Driving...')
  }
}

class Truck {
  drive() {
    console.log('The truck is driving...')
  }

  loadCargo(amount: number) {
    console.log('Load Cargo...' + amount)
  }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
  // Can call vehicle.drive() because it always exists:
  vehicle.drive()

  // We can't call loadCargo on a vehicle because only
  // a truck has that by default:
  //vehicle.loadCargo(1000)

  // If we do a typeGuard we can use loadCargo:
  if ('loadCargo' in vehicle) {
    // Alternative: if (vehicle isinstanceof Truck)
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)

/********* Type Checks with Interfaces *********/
interface Bird {
  type: 'bird'
  flyingSpeed: number
}
interface Horse {
  type: 'horse'
  runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
  let speed
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed
      break
    case 'horse':
      speed = animal.runningSpeed
      break
  }
  console.log(`A ${animal.type} is moving at the speed of ${speed} mph.`)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 })
moveAnimal({ type: 'horse', runningSpeed: 20 })

/********* Type Casting *********/
// This is one option to set dom element as a type:
// Exclamation mark ! denotes that this will never return null.
// const paraEl = <HTMLInputElement>document.getElementById('test')!

// Other option: (Be consistent)
// const paraEl = document.getElementById('test')! as HTMLInputElement
// paraEl.value = 'Hi there!'

/********* Index properties *********/
interface ErrorContainer {
  // Index type:
  // key value, key is a string and value is a string.
  [prop: string]: string
}

const errorBag: ErrorContainer = {
  // These can only be strings, due to above ErrorContainer
  // You couldn't do email: 45 for example.
  email: 'Not a valid email!',
  username: 'Must start with cap'
}

/********* Optional Chaining *********/
// Check if something exist before you use it.
const fetchUserData = {
  id: 'u1',
  name: 'Max',
  job: { title: 'CEO' }
}

// In JS you would do something like this:
console.log(fetchUserData.job && fetchUserData.job.title)

// In Typescript you can use optional ?
console.log(fetchUserData?.job?.title)

/********* Nullish Coalescing *********/
// Double question mark means if data is
// null or undefined then set it as whatever
// is in the string after ?? in this case DEFAULT
// If its an empty string, that's not null or
// undef so we would keep it an empty string.
const userInput = ''
const storeData = userInput ?? 'DEFAULT' // Empty string so store empty string
console.log(`Stored data: ${storeData}`)

const userInput2 = undefined
const storeData2 = userInput2 ?? 'DEFAULT' // undef or null so store DEFAULT
console.log(`Stored data: ${storeData2}`)
