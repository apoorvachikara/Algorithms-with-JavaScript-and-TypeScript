/**
 * Time complexity: O(n log(n)), Space complexity: O(n)
 * Working:
 * There are two methods - merge and mergeSort, lets
 * discuss one by one.
 *
 * Merge function - main role is to divide the unsorted array into
 * sub array.
 *
 * Taking an example of const arr = [0, -1, -3, 1, 3] to sort it
 *
 * Step 1: When we run the merge function with unsorted array, it is an
 * recursive call where the base case is array length should be equal or
 * greater than 1(let's see why is that)
 *
 * Step 2: We calculate middle, left and right based on middle of the array
 * it is because we want to divide the array into two parts left and right
 * to create sub-arrays (why do we need sub-arrays, we will discuss it).
 * middle based on arr defined above:
 * middle : 2;(it is left-side array)
 * left: 0; (will be zero only)
 * right: middle + 1;(it is right-side array)
 *
 * Step 3: Consider only merge(left) and merge(right) call as of now, what are
 * we doing in it. Now, when we pass the left side of the array - [0, -1] and
 * right side array - [-3, 1, 3];
 *
 * Consider the left hand subarray scenario first: second iteration of merge
 * middle: 0 index;
 * left: 0 index;
 * right: 1 index;
 *
 * with this we will merge(left) and merge(right), merge(left: [0]),
 * merge(right:[-1])
 * the base case will return the (third iteration)arr[0] (fourth)and arr[-1]
 *
 * Now, consider right subarray: fifth iteration of merge
 * middle: 1;
 * left: 0;
 * right: 1;
 *
 * with this we will merge(left: [-3]) and merge(right: [1, 3]), merge(right)
 * will be called twice as it has two elements but left will be returned with
 * arr[-3] and merge right with [1] [3];
 *
 * So, in Step 3 we have seen how the unsorted array is divided and created
 * sub-array with single element;
 *
 * Step 4: Now let's see how mergeSort the main algo works and adds the sorted
 * array. If you understand recursion when we get all the sub-arrays the first
 * returned array from merge(left) will be [0] and merge(right) will return [-1]
 *
 * We have seen this above in the second iteration of merge.
 *
 * Now, when we get left and right array in the function, how things work.
 * this function sorts the array using two-pointer and merge the array using
 * concat in the last;
 *
 * We will take simple 2 iteration to understand:
 *
 * When sub-arrays are created with only one element how the mergeSort function
 * look like - mergerSort([0], [-1]) consider the merge iteration from above
 *
 * mergeSort will respond [-1, 0]; This array will be returned
 * to the last subarray list which called mergeSort with one-one element.
 * So, in our case if we consider step 2 here merge(right) will return sorted
 * array [-3, 1, 3](in our case it is sorted already) in similar manner that we
 * just discussed.
 *
 * mergeSort([-1, 0], [-3, 1, 3]) returns the sorted array
 *
 *
 * @param {number[]} arr
 * @return {number[]} array
 */
const merge = (arr) => {
  if (arr.length <= 1) return arr;

  const middle = Math.floor(arr.length/2);
  const left = arr.slice(0, middle);
  const right = arr.slice(middle);

  return mergeSort(merge(left), merge(right));
};

/**
 *
 * @param {number[]} left
 * @param {number[]} right
 * @return {number[]} sorted array
 */
const mergeSort = (left, right) => {
  const result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex += 1;
    } else {
      result.push(right[rightIndex]);
      rightIndex += 1;
    }
  }
  console.log(result, left, right, leftIndex, rightIndex);

  return result.concat(left.slice(leftIndex))
      .concat(right.slice(rightIndex));
};

const arr = [0, -1, -4, 9, 10, -190, 100, 999, 7777];
console.log(merge(arr));


var findMedianSortedArrays = function(nums1, nums2) {
  let leftPointer = 0;
  let rightPointer = 0;
  const result = [];
  
  while (leftPointer < nums1.length && rightPointer < nums2.length) {
      if (nums1[leftPointer] < nums2[rightPointer]) {
          result.push(nums1[leftPointer]);
          leftPointer += 1;
      }  else {
           result.push(nums2[rightPointer]);
          rightPointer += 1;
      }
  }
  
  result.concat(nums1.slice(leftPointer)).concat(nums2.slice(rightPointer));
  return result;
};


console.log(findMedianSortedArrays([1, 3], [2]));