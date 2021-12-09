let interation = 0;



const interpolation = (arr, target) => {

    let high = arr.length - 1;
    let low = 0;

    while ( low <= high && target >= arr[low] && target <= arr[high]) {
        interation++;
      
        const position = low + Math.floor(target - arr[low]* ((high - low)/ arr[high] - arr[low]));
        console.log(position)
        if (arr[position] === target) {
            return `The target - ${target} is found at ${position}`
        }
    
       if (arr[position] < target) {
           low = position + 1;
       } else {
           high = position - 1;
       }
    }

    return `Target -  ${target} doesn't exist!`
}

const arr = [];

for (let i = 0; i < 65; i++) {
    arr.push(i);
}

console.log(arr);
const search = interpolation(arr, 70);
console.log(`searching number with interation - ${interation} and ${search}` );