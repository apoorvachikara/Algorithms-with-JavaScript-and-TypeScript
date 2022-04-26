const rotatedArray = (array) => {
    
    let start = 0;
    let end = array.length - 1;

    // only one element;
    if (start === end) return start;

    // not rotated array
    if (array[end] > array[start]) return start;

    while (start < end) {
    
        const middle = Math.trunc((start + end)/2);

        if(array[middle] > array[end]) {
            start = middle+ 1;
        } else {
            end = middle;
        }
    }
    return start;
}


console.log(rotatedArray([4, 5, 6, 7, 8, 1, 2, 3]));