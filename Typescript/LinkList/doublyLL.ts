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
    private size: number = 0;

    constructor(value: value = null, previous: NodeLL = null, next: NodeLL = null) {
        this.head = new NodeLL(value, previous, next);
        this.tail = this.head;
        this.inceaseSize();
    }

    insert(value: value = null) {
            const node = new NodeLL(value,null , this.head);
            this.head.previous = node;
            this.head = node;  
            this.inceaseSize();
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

            this.inceaseSize();
            return this;
    }

    remove(option: {index: number, position: string}) {
        // remove from last 
        // we can use tail
        if (option.position === 'last') {
             const previous: NodeLL = this.tail.previous;
             previous.next = null;
             this.tail = previous;
        }

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

    inceaseSize() {
        this.size += 1;
    }

    get length(): number {
        return this.size;
    }
}

const dll = new DoublyLL(1);
dll.insert(2).insert(3).print().insertAtIndex(4,0).insertAtIndex(77, 2).print().remove({index: 0, position: 'last'}).print();
// console.log(dll.length);
// console.log(dll);
 