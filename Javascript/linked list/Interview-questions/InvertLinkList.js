class Node {
    constructor (val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class LinkList {
    constructor (data) {
        this.head = new Node(data);
        this.size = 0;
    }

    insert (data) {
        this.head = new Node(data, this.head);
    }

    print() {
       const values = [];

       let current = this.head;
       while (current) {
           values.push(current.val);
           current = current.next;
       }

       console.log(values.join(''));
    }

    invert() {
       let prev = null,
           current = this.head,
           next = null;
       
        while (current !== null) {
          next = current.next;
          current.next = prev;
          prev = current;
          current = next;
        }
        this.head = prev;
    }
}

const l1 = new LinkList(1);

for (let i = 2; i < 11; i++) 
    l1.insert(i);

l1.print();
l1.invert();
l1.print()