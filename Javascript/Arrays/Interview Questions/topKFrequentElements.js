/**
 * Given an integer array nums and an integer k, 
 * return the k most frequent elements. 
 * You may return the answer in any order. 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
   Output: [1,2] 
 * 
   Input: nums = [1], k = 1
   Output: [1]

 * @param {*} nums 
 * @param {*} k 
 * @return {Array[number]}
 */
const topKFrequent = function(nums, k) {
    const map = new Map();
    let result = [];
    for (const key of nums) {
        const count = map.get(key);
        count ? map.set(key, count + 1) :  map.set(key, 1);
    }
    
    const itr = map[Symbol.iterator]();
    
    for (const item of itr) {
    result.push(item);
    }
    
    result.sort((a, b) => b[1] - a[1]);
    
    const temp = [];
    
    for (let i = 0; i < k;i++) {
        temp.push(result[i][0]);
    }
    
    return temp;
    
};
const arr = [1,1,1,2,2,3];
const arr_1 = [1];

console.log(topKFrequent(arr, 2));
console.log(topKFrequent(arr_1, 1));