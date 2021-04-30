console.log("SumZero");

function sumZero(arr) {
  //create pointers that correspond to index/position
  let left = 0;
  let right = arr.length - 1;

  //while left < right, loop through arr.
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      //return arr with elements that sum to zero or undefined
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero([-3, -2, -1, 0, 1, 2, 3, 3]));
console.log(sumZero([-3, -2, -1, 0, 5, 8]));
