/**
 *
 * @param {*} array
 * @param {*} left
 * @param {*} right
 */
const swap = (array, left, right) => {
  const temp = array[left];
  array[left] = array[right];
  array[right] = temp;
};

/**
 *
 * @param {*} array
 * @param {*} left
 * @param {*} right
 * @return {number}
 */
const partition = (array, left, right) => {
  const pivot = Math.floor((left + right)/2);
  let leftPointer = left;
  let rightPointer = right;

  while (leftPointer <= rightPointer) {
    while (array[leftPointer] < array[pivot]) {
      leftPointer += 1;
    }

    while (array[rightPointer] > array[pivot]) {
      rightPointer -= 1;
    }

    if (leftPointer <= rightPointer) {
      swap(array, leftPointer, rightPointer);
      leftPointer += 1;
      rightPointer -= 1;
    }
  }

  return leftPointer;
};


/**
 *
 * @param {*} item
 * @param {*} left
 * @param {*} right
 * @return {number[]}
 */
const quickSort = (item, left, right) => {
  let index;

  if (item.length > 1) {
    index = partition(item, left, right);

    if (left < index -1) {
      quickSort(item, left, index -1);
    }

    if (index < right) {
      quickSort(item, index, right);
    }
  }


  return item;
};

const arr = [3, 5, 1];
console.log(quickSort(arr, 0, arr.length -1));

function QuickSort(Arr){
    if(Arr.length <= 1){
      return Arr;
    }

    const pivot = Arr[Arr.length - 1];
    const leftArr = [];
    const rightArr = [];

    for(let i=0; i < Arr.length-1;i++){
      if(Arr[i] < pivot){
        leftArr.push(Arr[i]);
      }
      else{
        rightArr.push(Arr[i])
      }
    }

    return [...QuickSort(leftArr) ,pivot,...QuickSort(rightArr)];

  }

  let arr_1 = [0, 8, 9, -2, 4, 3, -1];
  console.log(QuickSort(arr_1));
