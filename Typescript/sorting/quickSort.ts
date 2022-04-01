class QuickSort {

    swap (array: number[], left, right) {
        const temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    }

    partition(array: number[], left: number, right: number) {
        const pivot = Math.floor((left+ right)/2);
        let leftPointer = left;
        let rightPointer = right;
    
        while( leftPointer <= rightPointer) {
            while (array[leftPointer] < array[pivot]) {
                leftPointer += 1;
            }

            while (array[rightPointer] > array[pivot]) {
                rightPointer -= 1;
            }

            if (leftPointer <= rightPointer) {
                this.swap(array, leftPointer, rightPointer);
                leftPointer += 1;
                rightPointer -= 1;
            }
        }
        return pivot;
    }

    sorting(array: number[], left: number, right: number): number[] {
        let pivotIndex: number;
        if (array.length > 1) {
           
            pivotIndex = this.partition(array, left, right); 
            
            if (left < pivotIndex -1) {
                this.sorting(array, left, pivotIndex -1);
            }

            if (pivotIndex < right) {
                this.sorting(array, pivotIndex, right);
            }
        }

        return array;
    }
}

const arr_old = [0, -2, -4, -5, 9, 11, 2, 3];
// console.log((new QuickSort()).sorting(arr_old, 0, arr_old.length -1))

class QuickSortEff {
    sorting(array: number[]) {
        if (array.length <= 1) {
            return array;
        }

        const pivot = array[array.length -1];
        const leftArr: number[] = [];
        const rightArr: number[] = [];

        for (let i =0; i < array.length -1; i++) {
            if (array[i] < pivot) {
                leftArr.push(arr[i]);
            } else {
                rightArr.push(arr[i]);
            }
        }
        return [...this.sorting(leftArr), pivot, ...this.sorting(rightArr)];
    }
}


const arr = [0, -1, 0, -3, 9, 1];
const sor = new QuickSortEff();
console.log(sor.sorting(arr));

