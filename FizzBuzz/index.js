function fizzBuzz(n) {
  let str = "";
  if (n <= 1000) {
    for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0) {
        str += "fizz";
      } else if (i % 5 === 0) {
        str += "buzz";
      } else {
        str += String(i);
      }
    }
  }
  return str;
}

console.log(fizzBuzz(15));

function fizzbuzzify(n) {
  let str = [];
  if (n > 0) {
    for (let i = 1; i < n + 1; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        str.push("FizzBuzz");
      } else if (i % 3 === 0) {
        str.push("Fizz");
        {
        }
      } else if (i % 5 === 0) {
        str.push("Buzz");
      } else {
        str.push(i);
      }
    }
  }
  return str;
}

fizzbuzzify(10);

function fizzbuzz(n) {
  let res = [];
  let fizz, buzz;

  for (let i = 1; i < n; i++) {
    fizz = i % 3 === 0 ? ["Fizz"] : null;
    buzz = i % 5 === 0 ? ["Buzz"] : null;

    if (fizz && buzz) {
      res.push(["FizzBuzz"]);
    } else if (fizz) {
      res.push(fizz);
    } else if (buzz) {
      res.push(buzz);
    } else {
      res.push(i);
    }
  }
  return res;
}

console.log(fizzbuzz(15));
