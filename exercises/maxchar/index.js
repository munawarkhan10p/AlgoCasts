// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// Common string questions 

// What is the most common character in the string ?

// Does string A have same character as string B (is it an anagram)?

//Does the given string have any repeated character in it ?

function maxChar(str) {
  const charMap = {};
  let max = 0;
  let maxChar = '';
  for (let char of str) {
  if(charMap[char]) {
    charMap[char]++
  } else {
    charMap[char] = 1;
  }
}

  for (let char in charMap )
   if(charMap[char] > max) {
       max = charMap[char];
       maxChar = char;
   }

   return maxChar;
   
}

module.exports = maxChar;


// function maxChar(str) {
//     const chars = {};
//     for (let char of str)
//         chars[char] = chars[char] + 1 || 1;
   
// }