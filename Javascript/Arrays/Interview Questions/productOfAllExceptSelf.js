/**
 * 
 * @param {*} array 
 * @return {number[]} array
 */
const productOfAllExceptSelf = (array) => {
    const products = [];
    const len = array.length;

    let leftProduct = 1;
    for (let i =0; i < len; i++) {
        products.push(leftProduct);
        leftProduct *= array[i];
    }

    let rightProduct = 1;
    for (let i = len -1; i >= 0; i--) {
        products[i] *= rightProduct;
        rightProduct *= array[i]; 
    }

    return products;
}

console.log(productOfAllExceptSelf([3, 5, 6, 1]));