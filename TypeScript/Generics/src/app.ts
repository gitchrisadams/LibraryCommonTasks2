/********* Generic string type *********/
const names: Array<string> = [] // sames as string[]

/********* Generic Functions *********/
function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Max' }, { age: 43 })
console.log(`MergedObj.name: ${mergedObj.age}`)

/********* Generic Functions w/ constraings to specific type *********/
function merge2<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign(objA, objB)
}

const mergedObj2 = merge2({ name: 'Max' }, { age: 43 }) // This works.
// Since we extend object we need an object like above,
// we couldn't do this:
// const mergedObj2 = merge2(30, { age: 43 })
// since 30 is not an object but a number.
console.log(`MergedObjs.name: ${mergedObj2.age}`)

interface Lengthy {
  length: number
}

/********* More Generic Functions *********/
function countAndPrint<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = 'Got no value'
  if (element.length === 1) {
    descriptionText = 'Got one element.'
  } else {
    descriptionText = `Got ${element.length} elements.`
  }
  return [element, descriptionText]
}

console.log(countAndPrint(['sports', 'cooking']))

/********* keyof Generics *********/
// We are saying first param must be an object and the
// second param must be a key of that object.
function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return `Value ${obj[key]}`
}

// We pass in the object and name is a key of that object
// As shown above.
extractAndConvert({ name: 'Max' }, 'name')

/********* Generic Classes *********/
class DataStorage<T> {
  private data: T[] = []

  addItem(item: T) {
    this.data.push(item)
  }

  removeItem(item: T) {
    this.data.splice(this.data.indexOf(item), 1)
  }

  getItems() {
    return [...this.data]
  }
}

// Use the Generic class:
// Store text:
const textStorage = new DataStorage<string>()
textStorage.addItem('Chris')
textStorage.addItem('Bob')
textStorage.removeItem('Chris')
console.log(textStorage.getItems())

// Store numbers w/ same class:
const numStorage = new DataStorage<number>()
numStorage.addItem(10)
numStorage.addItem(20)
numStorage.removeItem(10)
console.log(numStorage.getItems())

// Could also use a union type for both
// string or number
// const numStorage = new DataStorage<number | string>()

/********* Generic Utility types (Built in types) *********/
/********* Partial Utility type *********/
interface CourseGoal {
  title: string
  description: string
  completeUntil: Date
}

function createCourseGoal(
  title: string,
  description: string,
  date: Date
): CourseGoal {
  let courseGoal: Partial<CourseGoal> = {}
  courseGoal.title = title
  courseGoal.description = description
  courseGoal.completeUntil = date
  return courseGoal as CourseGoal
}

/********* Readonly Utility type *********/
// We can't push or pop to this array.
const names2: Readonly<string[]> = ['Max', 'Anna']
