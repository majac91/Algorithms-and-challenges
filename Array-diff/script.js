function arrayDiff(a, b) {
  let difference = a.filter((x) => !b.includes(x));

  return difference;
}

console.log([1, 2], [1]);
console.log([1, 2, 2, 2, 3], [2]);
console.log(arrayDiff([3, 4], [3]));
