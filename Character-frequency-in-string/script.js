// input str, output obj

//creat obj to be returned
// loop through str characters
//if a char exists as a key in obj, increase value by 1
//else, add the key and set value to 1
//if not a numeric or alphabet char, do nothing
//return obj

//brute force
const getCharFrequency = (str) => {
  let charFrequency = {};

  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (charFrequency[char]) {
      charFrequency[char]++;
    } else if (!charFrequency[char] && char !== " ") {
      charFrequency[char] = 1;
    }
  }
  return charFrequency;
};

console.log(getCharFrequency("This is a string!"));

//refactored and with character validation
const countCharOccurance = (str) => {
  let charFrequency = {};

  str = str.toLowerCase();
  for (let char of str) {
    if (/[a-z0-9]/.test(char)) {
      charFrequency[char] = ++charFrequency[char] || 1;
    }
  }
  return charFrequency;
};

console.log(countCharOccurance("This is a string!"));

//refactored with better time complexity
const getCharCount = (str) => {
  let charFrequency = {};

  for (let char of str) {
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase(); // lowercase only after validating instead of upfront
      charFrequency[char] = ++charFrequency[char] || 1;
    }
  }
  return charFrequency;
};

console.log(getCharCount("This is a string!"));

function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 96 && code < 123) && //(a-z)
    !(code > 64 && code < 91) && //(A-Z)
    !(code > 47 && code < 58) //(0-9)
  ) {
    return false;
  }
  return true;
}

console.log(isAlphaNumeric("a"));
console.log(isAlphaNumeric("."));
console.log(isAlphaNumeric("B"));
console.log(isAlphaNumeric(" "));
