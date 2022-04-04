/**
 * 
 * @param {*} array 
 * @return {number}
 * 
 * Time : O(n) and Space O(n)
 */
const findNonRepeatingElement = (array) => {
        const mappingTable = new Map();

        array.forEach((el) => {
            const count = mappingTable.get(el);
            mappingTable.set(el, (count +1  || 1));
        });

        for (const [key, value] of mappingTable) {
            if (value === 1) {
                return key;
            }
        }
}

const array = [1,1, 1, 2, 2, 3, 4, 4, 5, 5, 6, 6]
console.log(findNonRepeatingElement(array));