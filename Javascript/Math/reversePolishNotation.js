/**
 * stack class
 */
class Stack {
    constructor() {
        this.stack = [];
        this.length = this.stack.length;
    }

    add(...args) {
        this.stack.push(...args);
        return this.stack
    }

    remove() {
        return this.stack.pop();
    }

    popfromLast(count = 0) {
        if (count < 0) return "Give postive count";
        const result = [];
        for (let index = 0; index < count; index++) {
            result.push(this.remove());
        }

        return result;
    }
}

/**
 * 
 * @param {*} ops 
 * @param {*} a - first operand
 * @param {*} b - second operand
 * @param {*} stack 
 */
const operation = (ops, a, b, stack) => {
    switch(ops) {
        case '+' :
            stack.add(a+b);
            break;
        case '-' :
            stack.add(a-b);
            break;
        case '/' :
            stack.add(Math.floor(a/b));
            break;
        case '*' :
            stack.add(a*b);
            break;
    }
}

const main = (array) => {
    const stackInstance = new Stack();
    const operations = "+-/*";
    
    for (let index = 0; index < array.length; index++) {

        if (operations.includes(array[index])) {
             const [temp0, temp1] = stackInstance.popfromLast(2);
             operation(array[index], temp1, temp0, stackInstance);
        } else {
            stackInstance.add(array[index]);
        }
    }

    return stackInstance.remove();
}

const array1 = [2, 1, "+", 3, "*"];
const array2 = [4, 13, 5, "/", "+"];
const array3 = [3, 4, 5, "*", "-"];
const array4 = [5, 1, 2, "+", 4, "*", "+", 3, "-"];
console.log(main(array1));
console.log(main(array2));
console.log(main(array3));
console.log(main(array4));
