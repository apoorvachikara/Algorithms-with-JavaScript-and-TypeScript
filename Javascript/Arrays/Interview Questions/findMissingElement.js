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

/**
 * Find missing number from unsorted array
 * arr = [2, 1, 3, 4, 5, 6, 8, 9];
 * 
 */
const find_Missing_UnSorted = () => {
   // sort an array and follow the lastnumber +1 
   // if (lastNumber + 1 !== currentNum) 'Found Missing element'
   // Time - O(n) Space: O(n) (sorting)
    return { way1: function(array){
        const missing = [];
        array.sort((a, b) => a - b);
        for (let index = 1; index < array.length; index++) {
          const currentNum = array[index -1];
         if (currentNum + 1 !== array[index]) {
            missing.push(currentNum +1);
         }
        }

        return missing;
    },
    way2: function(array) {
        // find the number of all numbers using n*(n+1) /2
        // get the total sum of the array 
        // total - sum from length of array = missing number
        // Time - O(n) Space: O(1)
        const n = array.length;
        const total = Math.trunc(((n+1)*(n+2))/2);
        const sum = array.reduce((a,b) => a + b);
        return total - sum;
    }
  }
}

const arr_1 = [2, 1, 3, 4, 5, 6, 8, 9];
const {way1, way2} = find_Missing_UnSorted();
console.log(way1(arr_1));
console.log(way2(arr_1));


