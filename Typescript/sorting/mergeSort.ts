/**
 * MergeSort will sort the unsorted array based on merge algorithm
 */
class MergeSort{

    merge(array: number[]) {
        // base case
        if (array.length <= 1) return array;

        // check middle, left and right to divide the array
        const middle: number = Math.floor(array.length/2);
        const left: number[] = array.slice(0, middle);
        const right: number[] = array.slice(middle);
        return this.mergeSort(this.merge(left), this.merge(right));
    }

    mergeSort(left: number[], right: number[]) {
        // creating two pointers to sort the array
        let leftIndex = 0,
            rightIndex = 0;
        
        // creating the results in this array
        const result = [];

        while (leftIndex < left.length && rightIndex < right.length) {
            if (left[leftIndex] < right[rightIndex]) {
                result.push(left[leftIndex]);
                leftIndex += 1;
            } else {
                result.push(right[rightIndex]);
                rightIndex += 1;
            }
        }

        // slicing is used if there are any elements left while looping
        return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
    }
}

const arr = [0, 8, -1, -3, 5];
const merge = new MergeSort();
console.log(merge.merge(arr));
