// Given an array of size N-1 such that it only contains
// distinct integers in the range of 1 to N. Find the missing element.

const checkMissingElement = (array) => {
  const missingNumber = [];
  for (let i = 1; i < array.length; i++) {
    const currentNum = array[i-1] + 1;
    if (currentNum !== array[i]) {
      missingNumber.push(currentNum);
    }
  }
  return missingNumber;
};

const arr = [1, 2, 3, 5, 7, 8, 9];
console.log(checkMissingElement(arr));


