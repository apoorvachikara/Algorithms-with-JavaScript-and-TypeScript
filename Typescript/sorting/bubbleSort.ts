/**
 * Sinking sort or exchange sort or brute-force approach
 */
class BubbleSort {
    /**
     * 
     */
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor(){}

    /**
     * Simple two loop sorting function if next element is smaller than the outer loop 
     * element we swap it
     * @param arr array of number
     * @returns 
     */
    sorting(arr: Array<unknown>) {
        let swap = false;
        for (let i = 0; i < arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if (arr[j] < arr[i]) {
                    const temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                    swap = true
                }
            }
            if (!swap) {
             return arr}
        }
        return arr;
    }

    sorting_v2(arr: Array<unknown>) {
        // run the steps n-1 times
        for (let i = 0; i < arr.length; i++) {
            // the loop will run total - outer loop run as the last elements 
            // are already sorted
            for (let j = 1; j < arr.length -i ; j++) {
                if (arr[j] < arr[j-1]) {
                    const temp = arr[j];
                    arr[j] = arr[j -1];
                    arr[j-1] = temp;
                }
            }
        }
        return arr;
    }

    sorting_v3(arr: Array<number>) {
        let swap = false;
        for (let i =0; i < arr.length; i++) {
            for (let j = 1; j < arr.length; j++) {
                if (arr[j-1] > arr[j]) {
                    const temp = arr[j-1];
                    arr[j- 1] = arr[j];
                    arr[j] = temp;
                    swap = true
                }
            }
            if (!swap) return arr;
        }
        return arr;
    }
}

const sort = new BubbleSort().sorting;
const sort_v2 = new BubbleSort().sorting_v2;
const sort_v3 = new BubbleSort().sorting_v3;

console.log(sort([-1, -4, 1, 4, 5, 6, -6]));
console.log(sort_v2([-1, -4, 1, 4, 5, 6, -6]));
console.log(sort_v3([6, 1, 23, -0, 1, 5, 8, -1]));




