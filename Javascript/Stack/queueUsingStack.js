class Queue {
    constructor() {
        this.stack1 = [];
        this.stack2 = [];
    }

    /**
     * Adds the items from stack2 to main stack1 
     * and push the new element to stack1
     * @param {*} value 
     */
    enqueue(value) {
        while (this.stack2.length) {
            this.stack1.push(this.stack2.pop());
        }
        this.stack1.push(value);
    }

    /**
     * stack1 keeps all the incoming data and when we dequeue we just can't 
     * remove the first item using shift instead we use another stack
     * and place all the stack1 items into it and pop the last element
     * 
     * FIFO using aux stack
     * 
     * @return {any} return the first entered element
     */
    dequeue() {
        while (this.stack1.length) {
            this.stack2.push(this.stack1.pop());
        }

        return this.stack2.pop();
    }

    /**
     * 
     * @return {} LastElemet | 'Empty List'
     */
    peek() {
        return this.stack1.length ? this.stack1[this.stack1.length - 1] : 'Empty List';
    }
}


const queue = new Queue();
for (let index = 0; index < 10; index++) {
    queue.push(index);
}

console.log(queue.stack1, queue.stack2);
queue.pop();
console.log(queue.stack1, queue.stack2);
queue.push(11);
console.log(queue.stack1, queue.stack2);