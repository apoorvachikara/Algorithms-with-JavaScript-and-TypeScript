type value = number | string | null;

/**
 * NodeLL class to create nodes in doubly LL
 */
class NodeLL {

    public value: value;
    public previous: NodeLL;
    public next: NodeLL;

    /**
     * 
     * @param {number | string} value - data
     * @param {NodeLL} previous - previous node
     * @param {NodeLL} next - next node
     */
    constructor (value : value= 0, previous: NodeLL = null, next: NodeLL = null) {
        this.value = value;
        this.previous = previous;
        this. next = next;
    }
}


/**
 * DoublyLL class to create the Link list and methods on it
 */
class DoublyLL {

    private head: NodeLL = null;
    private tail: NodeLL = null;
    private size: number = 0;

    /**
     * 
     * @param {value} value - data
     * @param {NodeLL}  previous - previous node
     * @param {NodeLL} next - next node
     */
    constructor(value: value = null, previous: NodeLL = null, next: NodeLL = null) {
        this.head = new NodeLL(value, previous, next);
        this.tail = this.head;
        this.inceaseSize();
    }

    /**
     * 
     * @param {value} value - data to add
     * @return {DoublyLL}
     * 
     * inserts the node on head
     */
    insert(value: value = null) {
            const node = new NodeLL(value,null , this.head);
            this.head.previous = node;
            this.head = node;  
            this.inceaseSize();
            return this;
    }

    /**
     * 
     * @param {value} value - data
     * @param {number} index - index  to be deleted
     * @return {DoublyLL}
     * 
     * It inserts the node at given index
     */
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

    /**
     * 
     * @param {number} index - index position to be removed 
     * @param {string} position - position of the pointer usage
     * @return {DoublyLL}
     * 
     * removes the element at given index and
     * if we use position it can delete from start i.e head
     * and last i.e tail
     */
    remove(index: number = null, position: string = 'start') {
        
        // based on index passed to the function 
        if (index !== null && index > 0) {
            let current = this.head;
            let count = 0;
            
            while (current && count !== index) {
                current = current.next;
                count += 1;
            }

            const previous = current.previous;
            previous.next = current.next;
            return this;
        }

        // remove from last 
        // we can use tail
        if (position === 'last') {
             const previous: NodeLL = this.tail.previous;
             previous.next = null;
             this.tail = previous; 
        } else {
            const node = this.head.next;
            this.head = node;
        } 

        this.decreaseSize();
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

    private inceaseSize() {
        this.size += 1;
    }

    private decreaseSize() {
        this.size -= 1; 
    }

    get length(): number {
        return this.size;
    }
}

const dll = new DoublyLL(1);

dll.insert(2).insert(3).print().insertAtIndex(4,0)
.insertAtIndex(77, 2).print().remove().print()
.remove(1).print();

console.log(dll.length);
// console.log(dll);
 