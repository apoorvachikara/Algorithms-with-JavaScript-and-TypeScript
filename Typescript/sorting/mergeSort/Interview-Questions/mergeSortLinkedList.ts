const merge = (array) => {

    if (array.length <= 1) return array;

    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return mergeSort(merge(left), merge(right));
}

const mergeSort = (left, right) => {
    const result = [];
    let leftPointer = 0;
    let rightPointer = 0;

    while (leftPointer < left.length && rightPointer < right.length) {
        if (left[leftPointer] < right[rightPointer]) {
            result.push(left[leftPointer]);
            leftPointer += 1;
        } else {
            result.push(right[rightPointer]);
            rightPointer += 1;
        }
    }

    return result.concat(left.slice(leftPointer)).concat(right.slice(rightPointer));
}   

