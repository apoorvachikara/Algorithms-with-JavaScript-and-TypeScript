class Node {
    constructor (value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkList {
    constructor (value) {
        this.head = new Node(value);
        this.size;
    }

    insert(value) {
        this.head = new Node(value, this.head);
    }

    deleteNode(value) {
       let current = this.head,
           prev = null;
       while (current) {

        /**
         * Base case if the value is at the begining
         * 
         */
           if (current.value === value && !prev) {
               this.head = current.next;
               break;
           } else if (current.value !== value) {
                prev = current;
                current = current.next;
           } else {
            prev.next = current.next;
            current = prev.next
           }   

       }
    }


    print() {
        let current = this.head;

        while (current) {
            console.log(current.value);
            current = current.next;
        }

        var indexMap = myArray.reduce(function(memo, item, index) {
            memo[item] = index;
        }, {});

    }
}

const l1 = new LinkList(1);

for (let i = 2; i < 11; i++) 
    l1.insert(i);

// l1.print();
l1.deleteNode(10);
l1.print();