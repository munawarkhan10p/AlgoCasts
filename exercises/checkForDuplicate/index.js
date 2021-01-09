

//https://dev.to/will_devs/javascript-how-to-check-if-an-array-has-duplicate-values-cha


function checkForDuplicates(s) {
    return new Set(s).size != s.length;
  }
  
  const isDuplicate = checkForDuplicates(['a','b','c','d','e','f']);
  console.log('Value is ',isDuplicate);