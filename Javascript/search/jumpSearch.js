/**
 * Find a block size for the jump 
 * Find the block that contains the value
 * run linear search in the block
 * 
 * @param {*} arr [number]
 * @param {*} target [number]
 */

let count = 0;

const jumpSearch = (arr, target) => {
      
    const len = arr.length;
    const blockSize = Math.floor(Math.sqrt(len));
    let current = blockSize;
    //need to find the block which conatins the values
    while (arr[current - 1] < target) {
        // console.log(current);
           current = current + blockSize;
           count++;
    }

    console.log(current);
    let start = current - blockSize;

    while (start <= current) {
        count++;
        if (arr[start] === target) {
            return `Target ${target} is Found at ${start + 1} with itreation ${count} `
        }
        start +=1;
    }

    return `Target ${target} not found!`

};
const arr = [];

for (let i = 1; i < 14;i++) {
    arr.push(i);
}


console.log(jumpSearch(arr, 13));


