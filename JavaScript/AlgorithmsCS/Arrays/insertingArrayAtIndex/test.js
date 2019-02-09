/* package.json includes minimum for jest to run tests
 * Use jest test.js from terminal to run tests
 * npm install -g jest globally or as a package
 */

const InsertingAtFile = require('./insertingAtIndex');
const InsertingAtIndex = InsertingAtFile.InsertingAtIndex;

test('InsertingAtIndex is a class.', () => {
  expect(typeof InsertingAtIndex.prototype.constructor).toEqual('function');
});

test('Item inserted at index.', () => {
  var myArray = ["a", "b", "c"];
  var myInserAt = new InsertingAtIndex(myArray);
  myInserAt.insertAt(1, "Foosball");
  expect(myInserAt[1]).toEqual('Foosball');
});









