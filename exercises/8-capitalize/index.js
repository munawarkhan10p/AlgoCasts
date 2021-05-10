// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {}

module.exports = capitalize;


// here we also using trim incase we got strim with empty spaces in start

function capitalize(str) {
    let words = [];
  
    for (let word of str.trim().split(' ')) {
     words.push(word[0].toUpperCase() + word.slice(1));
    }
  
    console.log('sentence is',words.join(' '));
  
    return words.join(' ');
  
  }
  
  capitalize(' a brown fox');
