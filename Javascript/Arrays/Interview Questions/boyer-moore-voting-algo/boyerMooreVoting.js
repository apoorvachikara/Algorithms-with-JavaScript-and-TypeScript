/**
 * Step 1: select the candidate from the given array
 * if count === 0 we select the first candidate and increase the count
 * if count !== 0 we check the current number and incr or decr the count
 * 
 * Step 2: now check the count of the given candidate 
 * 
 * @param {*} array 
 * @return number - candidate 
 */
const findMajority = (array) => {
    // initialse count
    let count = 0;
    let candidate = -1;

    // loop to check the candidate
    for (const number of array) {
        if (count === 0) {
            candidate = number;
            count = 1;
        } else {
            if (candidate === number) count += 1;
            else count -= 1;
        }
    }

    // re-initialise
    count = 0;
    // loop to check the candidate has count or not
    for (const number of array) {
        if (candidate === number) count += 1;
    }

    if (count > (array.length/2)) return candidate;
    
    return -1;
}
  
console.log(findMajority([1, 2, 3, 4, 1, 1, 4, 1, 1, 4, 4, 4, 4, 4, 4]))


