var QuickSort = /** @class */ (function () {
    function QuickSort() {
    }
    QuickSort.prototype.swap = function (array, left, right) {
        var temp = array[left];
        array[left] = array[right];
        array[right] = temp;
    };
    QuickSort.prototype.partition = function (array, left, right) {
        var pivot = Math.floor((left + right) / 2);
        var leftPointer = left;
        var rightPointer = right;
        console.log(left, right, pivot);
        while (leftPointer <= rightPointer) {
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
    };
    QuickSort.prototype.sorting = function (array, left, right) {
        var pivotIndex;
        if (array.length > 1) {
            console.log('here');
            pivotIndex = this.partition(array, left, right);
            console.log(pivotIndex);
            if (left < pivotIndex - 1) {
                this.sorting(array, left, pivotIndex - 1);
            }
            if (pivotIndex < right) {
                this.sorting(array, pivotIndex, right);
            }
        }
        return array;
    };
    return QuickSort;
}());
// const arr = [0, -2, -4, -5, 9, 11, 2, 3];
var arr = [0, -1, 0, -3, 9, 1];
var sort = new QuickSort();
console.log(sort.sorting(arr, 0, 5));
