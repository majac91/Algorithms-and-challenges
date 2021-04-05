//IMAGE GALLERY
// https://www.testdome.com/questions/javascript/image-gallery/9773
function registerClickHandler() {
  const removeBtns = document.querySelectorAll(".remove");
  removeBtns.forEach((btn) => {
    btn.addEventListener("click", function (e) {
      e.target.parentNode.remove();
    });
  });
}

//ENSURE
// https://www.testdome.com/questions/javascript/ensure/21948
function ensure(value) {
  if (!value || value === "undefined") {
    throw new Error();
  } else {
    return value;
  }
}

try {
  console.log(ensure());
} catch (err) {
  console.log(err);
}

//FORMAT DATE
// https://www.testdome.com/questions/javascript/date/8521
function formatDate(userDate) {
  // format from M/D/YYYY to YYYYMMDD
  let y = userDate.split("/")[2];
  let m = userDate.split("/")[1];
  let d = userDate.split("/")[0];
  if (m.length === 1) {
    m = `0${m}`;
  }

  if (d.length === 1) {
    m = `0${d}`;
  }
  console.log(`${y}${m}${d}`);
  return `${y}${m}${d}`;
}

console.log(formatDate("1/3/2014"));

//toggle yellow background on spans with even numbers
const allNums = document.querySelectorAll("span");
const btn = document.getElementById("btn");
let toggled = false;

btn.addEventListener("click", toggleBackground);

function toggleBackground() {
  toggled = !toggled;

  let even = getEvenNums();
  if (toggled) {
    even.forEach((el) => (el.style.backgroundColor = "yellow"));
  } else {
    even.forEach((el) => (el.style.backgroundColor = "initial"));
  }
}

const getEvenNums = () => {
  let even = [];
  allNums.forEach((num) => {
    if (num.innerHTML % 2 === 0) {
      even.push(num);
    }
  });

  return even;
};

//RECURSION
// https://www.testdome.com/questions/typescript/check-digit/47504
function checkDigit(id) {
  let digit = 0;
  String(id)
    .split("")
    .map((n) => {
      digit += Number(n);
    });
  return digit > 9 ? checkDigit(digit) : digit;
}

console.log(checkDigit("55555"));

//TWO SUM
function findTwoSum(numbers, sum) {
  let indices = [];
  for (let i = 0; i <= numbers.length; i++) {
    for (let j = 0; j < i; j++) {
      if (numbers[i] + numbers[j] === sum) {
        indices.push([numbers[i], numbers[j]]);
      }
    }
  }
  return indices;
}

const indices = findTwoSum([1, 7, 5, 2, 5, 9, 3], 10);
console.log(indices);

//TOPIC COLORING
function newMessage(topicName) {
  let topics = document.querySelectorAll(`[data-topic-name='${topicName}']`);
  topics.forEach((topic) => (topic.style.backgroundColor = "red"));
}

newMessage("animals");

//REMOVE PROPERTY
// https://www.testdome.com/questions/javascript/remove-property/11883

//  operator IN returns true when property exists in an object:
//  if(prop in obj)

//  obj.hasOwnProperty(prop) does the same thing
function removeProperty(obj, prop) {
  if (obj.hasOwnProperty(prop)) {
    delete obj[prop];
    return true;
  } else {
    return false;
  }
}

removeProperty({ one: "apple", two: "orange", three: "pear" }, "three");
