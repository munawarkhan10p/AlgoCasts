

//https://dev.to/will_devs/javascript-how-to-check-if-an-array-has-duplicate-values-cha


function checkForDuplicates(s) {
    return new Set(s).size != s.length;
  }
  
  const isDuplicate = checkForDuplicates(['a','b','c','d','e','f']);
  console.log('Value is ',isDuplicate);



//JavaScript String indexOf() Method
//The indexOf() method returns the position of the first occurrence of a 
//specified value in a string. This method returns -1 if the value to search for never occurs.

  function checkForDuplicates(array) {
    let valuesAlreadySeen = []
  
    for (let i = 0; i < array.length; i++) {
      let value = array[i]
      if (valuesAlreadySeen.indexOf(value) !== -1) {
        return true
      }
      valuesAlreadySeen.push(value)
    }
    return false
  }