/* eslint-disable max-len */
const fibonacci = (n) => n === 0 ? 0 : (n === 1 || n === 2 ) ? 1 : fibonacci(n -1) + fibonacci(n - 2);
console.log(fibonacci(4));

// fibonacci with memoization
const cache = {};
const fibonacciMem = (n) => {
  if (cache[n]) return cache[n];

  const result = n === 0 ? 0 : (n === 1 || n === 2 ) ? 1 : fibonacci(n -1) + fibonacci(n - 2);
  cache[n] = result;

  return result;
};

console.log(fibonacciMem(4));
console.log(cache);
console.log(fibonacciMem(4));


/**
 * O(n) - Time and O(1) space
 * @param {*} n 
 * @return {number}
 */
const fibLessMem = (n) => {
  if (n === 0) return 0;
  else if (n === 1) return 1;

  const arr = new Array(2).fill(0);
  arr[0] = 0, arr[1] = 1;
  let count = 2;

  while (count <= n) {
    const sum = arr[0] + arr[1];
    arr[0] = arr[1];
    arr[1] = sum;
    count += 1;
  };

  return arr[1];
};

console.log(fibLessMem(1));

// (logn)
