/**
 * LinkNode - class
 */
class LinkNode {
    constructor(value = 0, previous = null, next = null) {
        this.value = value;
        this.previous = previous;
        this.next = next;
    }
}

class LinkList {
    constructor() {
        this.head = null
    }

    insert(value) {

        if (!this.head) {
            this.head = new LinkNode(value);
            return this;
        }

        this.head = new LinkNode(value, this.head);
    }
}

