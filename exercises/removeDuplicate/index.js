
// remove duplciate 
// https://dev.to/will_devs/javascript-how-to-remove-duplicate-values-from-arrays-lf0


let originalArray = [1, 2, 3, 4, 1, 2, 3, 4]

let uniqueArray = originalArray.filter((item, index, array) => {
  return array.indexOf(item) === index
})

// uniqueArray === [1, 2, 3, 4]

//The basic strategy here is to iterate through originalArray and check to see if the index of 
//the item we are currently examining is the same as the index of the item in the originalArray.

//Because indexOf returns the first index that it finds for a given value, if it isn't 
//a duplicate value then the index for that item must be the same!

//Note that this method is not the most efficient: it executes in quadratic time. 
//So if the arrays you're checking are very large in size, you may want to use a different method.