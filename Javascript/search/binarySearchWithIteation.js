const binary = (arr, target) => {
   let start = 0, end = arr.length - 1;
    
   while (start <= end) {
        const middle = Math.floor((start + end)/2);

        if (arr[middle] === target) {
            return middle;
        }

        if (arr[middle] > target) {
             end = middle - 1;
        } else {
             start = middle + 1;
        }
   }

   return `Not found`
}

const arr = [1, 3, 5, 8, 90, 99, 777, 6789, 10000];

console.log(`${binary(arr, 900)} Index!`);