/**
 * Implementing Queue using Objects
 * 
 */
class Queue {
    constructor() {
        this.head = 0;
        this.tail = 0;
        this.element = new Map();
    }

    /**
     * tail represents the key starting from 0
     * 
     * @param {*} element 
     */
    enqueue(element) {
        this.element.set(this.tail, element);
        this.tail += 1;
        return this;
    }

    /**
     * head represents the first element in the queue 
     */
    dequeue() {
        const element = this.element[this.head];
        this.element.delete(this.head);
        this.head += 1;
        return this;
    }

    /**
     * check the first element in the queue
     */
    peek() {
        this.element.get(this.head);
    }

    get length() {
        return this.element.size;
    }

    get isEmpty() {
        return this.element.size;
    }
}

const que = new Queue();

que.enqueue(12).enqueue(13).enqueue(14).enqueue(15).dequeue().dequeue();

console.log(que.length);
console.log(que.isEmpty);
