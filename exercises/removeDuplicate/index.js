
// remove duplciate 
// https://dev.to/will_devs/javascript-how-to-remove-duplicate-values-from-arrays-lf0


const originalArray = [1, 2, 3, 4, 1, 2, 3, 4];

let key = {};

const uniqueArray = originalArray.filter((item) => {
  if (key[item]) return false;

  key[item] = true;
  return true;
});


console.log(Object.keys(key));
  