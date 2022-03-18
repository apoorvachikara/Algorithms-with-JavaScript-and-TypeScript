/**
 * Stack is a linear data structure in which addition or removal 
 * of element follows a particular order i.e. LIFO(Last in First Out) 
 * AND FILO(First in Last Out).
 */

class Stack {
    constructor() {
        this.item = [];
    }

    push(...element) {
        return this.item.push(...element);
    }

    pop() {
        if (this.item.length === 0) throw('Empty Stack');
        return this.item.pop();
    }

    peek() {
        return this.item[this.item.length - 1];
    }

    isEmpty(){
        if (this.item.length === 0) return true;
        else return false;
    }

    printStack() {
        return this.item.toString();
    }
}

const stack = new Stack();
console.log(stack.push(...[10, 20, 30, 40]));
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.isEmpty());
console.log(stack.printStack());