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
            return this;
    }

    insertAtIndex(value: value, index: number) {
            let current: NodeLL = this.head;
            let previous: NodeLL = null;
            let count: number = 0;

            while (current && index !== count) {
                previous = current;
                current = current.next;
                count += 1;
            }

            if (!previous) {
                const newNode = new NodeLL(value, null, this.head);
                this.head = newNode;
                return this;
            } 

            const newNode = new NodeLL(value, previous, current);
            previous.next = newNode;
            return this;
    }

    print() {
        let current: NodeLL = this.head;
        const arr = [];
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
        return this;
    }
}

const dll = new DoublyLL(1);
dll.insert(2).insert(3).print().insertAtIndex(4,0).insertAtIndex(77, 2).print();
console.log(dll);
