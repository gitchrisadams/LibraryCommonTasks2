/* package.json includes minimum for jest to run tests
 * Use jest test.js from terminal to run tests
 * npm install -g jest globally or as a package
 */

const dArr = require('./dynamicArrays');
const DynamicArrays = dArr.DynamicArrays;

test('DynamicArrays is a class.', () => {
  expect(typeof DynamicArrays.prototype.constructor).toEqual('function');
});

test('New DynamicArray size to be amount passed in.', () => {
  var myArray = new DynamicArrays(4);
  expect(myArray.data.length).toEqual(4);
});

test('New DynamicArray at specific index to equal amount and value passed in.', () => {
  var myArray = new DynamicArrays(8);
  myArray.setDArray(5, 100)
  expect(myArray.data[5]).toEqual(100);
});

test('Inserting at specific index and shifting appropriately.', () => {
  var myArray = new DynamicArrays();
  myArray.add("a");
  myArray.add("b");
  myArray.add("c");


  myArray.insert(1, "d"); // Should insert between a and b.
  expect(myArray.data[1]).toEqual("d");
});


test('Deleting at specific index and shifting appropriately.', () => {
  var myArray2 = new DynamicArrays();
  myArray2.add("a");
  myArray2.add("b");
  myArray2.add("c");


  myArray2.delete(1); // Should delete the "b" from array.
  expect(myArray2.data[0]).toEqual("a");
  expect(myArray2.data[1]).toEqual("c");
});


test('Is it empty.', () => {
  var myArray3 = new DynamicArrays();

  expect(myArray3.isEmpty()).toEqual(true);

  myArray3.add("Fuzz");
  expect(myArray3.isEmpty()).toEqual(false);
});












