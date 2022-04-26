/**
 * Time: O(logn), Space: O(1)
 * 
 * @param {*} arr 
 * @return {number}
 */
const findPeak = (arr) => {
    let start = 0;
    let end = arr.length -1;
 
    while(start < end) {
        const middle = Math.floor((start + end)/2);
        if (arr[middle -1] < arr[middle] && arr[middle] > arr[middle + 1]) {
            return arr[middle];
        } else if (arr[middle -1] < arr[middle] && arr[middle] < arr[middle + 1]) {
            start = middle + 1;
        } else {
            end = middle;
        }
    }
 return -1;
 }

 console.log(findPeak([1, 2, 3, 1, 5, 6, 7, 1, 2, 4])); // 7