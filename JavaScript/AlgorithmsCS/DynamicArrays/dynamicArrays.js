class DynamicArrays {

  constructor(initialCapacity) {
    DynamicArrays.prototype.size = 0;
    DynamicArrays.prototype.initialCapacity = 0;
    DynamicArrays.prototype.data = new Array();
    this.initialCapacity = initialCapacity;
    this.data = new Array(initialCapacity);
  }

  getDArray(index) {
    return this.data[index];
  }

  setDArray(index, value) {
    this.data[index] = value;
  }

  size() {
    return DynamicArrays.prototype.size;
  }

  add(value) {

    if (DynamicArrays.prototype.size == DynamicArrays.prototype.initialCapacity) {
      this.resize();
    }

    this.data[DynamicArrays.prototype.size] = value;

    DynamicArrays.prototype.size++;
  }

  delete(index) {
    for (var i = index; i < DynamicArrays.prototype.size - 1; i++) {
      this.data[i] = this.data[i+1];
    }
    DynamicArrays.prototype.size++;
  }

  insert(index, value) {
    if (DynamicArrays.prototype.size == DynamicArrays.prototype.initialCapacity) {
      this.resize();
    }

    for (var i = DynamicArrays.prototype.size; i > index; i--) {
      this.data[i] = this.data[i-1];
    }

    this.data[index] = value;
    DynamicArrays.prototype.size++;

  }

  isEmpty() {
    return DynamicArrays.prototype.size === 0;
  }

  resize() {
    var newData = new Array(DynamicArrays.prototype.initialCapacity * 2);

    for (var i = 0; i < DynamicArrays.prototype.initialCapacity; i++) {
      newData[i]  = DynamicArrays.prototype.data[i];
    }

    DynamicArrays.prototype.data = newData;
    DynamicArrays.prototype.initialCapacity = DynamicArrays.prototype.initialCapacity * 2;
  }
}



var myArray = new DynamicArrays();

console.log(myArray.size);



module.exports = {DynamicArrays};