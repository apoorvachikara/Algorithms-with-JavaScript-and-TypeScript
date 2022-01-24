let iteration = 0;

const binary = (arr, start, end, target) => {
  iteration += 1;
  if (start > end) {
    return `Target ${target} Doesn't exist`;
  }

  const middle = Math.floor((start + end)/2);

  if (arr[middle] === target) {
    return `Target ${target} found at index ${middle}`;
  }

  if (arr[middle] > target) {
    // start = start;
    end = middle - 1;
    return binary(arr, 0, end, target);
  } else {
    start = middle + 1;
    return binary(arr, start, end, target);
  }

  return `No target ${target} found `;
};

const arr = [];

for (let i = 1; i < 65; i++) {
  arr.push(i);
}

const search = binary(arr, 0, arr.length, 63);
console.log(search);
console.log(`Total Iteration is ${iteration} and total input is ${arr.length}`);
