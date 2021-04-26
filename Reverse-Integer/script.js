var reverse = function (x) {
  let res = "";
  let isNegative = x < 0;

  let arrX = x.toString().split("").reverse();

  for (let i = 0; i < arrX.length; i++) {
    res += arrX[i];
  }

  if (isNegative) {
    res = res.replace("-", "").trim();
    res = `-${res}`;
  }

  //slower runtime but smaller memory usage compared to using calculated values
  if (res < Math.pow(-2, 31) || res > Math.pow(2, 31) - 1) {
    return 0;
  } else {
    //removes leading zeros
    return Number(res);
  }
};

console.log(reverse(14500));

//Numbers starting with 0 in JS

let num = 01234;
console.log(num); //668

// explanation: https://www.quora.com/In-JavaScript-when-you-calculate-something-if-you-use-a-number-starting-with-0-just-like-050-the-output-is-not-correct-Why-does-the-0-matter

// "Use Number(<string>) instead of parseInt(<string>), which will be more performant, if you only care about base 10 numbers.
// Number ignores radix controls and either returns a base 10 conversion or NaN if it can’t.""
