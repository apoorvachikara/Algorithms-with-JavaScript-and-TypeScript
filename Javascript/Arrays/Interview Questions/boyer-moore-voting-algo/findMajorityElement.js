const findMajority = (array) => {
    const threshold = Math.trunc(array.length /2);
    let majority = 0;
    const elementsWithCount = new Map();
    for (const el of array) {
        elementsWithCount.set(el, (elementsWithCount.get(el) || 0) + 1);
        if ( elementsWithCount.get(el) > threshold) {
            majority = el;
            return majority;
        }
    }
}

console.log(findMajority([2,2,1,1,1,2,2])); // 2