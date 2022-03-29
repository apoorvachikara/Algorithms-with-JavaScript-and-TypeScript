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
        debugger
        if (operations.includes(array[index])) {
             const temp = stackInstance.popfromLast(2);
             operation(array[index], temp[1], temp[0], stackInstance);
        } else {
            stackInstance.add(array[index]);
        }
    }
    return stackInstance.stack[0];
}

const array1 = [2, 1, "+", 3, "*"];
const array2 = [4, 13, 5, "/", "+"];
console.log(main(array1));
console.log(main(array2));
