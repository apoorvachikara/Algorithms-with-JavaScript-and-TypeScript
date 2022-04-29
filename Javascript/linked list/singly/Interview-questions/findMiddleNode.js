class  Node {
    constructor(value = 0 , next = null) {
        this.value = value;
        this.next = null;
    }
}

class LinkList {
    constructor() {
        this.head = null;
    }

    insert(value = 0) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let current = this.head;

        while(current.next) {
            current = current.next;
        }

        current.next = newNode;
        return this;
    }
}

const findMiddle = (list) => {
    let slow = list.head;
    let fast = slow.next.next;

    while(slow && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow.value;
}

const ll = new LinkList();
ll.insert(10).insert(20).insert(30).insert(40).insert(50).insert(60).insert(70)
console.dir(ll, {depth: null, colors: true});
console.log(findMiddle(ll));