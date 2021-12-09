/**
 * find the bounds - lower and upper by incrementing the exponentially 
 * if we find the bounds pass to binary search
 */

const expoSearch = (arr, target) => {

    let low = 0,
        high = arr.length - 1;

    if (arr[low] === target) {
        return `Found target - ${target} at index 0`;
    }
    
    let exp = 1;

    exp.toString(2);

}