//using current position
var lengthOfLongestSubstring = function (s) {
  let currentString = [];
  let longestStringLength = 0;
  let currentCharPos = 0;

  for (let i = 0; i < s.length; i++) {
    //does the character exist in the current string?
    currentCharPos = currentString.indexOf(s[i]);

    //if it does exist, splice the portion up to the next character
    if (currentCharPos !== -1) {
      currentString.splice(0, currentCharPos + 1);
    }

    //push chracter to current string
    currentString.push(s[i]);

    //check if current string is longer than previous current string
    longestStringLength = Math.max(longestStringLength, currentString.length);
  }

  return longestStringLength;
};
console.log(lengthOfLongestSubstring("pwwkew"));

//using Set
var getLongestSubstring = function (s) {
  let longestSubstLenght = 0;

  for (let i = 0; i < s.length; i++) {
    let currentString = new Set();
    for (let j = i; j < s.length; j++) {
      if (currentString.has(s[j])) {
        break;
      } else {
        currentString.add(s[j]);
      }
    }

    longestSubstLenght = Math.max(longestSubstLenght, currentString.size);
  }
  return longestSubstLenght;
};

console.log(getLongestSubstring("pwwkew"));
