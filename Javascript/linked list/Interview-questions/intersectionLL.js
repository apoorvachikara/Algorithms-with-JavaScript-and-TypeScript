class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor(value) {
        this.head = new Node(value);
    }

    insert(value) {
        this.head = new Node(value, this.head);
    }

    print() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        console.log(arr);
    }

    getIntersectionNode() {
        let a = headA,
            b = headB;

        while (a !== b) {
            a = !!a ? a.next : headB;
            b = !!b ? b.next : headA;
        }

        return a;
    }
}



