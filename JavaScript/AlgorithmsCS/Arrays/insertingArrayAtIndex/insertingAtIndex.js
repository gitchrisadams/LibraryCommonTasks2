class InsertingAtIndex {

  constructor(array) {
    this.array = array;
  }

  insertAt(index, str) {
    var newArray = [];
    for (var i = 0; i  < index -1; i++) {
      newArray.push(this.array[i]);
    }

    this.array[index] = str;

    for (var j = index + 1; j  < this.array.length; j++) {
      newArray.push(this.array[j]);
    }

    this.array = [];
    this.array = myArray;
  }
}


var myArray = ["a", "b", "c"];
var myInserAt = new InsertingAtIndex(myArray);
myInserAt.insertAt(1, "Foosball");



module.exports = {InsertingAtIndex};