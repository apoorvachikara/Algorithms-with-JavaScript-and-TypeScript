/**
 * 
 * @param {*} input 
 * @return {boolean} if an valid array - true else false
 */
const isArray = (input) => Array.isArray(input);

/**
 * O(n * d) - n number of elements and d is depth of elements
 * O(n) - new res array is created
 * 
 * @param {*} input 
 * @return {array} zero level array
 */
const flatArray = (input) => {
    const res = [];
    const helper = (input) => {
        if (!isArray(input)) return res.push(input);
        for (let i = 0; i< input.length; i++) {
                isArray(input[i]) ? helper(input[i]) : res.push(input[i]);
        }
    }
    helper(input);
    return res;
}


const array = [[[1], [2], [3]], [[4, [5], [6, [7, [8]]]]]];

console.log(flatArray(array));

