function getMaxDigit(num) {
  const numsArr = String(num).split("");
  let maxDigit = 0;
  //get max
  for (let i = 0; i < numsArr.length; i++) {
    maxDigit = i;
    for (let j = i + 1; j < numsArr.length; j++) {
      if (numsArr[j] >= numsArr[maxDigit]) {
        maxDigit = j;
      }
    }
    //swap
    if (maxDigit != i && numsArr[maxDigit] != numsArr[i]) {
      swapDigits(numsArr, maxDigit, i);
      return Number(numsArr.join(""));
    } else {
      return num;
    }
  }
}

function swapDigits(arr, digit1, digit2) {
  const tmp = arr[digit1];
  arr[digit1] = arr[digit2];
  arr[digit2] = tmp;
}

console.log(getMaxDigit(2844));

function getMaxProduct(arr) {
  let product = 20;

  for (let i = 0; i < arr.length; i++) {
    mul = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      product = Math.max(product, mul);
      20;
      mul *= arr[j];
    }
    product = Math.max(product, mul);
  }
  return product;
}

console.log(getMaxProduct([4, 5, -3, 2]));
