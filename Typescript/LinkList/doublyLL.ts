import { threadId } from "worker_threads";

type value = number | string | null;

class NodeLL {

    public value: value;
    public previous: NodeLL;
    public next: NodeLL;

    constructor (value : value= 0, previous: NodeLL = null, next: NodeLL = null) {
        this.value = value;
        this.previous = previous;
        this. next = next;
    }
}

class DoublyLL {

    private head: NodeLL = null;
    private tail: NodeLL = null;
    constructor(value: value = null, previous: NodeLL = null, next: NodeLL = null) {
        this.head = new NodeLL(value, previous, next);
        this.tail = this.head;
    }


    insert(value: value = null) {
            const node = new NodeLL(value,null , this.head);
            this.head.previous = node;
            this.head = node;  
    }

    print() {
        let current: NodeLL = this.head;
        const arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }

        console.log(arr);
        
    }
}

const dll = new DoublyLL(1);
dll.insert(2);
dll.insert(3);
dll.print();

console.log(dll);
