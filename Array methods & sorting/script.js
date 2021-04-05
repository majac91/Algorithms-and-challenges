//1
const people = [
  {
    firstName: "Maja",
    lastName: "Cvetkovic",
    birthYear: 1991,
    height: 1.71,
    weight: 58,
  },
  {
    firstName: "Nikola",
    lastName: "Jovanovic",
    birthYear: 1991,
    height: 1.85,
    weight: 87,
  },
  {
    firstName: "Sanja",
    lastName: "Cvetkovic",
    birthYear: 1992,
    height: 1.76,
    weight: 60,
  },
];

//1.a
let arr = [];
people
  .filter((person) => person.height > 1.75)
  .forEach((filtered) =>
    arr.push(`${filtered.firstName} ${filtered.lastName}`)
  );
console.log(arr);
//1.b
console.log(
  people.sort((firstEl, secondEl) => firstEl.weight - secondEl.weight)
);
//1.c
console.log(
  people.map((person) => new Date().getFullYear() - person.birthYear)
);

//2
const movies = [
  {
    name: "Whiplash",
    year: 2014,
    score: 4,
  },
  {
    name: "Hannah and Her Sisters",
    year: 1986,
    score: 8.1,
  },
  {
    name: "Hamilton",
    year: 2020,
    score: 8.6,
  },
  {
    name: "The Dark Knight",
    year: 2008,
    score: 8.4,
  },
  {
    name: "Little women",
    year: 2019,
    score: 7.3,
  },
];

//2.a
console.log(movies.filter((movie) => movie.year > 2000));
//2.b
console.log(movies.reduce((acc, curr) => acc + curr.score, 0) / movies.length);
//2.c
console.log(
  movies.filter((movie) => movie.score > 8).sort((a, b) => a.score > b.score)
);
//2.d
console.log(
  movies
    .filter((movie) => movie.name !== "The Dark Knight" && movie.score > 8)
    .sort((a, b) => a.score > b.score)
);

// array to string
let months = ["jan", "feb", "mart", "april"];

//1.
console.log(String(months));

//2.
let monthsString = "";
months.forEach((month) => (monthsString += `, ${month}`));

// swap two array items
var days = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

//1.
const swapDays = (arr, index1, index2) => {
  [arr[index1], arr[index2]] = [arr[index2], arr[index1]];
  return arr;
};

//2.
let tuesday = days[1];
let saturday = days[5];
days[1] = saturday;
days[5] = tuesday;
console.log(days);

//3.
let temp = days[1];
days[1] = "sat";
days[5] = temp;
console.log(days);

//4.
const tue = days.find((day) => day === "tue");
const sat = days.find((day) => day === "sat");

const tueIndex = days.indexOf(tue);
const satIndex = days.indexOf(sat);

days[tueIndex] = "sat";
days[satIndex] = "tue";
console.log(days);

console.log(swapDays(days, 2, 4));

//remove item from array
let cars = ["bmw", "renault", "citroen"];

const removeCar = (car) => {
  cars.splice(cars.indexOf(car), 1);
  console.log(cars);
  return cars;
};

removeCar("citroen");

//move items one place left (rotate)
const animals = ["elephant", "lion", "monkey", "fox"];
const [first, ...rest] = animals;
const rotatedAnimals = [...rest, first];
console.log(rotatedAnimals);

//find unique array elements
//Set is an object which lets you store unique values of any type
let numArr = [1, 1, 2, 3, 4, 5, 4, 2];

//1.
console.log([...new Set(numArr)]);

//2.
console.log(numArr.sort().filter((num, index) => num !== numArr[index + 1]));

//3.
const removeArrDuplicates = (arr) => new Set(arr);
console.log(removeArrDuplicates(numArr));

//4. create an array with no duplicates from a string
let numStr = "1, 1, 2, 3, 4, 5, 4, 2";

const removeStrDuplicates = (str) => {
  return Array.from(new Set(str.split(", ")));
};
console.log(removeStrDuplicates(numStr));

var removeDuplicates = function (nums) {
  return new Set(nums);
};

let nums = [1, 1, 2];

var removeDuplicates = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] === nums[j]) {
        nums.splice(nums[j], 1);
      }
    }
    return nums;
  }
};

console.log(removeDuplicates(nums));

//Print vowels and consonants (vowels first, consonant next, both in order as they appear in the string)
//1.
const s = "javascriptloops";
const vowels = ["a", "e", "i", "o", "u"];

function print(str) {
  [...str]
    .filter((letter) => vowels.includes(letter))
    .forEach((vowel) => console.log(vowel));

  [...str]
    .filter((letter) => !vowels.includes(letter))
    .forEach((consonant) => console.log(consonant));
}

print(s);

//2.
const str = "javascriptloops";

function vowelsAndConsonants(str) {
  let consonants = [];

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      console.log(str[i]);
    } else {
      consonants.push(str[i]);
    }
  }

  consonants.forEach((cons) => console.log(cons));
}

vowelsAndConsonants(str);

//Return the second largest number in array

let numsArr = [9, 9, 8, 8, 1, 8, 0, 10, 1];

//1.
function getSecondLargest(nums) {
  let uniqueNums = [...new Set(numsArr)].sort((a, b) => a > b);
  let highestNum = uniqueNums[uniqueNums.length - 1];
  for (let i = nums.length - 1; i > 0; i--) {
    if (uniqueNums[i] < highestNum) {
      return uniqueNums[i];
    }
  }
}
console.log(getSecondLargest(numsArr));

//2.
function getSecondLargestNum(nums) {
  nums = [...new Set(nums)];
  nums.sort(function (a, b) {
    return a - b;
  });
  return nums[nums.length - 2];
}

console.log(getSecondLargestNum(numsArr));
