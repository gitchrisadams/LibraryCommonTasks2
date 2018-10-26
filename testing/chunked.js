// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// function chunk(array, size) {
//   const chunked = [];
//   let index = 0;

//   while (index < array.length) {
//     chunked.push(array.slice(index, index + size));
//     index += size;
//   }

//   return chunked;
// }

module.exports = chunk;

function chunk(array, size) {
  var chunked = [];
  var last = [];

  // Loop through the current array.
  // Store the last element in the current array.
  // If the last element is empty or last element is equal to size
  // then push the element to the new array.
  // Otherwise push the element to the 
  for (let element of array) {
    last = chunked[chunked.length - 1]
    console.log('last');
    console.log(last);
    if (!last || last.length === size) {
      chunked.push([element]);
    } else {
      last.push(element);
    }
  }

  return chunked;
}
