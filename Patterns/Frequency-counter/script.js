console.log("SAME");
function same1(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let frequencyCounter1 = {};
  let frequencyCounter2 = {};

  //breaking down the arr content: if element exists as a key of obj, increase count. else, create key and store 1
  for (let val of arr1) {
    frequencyCounter1[val] = ++frequencyCounter1[val] || 1;
  }

  for (let val of arr2) {
    frequencyCounter2[val] = ++frequencyCounter2[val] || 1;
  }

  //check if squares of each key from counter 1 exist in counter 2
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log("approach1");
console.log(same1([1, 2, 3], [4, 1, 9]));
console.log(same1([1, 2, 3], [4, 1]));
console.log(same1([1, 2, 1], [4, 1, 4]));

function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  const arr1Elements = {};
  let isInArr1 = [];
  let isSame;

  for (let element of arr1) {
    arr1Elements[element] = ++arr1Elements[element] || 1;
  }

  //loop over the second arr and check if each element's root exist as key in arr1
  for (let element of arr2) {
    if (arr1Elements[Math.sqrt(element)]) {
      isInArr1.push(true);
    } else {
      isInArr1.push(false);
    }
  }

  isSame = isInArr1.includes(false) ? false : true;

  for (let val in arr1Elements) {
    if (arr1Elements[val] > 1) isSame = false;
  }

  return isSame;
}

console.log("approac2");
console.log(same2([1, 2, 3], [4, 1, 9]));
console.log(same2([1, 2, 3], [4, 1]));
console.log(same2([1, 2, 1], [4, 1, 4]));

function same3(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }

  let isSame = false;
  arr1.forEach((element) => {
    isSame = arr2.includes(Math.pow(element, 2)) ? true : false;
  });

  return isSame;
}

console.log("approach3");
console.log(same3([1, 2, 3], [4, 1, 9]));
console.log(same3([1, 2, 3], [4, 1]));
console.log(same3([1, 2, 1], [4, 1, 4]));

console.log("ANAGRAMS");

function validAngram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let str1CharCount = {};
  let str2CharCount = {};

  for (let char of str1) {
    str1CharCount[char] = ++str1CharCount[char] || 1;
  }

  for (let char of str2) {
    str2CharCount[char] = ++str2CharCount[char] || 1;
  }

  Object.keys(str1CharCount).map((key) => {
    if (!(key in str2CharCount)) return false;
  });

  for (let key in str1CharCount) {
    if (!(key in str2CharCount)) return false;
    if (str1CharCount[key] !== str2CharCount[key]) return false;
  }

  return true;
}
console.log(validAngram("car", "rat"));
console.log(validAngram("rat", "tar"));
